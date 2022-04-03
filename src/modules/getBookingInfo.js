export default function getBookingInfo(title, dateTime, price) {
  const item = document.querySelector('.confirm-summary-item')
  const AppointmentDate = document.querySelector('.confirm-summary-datetime')
  const total = document.querySelector('.total')

  item.innerText = title
  AppointmentDate.innerText = dateTime
  total.innerText = price
}
