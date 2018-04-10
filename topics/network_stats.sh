#!/bin/bash

TIMEFORMAT='%2R'
HOST=localhost
URL=
wget -O /dev/null -q $URL
        if [ $? -ne 0 ]
        then
                RESULT="Not Running"
        else
                RESULT=$((time wget -O /dev/null -q $URL) 2>&1)
        fi
echo "$HOST ---------- $RESULT"