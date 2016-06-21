#!/usr/bin/python
import sys
import os

if __name__ == '__main__':
	print("/// <reference path=\"../node_modules/typescript/lib/lib.es6.d.ts\" />")
	for f in os.listdir('./typings'):
		if(not(f.startswith("_")) and (f.endswith(".d.ts"))):
			print("/// <reference path=\"../typings/"+f+"\" />")