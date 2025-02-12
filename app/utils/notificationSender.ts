export async function sendNotification(jobNo: string, contactInfo: string): Promise<void> {
  // This is a mock function. In a real application, you would integrate with an email service or WhatsApp API
  console.log(`Sending notification for Job ${jobNo} to ${contactInfo}`)
  // Simulate an API call
  await new Promise((resolve) => setTimeout(resolve, 1000))
  console.log("Notification sent successfully")
}

