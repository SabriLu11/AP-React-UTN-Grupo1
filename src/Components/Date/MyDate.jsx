import "./MyDate.css";

function MyDate() {
  const currentDate = new Date();

  const daysOfTheWeek = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];
  const day = daysOfTheWeek[currentDate.getDay()];

  const dayNumber = currentDate.getDate();

  const monthsOfYear = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  const month = monthsOfYear[currentDate.getMonth()];

  const year = currentDate.getFullYear();

  return (
    <>
      <div className="date-container">
        <h1>{day}</h1>
        <h2>
          {dayNumber}-{month}-{year}
        </h2>
      </div>
    </>
  );
}

export default MyDate;
