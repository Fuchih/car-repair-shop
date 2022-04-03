import MCDatepicker from 'mc-datepicker'
import pageNavigation from './pageNavigation'
import getBookingInfo from './getBookingInfo'

export default function setSummary() {
  const dateTimeInput = document.querySelector('#dateTimePicker')
  const today = document.querySelector('.date-format')
  const summaryDate = document.querySelector('.summary-detail-date')
  const summaryTime = document.querySelector('.summary-detail-time')
  const timeSheet = document.querySelector('.timesheet')
  const next = document.querySelector('#booking-next')
  const itemTitle = document.querySelector('.booking-item-title')
  const summaryTitle = document.querySelector('.summary-detail-title')

  const datePicker = MCDatepicker.create({
    el: '#dateTimePicker',
    bodyType: 'modal',
    dateFormat: 'dddd, dd mmm yy',
    minDate: new Date(),
    disableDates: [new Date()],
    theme: {
      theme_color: 'rgb(34, 34, 34, 0.8)',
    },
  })

  const formattedDate = datePicker.getFormatedDate()
  today.innerText = formattedDate
  summaryTitle.innerText = itemTitle.innerText

  datePicker.onClose(() => {
    today.innerText = dateTimeInput.value
    summaryDate.innerText = dateTimeInput.value
  })

  timeSheet.addEventListener('click', (e) => {
    const timeLists = document.querySelectorAll('.timesheet>li')
    const target = e.target

    if (target.nodeName === 'UL') return

    timeLists.forEach((list) => list.classList.remove('selected-time'))
    summaryTime.innerText = target.textContent
    target.classList.add('selected-time')
  })

  next.addEventListener('click', () => {
    const summaryPrice = document.querySelector(
      '.summary-detail-price',
    ).innerText

    const dateTime = `${summaryDate.innerText} ${summaryTime.innerText}`

    if (!Boolean(summaryTime.innerText) || !Boolean(summaryDate.innerText)) {
      alert('Please pick a date and time at your convenience')
      return
    }

    getBookingInfo(itemTitle.innerText, dateTime, summaryPrice)
    pageNavigation('confirm')
  })
}
