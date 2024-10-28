const showCalendar = (month) => {
	let startDate = new Date(2024, month - 1, 1);
	let endDate = new Date(2024, month, 0);

	process.stdout.write(`    ${month}月 2024年    \n`);
	process.stdout.write('日 月 火 水 木 金 土\n');

	let weekdayIndex = startDate.getDay();
	const spaces = '   '.repeat(weekdayIndex);
	process.stdout.write(`${spaces}`);

	for (let day = startDate.getDate(); day <= endDate.getDate(); day++) {
		let tempDate = new Date(2024, month - 1, day);
		process.stdout.write(day.toString().padStart(2, ' ') + ' ');

		if (tempDate.getDay() === 6) {
			process.stdout.write('\n');
		}
	}
	process.stdout.write('\n');
};

let selectedMonth = new Date().getMonth() + 1;

const args = process.argv.slice(2);
const monthArgIndex = args.indexOf('-m');

if (monthArgIndex !== -1 && args[monthArgIndex + 1]) {
	selectedMonth = parseInt(args[monthArgIndex + 1], 10);
}

if (selectedMonth < 1 || selectedMonth > 12) {
	console.log(`${selectedMonth} is neither a month number (1..12) nor a name`);
} else {
	showCalendar(selectedMonth);
}
