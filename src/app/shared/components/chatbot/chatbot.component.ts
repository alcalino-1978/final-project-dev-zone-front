import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { OpenaiService } from '../../services/openia.service';

export interface Message {
  type: string;
  message: string;
}

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.scss'],
})
export class ChatbotComponent {
  isOpen = false;
  loading = false;
  messages: Message[] = [];
  chatForm = new FormGroup({
    message: new FormControl('', [Validators.required]),
  });
  @ViewChild('scrollMe') private myScrollContainer: any;

  constructor(private openaiService: OpenaiService) {}
  ngOnInit() {
    // this.messages.push({
    //   type: 'client',
    //   message: 'Hi 👋, I am your support agent. How can I help you?',
    // });
  }
  openSupportPopup() {
    this.isOpen = !this.isOpen;
  }

  sendMessage() {
    const sentMessage = this.chatForm.value.message!;
    this.loading = true;
    this.messages.push({
      type: 'user',
      message: sentMessage,
    });
    this.chatForm.reset();
    this.scrollToBottom();
    this.openaiService.completions(sentMessage).subscribe((response: any) => {
      this.loading = false;
      // console.log(response);
      this.messages.push({
        type: 'client',
        message: response.message,
      });
      this.scrollToBottom();
    });
  }

  scrollToBottom() {
    setTimeout(() => {
      try {
        this.myScrollContainer.nativeElement.scrollTop =
          this.myScrollContainer.nativeElement.scrollHeight + 500;
      } catch (err) {}
    }, 150);
  }
}
