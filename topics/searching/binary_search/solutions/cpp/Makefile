PROGRAM = bst_driver
# The program source shall have main in it.                                                                         
PROGRAM_SRC = $(PROGRAM).cpp
OBJS = $(PROGRAM_SRC:.cc=.o)
INCLUDE = bst.h

# CFLAGS combines all the libraries. These should have been previously built.                                      
CFLAGS = -I$(INCLUDE) -l$(LOG_LIB_NAME) -l$(MEM_LIB_NAME)
CPP   = g++

