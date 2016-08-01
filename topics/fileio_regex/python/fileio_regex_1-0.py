#!/usr/bin/python
import os
import random
import re
 
# Constants and global members:
TARGETFILE = "../input/atoms"
EXT = ".dat"
TMP = ".tmp"
LIMIT = 10
col_ten = []
col_eleven = []

###
# Generate a bunch of test data values and insert into an array 
# (list). 
###
for i in xrange(LIMIT):
    col_ten.insert(i, str(random.randint(-10, 0)))
    col_eleven.insert(i, str(random.randint(0, 10)))

###
# Main data file:
###
fstream    = open(TARGETFILE+EXT, "r")

###
# Temp in-memory file for caching injected values:
###
fstreamtmp = open(TARGETFILE+EXT+TMP, "w")

###
# Parse values in atoms file into a space delimeted format 
# then split on each space. Next inject each number from our lists 
# into the last two columns.
###
i = 0
for line in fstream:
    line        = re.sub(r' +', r' ', line.rstrip())    
    columns     = line.rstrip().split(' ');
    # Inject values here:
    columns[9]  = col_ten[i]
    columns[10] = col_eleven[i]
    i += 1
    # Build our string:
    tuple = ""
    for word in columns:
        tuple += word + " "

    # Uncomment line below to print each tuple (row) to STDOUT for testing.
    # print tuple.rstrip()

    # Dump each tuple (row) into the tmp file.
    # The rstrip removes the extra white space from the end.
    fstreamtmp.write(str(tuple.rstrip()) + "\n")

# Superimpose (write over) contents of original atoms file with temp file:
os.rename(TARGETFILE+EXT+TMP, TARGETFILE+EXT)

# Close the streams:
fstream.close()
fstreamtmp.close()

