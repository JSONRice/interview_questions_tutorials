/*                                                                                                                                                                                           
   This program counts the number of bytes in a C source file.                                                                                                                               
   The program prompts the user for a file name and then concatenates                                                                                                                        
   the ".c" extension to this name. It uses the function getc to read                                                                                                                        
   the characters.                                                                                                                                                                           
   program from "Applications Programming in ANSI C"  by                                                                                                                                     
    Hohnsonbaugh & Kalin                                                                                                                                                                     
*/

#include<stdlib.h>
#include<stdio.h>
#include<string.h>

main( )
{
    FILE* fptr;
    char extension[] = ".c";

    char file_name[FILENAME_MAX];  /* defined in stdio.h*/
    int char_count;

    printf("\n\n\tFile name (NO extension):\t");
    scanf("%s",file_name);
    strcat(file_name,extension);
    fptr=fopen(file_name,"rb");

    for(char_count=0; getc(fptr) !=EOF; ++char_count);
    printf("\n\tByte size:\t%d \n", char_count);
    fclose(fptr);

    return EXIT_SUCCESS;
}


