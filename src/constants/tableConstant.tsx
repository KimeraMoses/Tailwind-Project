export const appointmentTableColumns = [
  {
    name: "Patient's Name",
    accessor: "pname",
  },
  {
    name: "Appt Date",
    accessor: "date",
  },
  {
    name: "Service Type",
    accessor: "ctype",
  },
  {
    name: "Amount Paid",
    accessor: "amount",
  },
  {
    name: "Status",
    accessor: "status",
  },
  {
    name: "Actions",
    accessor: "actions",
  },
];

export const reportTableColumns = [
  {
    name: "MedAtlas ID",
    accessor: "id",
  },
  {
    name: "Patient",
    accessor: "patient",
  },
  {
    name: "Attachment",
    accessor: "attachment",
  },
  {
    name: "Date Created",
    accessor: "date",
  },
  {
    name: "Actions",
    accessor: "actions",
  },
];

export const billingTableColumns = [
  {
    name: "Invoice No.",
    accessor: "id",
  },
  {
    name: "Patient",
    accessor: "patient",
  },
  {
    name: "Amount",
    accessor: "amount",
  },
  {
    name: "Date of Payment",
    accessor: "date",
  },
  {
    name: "Actions",
    accessor: "actions",
  },
];

export const appointData = [
  {
    name: "Mr. Sali James",
    occupation: "Engineer",
    date: "25 May 2022",
    time: "10:00am",
    ctype: "Consultation",
    amount: 50,
    status: "Confirmed",
  },
  {
    name: "Mr. Sali James",
    occupation: "Engineer",
    date: "25 May 2022",
    time: "10:00am",
    ctype: "Consultation",
    amount: 50,
    status: "Pending",
  },
  {
    name: "Mr. Sali James",
    occupation: "Engineer",
    date: "25 May 2022",
    time: "10:00am",
    ctype: "Consultation",
    amount: 50,
    status: "Successful",
  },
  {
    name: "Mr. Sali James",
    occupation: "Engineer",
    date: "25 May 2022",
    time: "10:00am",
    ctype: "Surgery",
    amount: 50,
    status: "Canceled",
  },
];

export const reportData = [
  {
    id: "MdAt/22/0001",
    name: "Mr. Sali James",
    occupation: "Engineer",
    attachment: "Metal Health Report.pdf",
    date: "25 May 2022",
  },
  {
    id: "MdAt/22/0002",
    name: "Mrs. Mutumba",
    occupation: "Economist",
    attachment: "Metal Health Report.pdf",
    date: "25 May 2022",
  },
  {
    id: "MdAt/22/0002",
    name: "Mrs. Mutumba",
    occupation: "Economist",
    attachment: "Metal Health Report.pdf",
    date: "25 May 2022",
  },
  {
    id: "MdAt/22/0002",
    name: "Mrs. Mutumba",
    occupation: "Economist",
    attachment: "Metal Health Report.pdf",
    date: "25 May 2022",
  },
  {
    id: "MdAt/22/0005",
    name: "Mrs. Mutumba",
    occupation: "Economist",
    attachment: "Metal Health Report.pdf",
    date: "25 May 2022",
  },
];

export const billingData = [
  {
    id: "MdAt/22/0001",
    name: "Mr. Sali James",
    occupation: "Engineer",
    amount: 50,
    date: "25 May 2022",
  },
  {
    id: "MdAt/22/0001",
    name: "Mr. Sali James",
    occupation: "Engineer",
    amount: 50,
    date: "25 May 2022",
  },
  {
    id: "MdAt/22/0001",
    name: "Mr. Sali James",
    occupation: "Engineer",
    amount: 50,
    date: "25 May 2022",
  },
  {
    id: "MdAt/22/0001",
    name: "Mr. Sali James",
    occupation: "Engineer",
    amount: 50,
    date: "25 May 2022",
  },
];
