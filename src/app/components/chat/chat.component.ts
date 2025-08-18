import { ChangeDetectorRef, Component } from '@angular/core';
import { GroqServiceService } from '../../service/groq-service.service';

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}
@Component({
  selector: 'app-chat',
  standalone: false,
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss',
  
})
export class ChatComponent {
userPrompt = '';
  messages: ChatMessage[] = [];
  isLoading = false;

  constructor(
    private groqService: GroqServiceService,
    private cdr: ChangeDetectorRef   // ✅ Inject ChangeDetectorRef
  ) {}

  sendPrompt() {
    if (!this.userPrompt.trim()) return;

    // Push user message
    this.messages.push({ role: 'user', content: this.userPrompt });

    const prompt = this.userPrompt;
    this.userPrompt = '';
    this.isLoading = true;

    this.groqService.askGroq(prompt).subscribe({
      next: (res) => {
        this.messages.push({ role: 'assistant', content: res });
        this.isLoading = false;

        // ✅ Trigger Angular to detect new changes immediately
        this.cdr.detectChanges();

        // Auto-scroll down
        setTimeout(() => {
          const chatWindow = document.querySelector('.chat-window');
          if (chatWindow) chatWindow.scrollTop = chatWindow.scrollHeight;
        }, 100);
      },
      error: (err) => {
        console.error('Error:', err);
        this.isLoading = false;
        this.cdr.detectChanges(); // ✅ Also detect changes on error
      },
    });
  }
}
