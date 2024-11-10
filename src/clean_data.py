import functools
import json
import os
import random
import re
import collections
import logging
from functools import wraps

# logging.basicConfig(filename="cleandata.log", level="DEBUG")
#
#
# def logger(func):
# 	"""
# 	A decorator function to log information about function calls and their results.
# 	"""
#
# 	@wraps(func)
# 	def wrapper(*args, **kwargs):
# 		"""
# 		The wrapper function that logs function calls and their results.
# 		"""
# 		logging.info(f"Running {func.__name__} with args: {args}, kwargs: {kwargs}")
# 		try:
# 			result = func(*args, **kwargs)
# 			logging.info(f"Finished {func.__name__} with result: {result}")
#
# 		except Exception as e:
# 			logging.error(f"Error occurred in {func.__name__}: {e}")
# 			raise
#
# 		else:
# 			return result
#
# 	return wrapper


def replace_shorts(string):
	if type(string) != str:
		return string

	replacement = {
		'ă': 'a',
		'ĕ': 'e',
		'ĭ': 'i',
		'ŏ': 'o',
		'ŭ': 'u'
	}
	for char in string:
		if char in replacement.keys():
			new_string = string.replace(char, replacement[char])
			return new_string
		else:
			return string


def set_principal_parts(datalist):
	result = []
	for entry in datalist:
		try:
			if entry["part_of_speech"] == "verb":
				notes = entry["main_notes"]
				parts = "".join(re.split("\(|\)", notes)[::2])
				parts = parts.split(",")
				parts = [x.strip() for x in parts]
				parts = [x for x in parts if not x.isdigit()]
				parts = parts[0:4]
				clean = []
				for part in parts:
					if len(part) > 15:
						continue
					if "." in part:
						continue
					if part == "and":
						continue
					if part == "":
						continue
					if part[-2:] == "re": # if is infinitive
						clean.append(part)
						break
					clean.append(part)
				new_entry = entry
				new_entry["principal_parts"] = clean
				result.append(new_entry)
			else:
				result.append(entry)
		except IndexError:
			continue
	return result


def set_conjugations(datalist):
	'''
	Takes in a list of objects
	if an object is a verb, adds the conjugation property
	returns a list of the updated objects
	:param datalist:
	:return:
	'''
	result = []
	for entry in datalist:
		if entry["part_of_speech"] == "verb":
			for char in entry["main_notes"]:
				if char in "1234":
					new = entry
					new["conjugation"] = char
					result.append(new)
					break
		else:
			result.append(entry)
	return result


if __name__ == "__main__":
	data = []
	alphabet = list('abcdefghijklmnopqrstuvxyz')
	for filename in os.listdir("original_data"):
		with open("./original_data/" + filename, "r", encoding="utf-8") as file:
			data.append(json.load(file))
	dictionary = dict(zip(alphabet, data))

	# # replace all short marks
	letter_list: list
	for letter_list in dictionary.values():             # e.g. a
		for ind in range(len(letter_list)):
			entry: dict = letter_list[ind]
			new_entry = {}
			for key, value in entry.items():            # e.g. ambulo
				if not isinstance(value, list):         # property contains a simple string
					new_entry[replace_shorts(key)] = replace_shorts(value)
				else:
					new_entry[replace_shorts(key)] = [replace_shorts(i) for i in value]
			letter_list[ind] = new_entry

	# add conjugation property to all verbs
	newDict = {}
	for key, val in dictionary.items():
		conj_list = set_conjugations(val)
		parts_list = set_principal_parts(conj_list)
		newDict[key] = parts_list
	dictionary = newDict
	print(dictionary['a'][3])

	# Create json objects and write to file
	for key, value in dictionary.items():
		with open("data2/"+key+".json", "w") as outfile:
			obj = json.dumps(value, indent=4)
			outfile.write(obj)

