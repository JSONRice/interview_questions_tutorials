/***************************************************************** 
 * Student: Jason Rice
 * 
 * Course: 605.414 System Development in a Unix Environment
 * 
 * File: stringconcats.c
 *
 * Description:
 *    Toy program for playing with strings and concatenation.
 * Used as research during homework2 (log file I/O).
 ****************************************************************/
#include <string.h>
#include <stdlib.h>
#include <stdio.h>
#include <fcntl.h>
#include <time.h>

int printit(const char *msg)
{
   char buffer[128];
   char prepend[256];
   // In C++ we can empty initialize a string with '{}' We don't have this
   // feature in C so we need to set the first element to '\0' for strcat to work.
   buffer[0] = '\0';
   prepend[0] = '\0';
   strcat(buffer,msg);

   struct tm *tm;
   time_t t;
   char str_time[50];
   char str_date[50];
   t = time(NULL);
   tm = localtime(&t);
   strftime(str_date, sizeof(str_date), "%b %d ", tm);
   strftime(str_time, sizeof(str_time), "%X", tm);

   char *info = ":INFO:\0";
   strcat(prepend,info);
   strcat(prepend,str_date);
   strcat(prepend,str_time);
   strcat(prepend,buffer);

   printf("buffer: %s\n",buffer);
   printf("prepend: %s\n",prepend);
   return 0;
}

int main()
{
   printit("Here is a piece of text.");
}
