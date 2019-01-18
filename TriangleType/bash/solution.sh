#!/bin/sh

function triangleType() { 
    ls -l $1; 
}

result=$(triangleType) 
echo $result