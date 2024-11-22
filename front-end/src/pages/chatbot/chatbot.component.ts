import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule
import { CommonModule } from '@angular/common'; // Import CommonModule
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

interface Message {
  sender: string;
  text: string;
  editable: boolean;
}

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements OnInit {
  messages: Message[] = [
    {
      sender: 'bot',
      text: 'Hello! I am AI Assistant, your assistant. How can I help you today?',
      editable: false
    }
  ];
  userInputForm = new FormControl(''); // Input field form control
  editingIndex: number | null = null; // Track which message is being edited

  constructor(
    private router: Router,
    private dialogRef: MatDialogRef<ChatbotComponent>
  ) {}

  ngOnInit() {}

  sendMessage() {
    const userText = this.userInputForm.value?.trim();
    if (!userText) {
      return; // Prevent adding empty messages
    }

    if (this.editingIndex !== null) {
      // If editing a message, update it
      this.messages[this.editingIndex].text = userText;
      this.editingIndex = null; // Reset editing index
    } else {
      // Add new user's message
      const userMessage: Message = {
        sender: 'user',
        text: userText,
        editable: false
      };
      this.messages.push(userMessage);
    }

    // Clear input field after sending
    this.userInputForm.setValue('');
  }

  editMessage(index: number) {
    // Set the input field value to the message text for editing
    this.userInputForm.setValue(this.messages[index].text);
    this.editingIndex = index; // Mark the message as being edited
  }

  closeChatbot() {
    this.dialogRef.close();
  }
}
