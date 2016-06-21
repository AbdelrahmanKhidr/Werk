#!/usr/bin/python
import sys
import os

if __name__ == '__main__':
	print("/// <reference path=\"../node_modules/typescript/lib/lib.es6.d.ts\" />")
	for root , _ , files in os.walk('.'):
		for f in files:
			if(not(f.startswith("_")) and not(f.endswith(".py"))):
				print("/// <reference path=\"../typings/"+f+"\" />")