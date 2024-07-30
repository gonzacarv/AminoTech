import { Component, Input, OnInit } from '@angular/core';
import axios from 'axios';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  @Input() botConfig: any;
  userInput: string = '';
  messages: Array<{role: string, content: string}> = [];

  ngOnInit() {
    if (this.botConfig.initialMessage) {
      this.messages.push({ role: 'assistant', content: this.botConfig.initialMessage });
    }
  }

  async sendMessage() {
    if (this.userInput.trim() === '') {
      return;
    }

    this.messages.push({ role: 'user', content: this.userInput });
    const userMessage = this.userInput;
    this.userInput = '';

    try {
      const response = await axios.post('https://api.openai.com/v1/chat/completions', {
        model: this.botConfig.model || 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: this.botConfig.systemMessage },
          ...this.messages.map(m => ({ role: m.role, content: m.content })),
          { role: 'user', content: userMessage }
        ],
        temperature: this.botConfig.temperature || 0.7,
        max_tokens: this.botConfig.max_tokens || 150
      }, {
        headers: {
          'Authorization': `Bearer ${environment.openAiApiKey}`,
          'Content-Type': 'application/json'
        }
      });

      const botResponse = response.data.choices[0].message.content;
      this.messages.push({ role: 'assistant', content: botResponse });
    } catch (error) {
      console.error('Error:', error);
      this.messages.push({ role: 'assistant', content: 'Error fetching response from OpenAI API.' });
    }
  }
}
