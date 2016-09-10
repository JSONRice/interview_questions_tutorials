#include <stdio.h>
#include <stdlib.h>

int numDebugMessages = 20; // or whatever, will be more later
char *debugMessages[20];
int currentConsolePrint = 0; // next index to use

// function that will be used to print stuff out

void console_print(char *msg) {
  if (currentConsolePrint < numDebugMessages) // there is still space
  {
    debugMessages[currentConsolePrint] = malloc(sizeof (char) * 64);
    strcpy(debugMessages[currentConsolePrint], msg);
    currentConsolePrint++;
  } else // now shift
  {
    for (int i = 1; i < numDebugMessages - 1; i++) {

      free(debugMessages[i - 1]; // delete old entry
              debugMessages[i - 1] = malloc(sizeof (char) * 64);
              strcpy(debugMessages[i - 1], debugMessages[i];
              // I also tried just to do this: debugMessages[i - 1] = debugMessages[i] ... didn't work either
    }
    // Now put the message at the last index
    free(debugMessages[numDebugMessages - 1]);
            debugMessages[numDebugMessages - 1] = malloc(sizeof (char) * 64);
            strcpy(debugMessages[numDebugMessages - 1], msg);
  }
}

int main() {
  console_print("Message");
  return 0;
}
