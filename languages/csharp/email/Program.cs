using System;
using System.Threading.Tasks;
using MailKit.Net.Smtp;
using MimeKit;

namespace email
{

    public class MailKitHelper
    {
        MimeMessage mailmessage = new MimeMessage();
        public void sendEmail(User user, string message)
        {
            mailmessage.From.Add(new MailboxAddress("Edwin Muraya","edwinkamaumuraya0@gmail.com"));
            mailmessage.To.Add(new MailboxAddress(user.Name ,user.Email));
            mailmessage.Subject = "Password Reset";
            mailmessage.Body = new TextPart("plain") { 
              Text = "Hello"
            };
            using var smtpClient = new SmtpClient();
            smtpClient.Connect("smtp.gmail.com", 587, true);
            smtpClient.Authenticate("user", "password");
            smtpClient.Send(mailmessage);
            smtpClient.Disconnect(true);
      }
    }

    class Program
    {
        static void Main(string[] args)
        {
            //var emailhelper = new SmtpHelper();
            //emailhelper.sendEmail("gotiy61609@naymeo.com", "Hello edwin is testing stuff");
            var user = new User() { Email = "gotiy61609@naymeo.com", Name = "Gotiy" };
            var mailhelper = new MailKitHelper();
            mailhelper.sendEmail(user, "Hello Muraya");
        }
    }
}
