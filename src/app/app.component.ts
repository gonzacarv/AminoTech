import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  botConfigs = {
    experto1: {
      systemMessage: 'You are a nutrition expert providing advice.',
      initialMessage: 'Hello! How can I assist you with your nutrition today?',
      model: 'gpt-3.5-turbo',
      temperature: 0.7,
      max_tokens: 150
    },
    experto2: {
      systemMessage: 'You are a fitness expert providing training tips.',
      initialMessage: 'Hello! How can I assist you with your fitness goals today?',
      model: 'gpt-3.5-turbo',
      temperature: 0.7,
      max_tokens: 150
    },
    experto3: {
      systemMessage: 'You are a mental health counselor providing support.',
      initialMessage: 'Hello! How can I assist you with your mental health today?',
      model: 'gpt-3.5-turbo',
      temperature: 0.7,
      max_tokens: 150
    },
    experto4: {
      systemMessage: 'You are a career coach providing guidance.',
      initialMessage: 'Hello! How can I assist you with your career planning today?',
      model: 'gpt-3.5-turbo',
      temperature: 0.7,
      max_tokens: 150
    }
  };
}
