import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  constructor() {}

  // Simulate a bot response
  getBotResponse(userMessage: string): Observable<string> {
    // Simple logic to generate responses, you can replace this with an API call
    let botResponse = "I'm sorry, I didn't understand that.";
    if (userMessage.toLowerCase().includes('hello')) {
      botResponse = 'Hello! How can I assist you today?';
    } else if (userMessage.toLowerCase().includes('help')) {
      botResponse = 'Sure, I am here to help. Please tell me what you need assistance with.';
    }

    return of(botResponse).pipe(delay(1000)); // Simulate network delay
  }
}
