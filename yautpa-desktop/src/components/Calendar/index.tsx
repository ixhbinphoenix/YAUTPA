import { useState } from "react";
import "./index.scss";

function getMonthString(month: number): string {
  switch (month) {
    case 0:
      return "January";
    case 1:
      return "February";
    case 2:
      return "March";
    case 3:
      return "April";
    case 4:
      return "May";
    case 5:
      return "June";
    case 6:
      return "July";
    case 7:
      return "August";
    case 8:
      return "September";
    case 9:
      return "October";
    case 10:
      return "November";
    case 11:
      return "December";
    default:
      throw RangeError("Month isn't between 0-11");
  }
}

export default function Calendar() {
  const [monthNumber, setMonthNumber] = useState(new Date().getMonth());
  const [monthString, setMonthString] = useState(getMonthString(monthNumber));
  const [year, setYear] = useState(new Date().getFullYear());

  //handle buttons to decrease/increase month
  const handleDecrease = () => {
    if (monthNumber - 1 < 0) {
      setYear(year - 1);
      setMonthNumber(11);
      setMonthString(getMonthString(11));
    } else {
      setMonthNumber(monthNumber - 1);
      setMonthString(getMonthString(monthNumber - 1));
    }
  };

  const handleIncrease = () => {
    if (monthNumber + 1 > 11) {
      setYear(year + 1);
      setMonthNumber(0);
      setMonthString(getMonthString(0));
    } else {
      setMonthNumber(monthNumber + 1);
      setMonthString(getMonthString(monthNumber + 1));
    }
  };

  //gets the current date and adds (if necessary) month and year
  let date = new Date();
  date.setMonth(monthNumber);
  date.setFullYear(year);
  var days = [];

<<<<<<< HEAD
    let start = new Date(date.getFullYear(), date.getMonth(), 1);
    let preMonthDay = start;
    preMonthDay.setDate(- start.getDay() + 1);
    for (let i = 0; i < 42; i++) {
        let tempDate = new Date(preMonthDay.getFullYear(), preMonthDay.getMonth(), preMonthDay.getDate() + i);
        if (i % 35 == 0 && tempDate.getFullYear() == date.getFullYear() + 1 || i % 28 == 0 && tempDate.getFullYear() == date.getFullYear() + 1){
            break;
        }
        if (i % 35 == 0 && tempDate.getMonth() == date.getMonth() + 1 || i % 28 == 0 && tempDate.getMonth() == date.getMonth() + 1) {
            break;
        }
        
        days.push({date: tempDate.getDate().toString(), mainMonth: (tempDate.getMonth() == date.getMonth())});
=======
  //gets the first day of the month
  let start = new Date(date.getFullYear(), date.getMonth(), 1);
  let preMonthDay = start;
  //gets the monday of the week from the first day of the month
  preMonthDay.setDate(-start.getDay() + 3);
  for (let i = 0; i < 42; i++) {
    let tempDate = new Date(
      preMonthDay.getFullYear(),
      preMonthDay.getMonth(),
      preMonthDay.getDate() + i
    );
    //modulo magic: we fist of all estimate the month to go over 6 weeks, because thats the largest possible
    //but we dont want the calendar to be larger than necessecary, so we check at the begin of week 4 and 5
    //if the month is already over
    if (
      (i % 35 == 0 && tempDate.getFullYear() == date.getFullYear() + 1) ||
      (i % 28 == 0 && tempDate.getFullYear() == date.getFullYear() + 1)
    ) {
      break;
>>>>>>> a6f8073e5355f3618d7bca1a7e39815aeb867a5a
    }
    if (
      (i % 35 == 0 && tempDate.getMonth() == date.getMonth() + 1) ||
      (i % 28 == 0 && tempDate.getMonth() == date.getMonth() + 1)
    ) {
      break;
    }

    days.push({
      date: tempDate.getDate().toString(),
      mainMonth: tempDate.getMonth() == date.getMonth()
    });
  }

  return (
    <div className="calendar">
      <table>
        <tr>
          <td>
            <button onClick={handleDecrease}>{"<"}</button>
          </td>
          <th>
            <h3 id="title">
              {monthString} {year}
            </h3>
          </th>
          <td>
            <button onClick={handleIncrease}>{">"}</button>
          </td>
        </tr>
      </table>
      <table id="calendarTable">
        <tr>
          <th>Mon</th>
          <th>Tue</th>
          <th>Wed</th>
          <th>Thu</th>
          <th>Fri</th>
          <th>Sat</th>
          <th>Sun</th>
        </tr>
        <tr>
          <td className={days[0].mainMonth ? "defaultItem" : "grayItem"}>
            {days[0].date}
          </td>
          <td className={days[1].mainMonth ? "defaultItem" : "grayItem"}>
            {days[1].date}
          </td>
          <td className={days[2].mainMonth ? "defaultItem" : "grayItem"}>
            {days[2].date}
          </td>
          <td className={days[3].mainMonth ? "defaultItem" : "grayItem"}>
            {days[3].date}
          </td>
          <td className={days[4].mainMonth ? "defaultItem" : "grayItem"}>
            {days[4].date}
          </td>
          <td className={days[5].mainMonth ? "defaultItem" : "grayItem"}>
            {days[5].date}
          </td>
          <td className={days[6].mainMonth ? "defaultItem" : "grayItem"}>
            {days[6].date}
          </td>
        </tr>
        <tr>
          <td className={days[7].mainMonth ? "defaultItem" : "grayItem"}>
            {days[7].date}
          </td>
          <td className={days[8].mainMonth ? "defaultItem" : "grayItem"}>
            {days[8].date}
          </td>
          <td className={days[9].mainMonth ? "defaultItem" : "grayItem"}>
            {days[9].date}
          </td>
          <td className={days[10].mainMonth ? "defaultItem" : "grayItem"}>
            {days[10].date}
          </td>
          <td className={days[11].mainMonth ? "defaultItem" : "grayItem"}>
            {days[11].date}
          </td>
          <td className={days[12].mainMonth ? "defaultItem" : "grayItem"}>
            {days[12].date}
          </td>
          <td className={days[13].mainMonth ? "defaultItem" : "grayItem"}>
            {days[13].date}
          </td>
        </tr>
        <tr>
          <td className={days[14].mainMonth ? "defaultItem" : "grayItem"}>
            {days[14].date}
          </td>
          <td className={days[15].mainMonth ? "defaultItem" : "grayItem"}>
            {days[15].date}
          </td>
          <td className={days[16].mainMonth ? "defaultItem" : "grayItem"}>
            {days[16].date}
          </td>
          <td className={days[17].mainMonth ? "defaultItem" : "grayItem"}>
            {days[17].date}
          </td>
          <td className={days[18].mainMonth ? "defaultItem" : "grayItem"}>
            {days[18].date}
          </td>
          <td className={days[19].mainMonth ? "defaultItem" : "grayItem"}>
            {days[19].date}
          </td>
          <td className={days[20].mainMonth ? "defaultItem" : "grayItem"}>
            {days[20].date}
          </td>
        </tr>
        <tr>
          <td className={days[21].mainMonth ? "defaultItem" : "grayItem"}>
            {days[21].date}
          </td>
          <td className={days[22].mainMonth ? "defaultItem" : "grayItem"}>
            {days[22].date}
          </td>
          <td className={days[23].mainMonth ? "defaultItem" : "grayItem"}>
            {days[23].date}
          </td>
          <td className={days[24].mainMonth ? "defaultItem" : "grayItem"}>
            {days[24].date}
          </td>
          <td className={days[25].mainMonth ? "defaultItem" : "grayItem"}>
            {days[25].date}
          </td>
          <td className={days[26].mainMonth ? "defaultItem" : "grayItem"}>
            {days[26].date}
          </td>
          <td className={days[27].mainMonth ? "defaultItem" : "grayItem"}>
            {days[27].date}
          </td>
        </tr>
        {days[28] != null ? (
          <tr>
            <td className={days[28].mainMonth ? "defaultItem" : "grayItem"}>
              {days[28].date}
            </td>
            <td className={days[29].mainMonth ? "defaultItem" : "grayItem"}>
              {days[29].date}
            </td>
            <td className={days[30].mainMonth ? "defaultItem" : "grayItem"}>
              {days[30].date}
            </td>
            <td className={days[31].mainMonth ? "defaultItem" : "grayItem"}>
              {days[31].date}
            </td>
            <td className={days[32].mainMonth ? "defaultItem" : "grayItem"}>
              {days[32].date}
            </td>
            <td className={days[33].mainMonth ? "defaultItem" : "grayItem"}>
              {days[33].date}
            </td>
            <td className={days[34].mainMonth ? "defaultItem" : "grayItem"}>
              {days[34].date}
            </td>
          </tr>
        ) : null}
        {days[35] != null ? (
          <tr>
            <td className={days[35].mainMonth ? "defaultItem" : "grayItem"}>
              {days[35].date}
            </td>
            <td className={days[36].mainMonth ? "defaultItem" : "grayItem"}>
              {days[36].date}
            </td>
            <td className={days[37].mainMonth ? "defaultItem" : "grayItem"}>
              {days[37].date}
            </td>
            <td className={days[38].mainMonth ? "defaultItem" : "grayItem"}>
              {days[38].date}
            </td>
            <td className={days[39].mainMonth ? "defaultItem" : "grayItem"}>
              {days[39].date}
            </td>
            <td className={days[40].mainMonth ? "defaultItem" : "grayItem"}>
              {days[40].date}
            </td>
            <td className={days[41].mainMonth ? "defaultItem" : "grayItem"}>
              {days[41].date}
            </td>
          </tr>
        ) : null}
      </table>
    </div>
  );
}
