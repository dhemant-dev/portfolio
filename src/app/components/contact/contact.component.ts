import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactData = {
    name: '',
    email: '',
    subject: '',
    inquiryType: '',
    message: ''
  };

  onSubmit() {
    const email = 'hemantdubey48@gmail.com';
    const subject = encodeURIComponent(this.contactData.subject || `Inquiry from Portfolio: ${this.contactData.inquiryType}`);
    const body = encodeURIComponent(
      `Name: ${this.contactData.name}\n` +
      `Email: ${this.contactData.email}\n` +
      `Inquiry Type: ${this.contactData.inquiryType}\n\n` +
      `Message:\n${this.contactData.message}`
    );

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  }
}
