import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-chat-bar',
  templateUrl: './chat-bar.component.html',
  styleUrls: ['./chat-bar.component.css'],
})
export class ChatBarComponent {
  @Input() username: string = '';
  @Output() submitMessage = new EventEmitter<string>();

  public chatMessage = '';
  public errorMessage = '';

  public addMessage(message: string): void {
    if (!message.trim()) {
      this.errorMessage = 'Bitte Text eingeben!';
      this.chatMessage = '';
      return;
    }

    if (!this.username) {
      this.errorMessage = 'Erstellen Sie bitte zuerst einen Nicknament!';
      this.chatMessage = '';
      return;
    }

    this.submitMessage.emit(message);
    this.chatMessage = '';
    this.errorMessage = '';
  }
}










