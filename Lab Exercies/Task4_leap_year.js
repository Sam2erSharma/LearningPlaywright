/*✅ Leap Year Checker:

Create a program that determines whether a given year is a leap year. A leap year is divisible by 4, but not by 100 unless it is also divisible by 400. Use an if-else statement to make this determination.

year = 2026 , no
year = 2024 , yes
year = 2000 , yes
year = 1900 , no
*/

for (year = 2010; year <= 2026; year++) {
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0)
        console.log(year + " is a leap year.");
    else
        console.log(year + " is not a leap year.");
}
