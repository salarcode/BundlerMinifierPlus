"use strict";
const config = {
	...Man.get(target),
	...Man.get(this),
	...(true ? false : true),
	...(false ? true : false)
};