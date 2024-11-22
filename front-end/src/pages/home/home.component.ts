import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog'; // Import MatDialog
import { ChatbotComponent } from '../chatbot/chatbot.component'; // Import the ChatbotComponent (adjust the path as needed)

interface Client {
  name: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule]
})
export class HomeComponent {
  prompt = '';
  clientsName = '';
  clientsList: Client[] = [
    { name: 'Client 1' },
    { name: 'Client 2' },
    // ... other clients
  ];

  selectedTabFirstCard: string = 'daily';
  selectedTabSecondCard: string = 'daily';

  clientCount = 45;
  requirementCount = 45;
  candidateCount = 45;
  receivedResumes = 45;
  processedResumes = 45;
  shortlistedResumes = 45;
  sentToClientResumes = 45;

  constructor(private router: Router, private dialog: MatDialog) {} // Inject MatDialog
  selectTab(tab: string, card: string) {
    if (card === 'first') {
      this.selectedTabFirstCard = tab;
    } else if (card === 'second') {
      this.selectedTabSecondCard = tab;
    }
  }

  generate(prompt: string) {
    // Add any logic needed before navigation, if necessary
    this.router.navigate(['/chatbot']);
  }

  openChatbot() {
    this.dialog.open(ChatbotComponent, {
      height: '600px',
      width: '900px',
      disableClose: false, // Allow closing via ESC or clicking outside if needed
      hasBackdrop: false, // Prevent dimming or covering the home component layout
      panelClass: 'custom-chatbot-dialog',
      data: { prompt: this.prompt } // Pass data if necessary
    });
  }
}
