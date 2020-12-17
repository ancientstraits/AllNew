#include <stdio.h>
#include <string.h>

int main(void){
    char var[2];
    const char *a[2];
    a[0] = "You said no.";
    a[1] = "You said yes.";
    printf("Would you like to continue? (y or n) \n");
    fgets(var,2,stdin);
    //int value = strcmp(var, "n");
    printf("%s\n", a[strcmp(var, "n")]);
    return 0;
}

/*  if (strcmp(aa[], bb[]) == 0) {
    printf(cc[]);
  } else {
    printf(dd[]);
  }*/
