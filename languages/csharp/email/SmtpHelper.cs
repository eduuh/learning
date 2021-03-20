using MailKit.Net.Smtp;

namespace email
{
    public class SmtpHelper
    {
        MailMessage mailmessage = new MailMessage();
        SmtpClient client = new SmtpClient("smtp.gmail.com") { 
            Port = 587,
            EnableSsl = true,
            Credentials = new NetworkCredential("edwinkamaumuraya0@gmail.com", "edd0715209404k")
        };
        public void sendEmail(string userEmail, string message)
        {
            mailmessage.From = new MailAddress("edwinkamaumuraya0@gmail.com");
            mailmessage.To.Add(new MailAddress(userEmail));
            mailmessage.Subject = "Password Reset";
            mailmessage.Body = message;
            mailmessage.IsBodyHtml = true;
            client.Send(mailmessage);
        }
    }
}
