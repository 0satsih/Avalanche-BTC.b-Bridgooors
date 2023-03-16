import type { PageLoad } from './$types';

export const load: PageLoad = (async () => {
	return {
		NEW_USERS: [
			{ DATE: '2021-01-14', 'New Users': 1, 'Cumulative New Users': 1 },
			{ DATE: '2021-01-18', 'New Users': 1, 'Cumulative New Users': 2 },
			{ DATE: '2021-01-24', 'New Users': 1, 'Cumulative New Users': 3 },
			{ DATE: '2021-02-02', 'New Users': 1, 'Cumulative New Users': 4 },
			{ DATE: '2021-02-03', 'New Users': 5, 'Cumulative New Users': 9 },
			{ DATE: '2021-02-04', 'New Users': 1, 'Cumulative New Users': 10 },
			{ DATE: '2021-02-05', 'New Users': 2, 'Cumulative New Users': 12 },
			{ DATE: '2021-02-06', 'New Users': 1, 'Cumulative New Users': 13 },
			{ DATE: '2021-02-08', 'New Users': 1, 'Cumulative New Users': 14 },
			{ DATE: '2021-02-09', 'New Users': 16, 'Cumulative New Users': 30 },
			{ DATE: '2021-02-10', 'New Users': 21, 'Cumulative New Users': 51 },
			{ DATE: '2021-02-12', 'New Users': 8, 'Cumulative New Users': 59 },
			{ DATE: '2021-02-13', 'New Users': 6, 'Cumulative New Users': 65 },
			{ DATE: '2021-02-14', 'New Users': 5, 'Cumulative New Users': 70 },
			{ DATE: '2021-02-15', 'New Users': 17, 'Cumulative New Users': 87 },
			{ DATE: '2021-02-16', 'New Users': 11, 'Cumulative New Users': 98 },
			{ DATE: '2021-02-17', 'New Users': 20, 'Cumulative New Users': 118 },
			{ DATE: '2021-02-18', 'New Users': 13, 'Cumulative New Users': 131 },
			{ DATE: '2021-02-19', 'New Users': 7, 'Cumulative New Users': 138 },
			{ DATE: '2021-02-20', 'New Users': 5, 'Cumulative New Users': 143 },
			{ DATE: '2021-02-21', 'New Users': 7, 'Cumulative New Users': 150 },
			{ DATE: '2021-02-22', 'New Users': 6, 'Cumulative New Users': 156 },
			{ DATE: '2021-02-23', 'New Users': 2, 'Cumulative New Users': 158 },
			{ DATE: '2021-02-24', 'New Users': 5, 'Cumulative New Users': 163 },
			{ DATE: '2021-02-25', 'New Users': 15, 'Cumulative New Users': 178 },
			{ DATE: '2021-02-26', 'New Users': 6, 'Cumulative New Users': 184 },
			{ DATE: '2021-02-27', 'New Users': 14, 'Cumulative New Users': 198 },
			{ DATE: '2021-02-28', 'New Users': 4, 'Cumulative New Users': 202 },
			{ DATE: '2021-03-01', 'New Users': 3, 'Cumulative New Users': 205 },
			{ DATE: '2021-03-02', 'New Users': 2, 'Cumulative New Users': 207 },
			{ DATE: '2021-03-03', 'New Users': 5, 'Cumulative New Users': 212 },
			{ DATE: '2021-03-04', 'New Users': 3, 'Cumulative New Users': 215 },
			{ DATE: '2021-03-05', 'New Users': 3, 'Cumulative New Users': 218 },
			{ DATE: '2021-03-06', 'New Users': 2, 'Cumulative New Users': 220 },
			{ DATE: '2021-03-07', 'New Users': 2, 'Cumulative New Users': 222 },
			{ DATE: '2021-03-08', 'New Users': 1, 'Cumulative New Users': 223 },
			{ DATE: '2021-03-09', 'New Users': 4, 'Cumulative New Users': 227 },
			{ DATE: '2021-03-10', 'New Users': 4, 'Cumulative New Users': 231 },
			{ DATE: '2021-03-11', 'New Users': 4, 'Cumulative New Users': 235 },
			{ DATE: '2021-03-12', 'New Users': 3, 'Cumulative New Users': 238 },
			{ DATE: '2021-03-13', 'New Users': 3, 'Cumulative New Users': 241 },
			{ DATE: '2021-03-14', 'New Users': 4, 'Cumulative New Users': 245 },
			{ DATE: '2021-03-15', 'New Users': 1, 'Cumulative New Users': 246 },
			{ DATE: '2021-03-16', 'New Users': 1, 'Cumulative New Users': 247 },
			{ DATE: '2021-03-18', 'New Users': 3, 'Cumulative New Users': 250 },
			{ DATE: '2021-03-20', 'New Users': 2, 'Cumulative New Users': 252 },
			{ DATE: '2021-03-22', 'New Users': 9, 'Cumulative New Users': 261 },
			{ DATE: '2021-03-23', 'New Users': 4, 'Cumulative New Users': 265 },
			{ DATE: '2021-03-24', 'New Users': 3, 'Cumulative New Users': 268 },
			{ DATE: '2021-03-25', 'New Users': 3, 'Cumulative New Users': 271 },
			{ DATE: '2021-03-27', 'New Users': 4, 'Cumulative New Users': 275 },
			{ DATE: '2021-03-28', 'New Users': 2, 'Cumulative New Users': 277 },
			{ DATE: '2021-03-29', 'New Users': 1, 'Cumulative New Users': 278 },
			{ DATE: '2021-03-30', 'New Users': 1, 'Cumulative New Users': 279 },
			{ DATE: '2021-03-31', 'New Users': 2, 'Cumulative New Users': 281 },
			{ DATE: '2021-04-01', 'New Users': 1, 'Cumulative New Users': 282 },
			{ DATE: '2021-04-03', 'New Users': 4, 'Cumulative New Users': 286 },
			{ DATE: '2021-04-04', 'New Users': 1, 'Cumulative New Users': 287 },
			{ DATE: '2021-04-05', 'New Users': 1, 'Cumulative New Users': 288 },
			{ DATE: '2021-04-08', 'New Users': 2, 'Cumulative New Users': 290 },
			{ DATE: '2021-04-09', 'New Users': 2, 'Cumulative New Users': 292 },
			{ DATE: '2021-04-10', 'New Users': 1, 'Cumulative New Users': 293 },
			{ DATE: '2021-04-11', 'New Users': 1, 'Cumulative New Users': 294 },
			{ DATE: '2021-04-12', 'New Users': 1, 'Cumulative New Users': 295 },
			{ DATE: '2021-04-14', 'New Users': 1, 'Cumulative New Users': 296 },
			{ DATE: '2021-04-15', 'New Users': 3, 'Cumulative New Users': 299 },
			{ DATE: '2021-04-17', 'New Users': 1, 'Cumulative New Users': 300 },
			{ DATE: '2021-04-21', 'New Users': 4, 'Cumulative New Users': 304 },
			{ DATE: '2021-04-22', 'New Users': 2, 'Cumulative New Users': 306 },
			{ DATE: '2021-04-23', 'New Users': 2, 'Cumulative New Users': 308 },
			{ DATE: '2021-04-24', 'New Users': 1, 'Cumulative New Users': 309 },
			{ DATE: '2021-04-25', 'New Users': 4, 'Cumulative New Users': 313 },
			{ DATE: '2021-04-26', 'New Users': 1, 'Cumulative New Users': 314 },
			{ DATE: '2021-04-27', 'New Users': 3, 'Cumulative New Users': 317 },
			{ DATE: '2021-04-28', 'New Users': 2, 'Cumulative New Users': 319 },
			{ DATE: '2021-04-29', 'New Users': 3, 'Cumulative New Users': 322 },
			{ DATE: '2021-04-30', 'New Users': 12, 'Cumulative New Users': 334 },
			{ DATE: '2021-05-01', 'New Users': 17, 'Cumulative New Users': 351 },
			{ DATE: '2021-05-02', 'New Users': 8, 'Cumulative New Users': 359 },
			{ DATE: '2021-05-03', 'New Users': 6, 'Cumulative New Users': 365 },
			{ DATE: '2021-05-04', 'New Users': 3, 'Cumulative New Users': 368 },
			{ DATE: '2021-05-05', 'New Users': 2, 'Cumulative New Users': 370 },
			{ DATE: '2021-05-06', 'New Users': 5, 'Cumulative New Users': 375 },
			{ DATE: '2021-05-07', 'New Users': 9, 'Cumulative New Users': 384 },
			{ DATE: '2021-05-08', 'New Users': 3, 'Cumulative New Users': 387 },
			{ DATE: '2021-05-09', 'New Users': 4, 'Cumulative New Users': 391 },
			{ DATE: '2021-05-10', 'New Users': 2, 'Cumulative New Users': 393 },
			{ DATE: '2021-05-11', 'New Users': 4, 'Cumulative New Users': 397 },
			{ DATE: '2021-05-12', 'New Users': 3, 'Cumulative New Users': 400 },
			{ DATE: '2021-05-13', 'New Users': 8, 'Cumulative New Users': 408 },
			{ DATE: '2021-05-14', 'New Users': 24, 'Cumulative New Users': 432 },
			{ DATE: '2021-05-15', 'New Users': 7, 'Cumulative New Users': 439 },
			{ DATE: '2021-05-16', 'New Users': 5, 'Cumulative New Users': 444 },
			{ DATE: '2021-05-17', 'New Users': 3, 'Cumulative New Users': 447 },
			{ DATE: '2021-05-18', 'New Users': 5, 'Cumulative New Users': 452 },
			{ DATE: '2021-05-19', 'New Users': 5, 'Cumulative New Users': 457 },
			{ DATE: '2021-05-20', 'New Users': 1, 'Cumulative New Users': 458 },
			{ DATE: '2021-05-21', 'New Users': 7, 'Cumulative New Users': 465 },
			{ DATE: '2021-05-22', 'New Users': 2, 'Cumulative New Users': 467 },
			{ DATE: '2021-05-23', 'New Users': 1, 'Cumulative New Users': 468 },
			{ DATE: '2021-05-25', 'New Users': 3, 'Cumulative New Users': 471 },
			{ DATE: '2021-05-26', 'New Users': 1, 'Cumulative New Users': 472 },
			{ DATE: '2021-05-27', 'New Users': 1, 'Cumulative New Users': 473 },
			{ DATE: '2021-05-28', 'New Users': 1, 'Cumulative New Users': 474 },
			{ DATE: '2021-05-29', 'New Users': 1, 'Cumulative New Users': 475 },
			{ DATE: '2021-05-30', 'New Users': 4, 'Cumulative New Users': 479 },
			{ DATE: '2021-05-31', 'New Users': 3, 'Cumulative New Users': 482 },
			{ DATE: '2021-06-01', 'New Users': 8, 'Cumulative New Users': 490 },
			{ DATE: '2021-06-02', 'New Users': 1, 'Cumulative New Users': 491 },
			{ DATE: '2021-06-03', 'New Users': 2, 'Cumulative New Users': 493 },
			{ DATE: '2021-06-05', 'New Users': 2, 'Cumulative New Users': 495 },
			{ DATE: '2021-06-07', 'New Users': 2, 'Cumulative New Users': 497 },
			{ DATE: '2021-06-09', 'New Users': 2, 'Cumulative New Users': 499 },
			{ DATE: '2021-06-10', 'New Users': 1, 'Cumulative New Users': 500 },
			{ DATE: '2021-06-13', 'New Users': 2, 'Cumulative New Users': 502 },
			{ DATE: '2021-06-14', 'New Users': 4, 'Cumulative New Users': 506 },
			{ DATE: '2021-06-16', 'New Users': 1, 'Cumulative New Users': 507 },
			{ DATE: '2021-06-17', 'New Users': 2, 'Cumulative New Users': 509 },
			{ DATE: '2021-06-18', 'New Users': 2, 'Cumulative New Users': 511 },
			{ DATE: '2021-06-19', 'New Users': 3, 'Cumulative New Users': 514 },
			{ DATE: '2021-06-20', 'New Users': 1, 'Cumulative New Users': 515 },
			{ DATE: '2021-06-23', 'New Users': 1, 'Cumulative New Users': 516 },
			{ DATE: '2021-06-24', 'New Users': 1, 'Cumulative New Users': 517 },
			{ DATE: '2021-06-25', 'New Users': 1, 'Cumulative New Users': 518 },
			{ DATE: '2021-06-26', 'New Users': 4, 'Cumulative New Users': 522 },
			{ DATE: '2021-06-29', 'New Users': 1, 'Cumulative New Users': 523 },
			{ DATE: '2021-06-30', 'New Users': 1, 'Cumulative New Users': 524 },
			{ DATE: '2021-07-01', 'New Users': 1, 'Cumulative New Users': 525 },
			{ DATE: '2021-07-03', 'New Users': 2, 'Cumulative New Users': 527 },
			{ DATE: '2021-07-04', 'New Users': 1, 'Cumulative New Users': 528 },
			{ DATE: '2021-07-05', 'New Users': 2, 'Cumulative New Users': 530 },
			{ DATE: '2021-07-06', 'New Users': 2, 'Cumulative New Users': 532 },
			{ DATE: '2021-07-07', 'New Users': 1, 'Cumulative New Users': 533 },
			{ DATE: '2021-07-08', 'New Users': 1, 'Cumulative New Users': 534 },
			{ DATE: '2021-07-09', 'New Users': 1, 'Cumulative New Users': 535 },
			{ DATE: '2021-07-13', 'New Users': 1, 'Cumulative New Users': 536 },
			{ DATE: '2021-07-15', 'New Users': 2, 'Cumulative New Users': 538 },
			{ DATE: '2021-07-16', 'New Users': 1, 'Cumulative New Users': 539 },
			{ DATE: '2021-07-18', 'New Users': 2, 'Cumulative New Users': 541 },
			{ DATE: '2021-07-20', 'New Users': 1, 'Cumulative New Users': 542 },
			{ DATE: '2021-07-22', 'New Users': 1, 'Cumulative New Users': 543 },
			{ DATE: '2021-07-24', 'New Users': 3, 'Cumulative New Users': 546 },
			{ DATE: '2021-07-25', 'New Users': 1, 'Cumulative New Users': 547 },
			{ DATE: '2021-07-26', 'New Users': 1, 'Cumulative New Users': 548 },
			{ DATE: '2021-07-27', 'New Users': 1, 'Cumulative New Users': 549 },
			{ DATE: '2021-07-28', 'New Users': 1, 'Cumulative New Users': 550 },
			{ DATE: '2021-07-29', 'New Users': 2, 'Cumulative New Users': 552 },
			{ DATE: '2021-07-30', 'New Users': 2, 'Cumulative New Users': 554 },
			{ DATE: '2021-07-31', 'New Users': 1, 'Cumulative New Users': 555 },
			{ DATE: '2021-08-01', 'New Users': 1, 'Cumulative New Users': 556 },
			{ DATE: '2021-08-03', 'New Users': 1, 'Cumulative New Users': 557 },
			{ DATE: '2021-08-04', 'New Users': 2, 'Cumulative New Users': 559 },
			{ DATE: '2021-08-05', 'New Users': 1, 'Cumulative New Users': 560 },
			{ DATE: '2021-08-06', 'New Users': 1, 'Cumulative New Users': 561 },
			{ DATE: '2021-08-07', 'New Users': 1, 'Cumulative New Users': 562 },
			{ DATE: '2021-08-08', 'New Users': 1, 'Cumulative New Users': 563 },
			{ DATE: '2021-08-09', 'New Users': 1, 'Cumulative New Users': 564 },
			{ DATE: '2021-08-10', 'New Users': 1, 'Cumulative New Users': 565 },
			{ DATE: '2021-08-11', 'New Users': 2, 'Cumulative New Users': 567 },
			{ DATE: '2021-08-12', 'New Users': 1, 'Cumulative New Users': 568 },
			{ DATE: '2021-08-14', 'New Users': 1, 'Cumulative New Users': 569 },
			{ DATE: '2021-08-16', 'New Users': 1, 'Cumulative New Users': 570 },
			{ DATE: '2021-08-17', 'New Users': 5, 'Cumulative New Users': 575 },
			{ DATE: '2021-08-18', 'New Users': 11, 'Cumulative New Users': 586 },
			{ DATE: '2021-08-19', 'New Users': 78, 'Cumulative New Users': 664 },
			{ DATE: '2021-08-20', 'New Users': 38, 'Cumulative New Users': 702 },
			{ DATE: '2021-08-21', 'New Users': 57, 'Cumulative New Users': 759 },
			{ DATE: '2021-08-22', 'New Users': 21, 'Cumulative New Users': 780 },
			{ DATE: '2021-08-23', 'New Users': 30, 'Cumulative New Users': 810 },
			{ DATE: '2021-08-24', 'New Users': 23, 'Cumulative New Users': 833 },
			{ DATE: '2021-08-25', 'New Users': 30, 'Cumulative New Users': 863 },
			{ DATE: '2021-08-26', 'New Users': 16, 'Cumulative New Users': 879 },
			{ DATE: '2021-08-27', 'New Users': 21, 'Cumulative New Users': 900 },
			{ DATE: '2021-08-28', 'New Users': 33, 'Cumulative New Users': 933 },
			{ DATE: '2021-08-29', 'New Users': 23, 'Cumulative New Users': 956 },
			{ DATE: '2021-08-30', 'New Users': 13, 'Cumulative New Users': 969 },
			{ DATE: '2021-08-31', 'New Users': 21, 'Cumulative New Users': 990 },
			{ DATE: '2021-09-01', 'New Users': 9, 'Cumulative New Users': 999 },
			{ DATE: '2021-09-02', 'New Users': 18, 'Cumulative New Users': 1017 },
			{ DATE: '2021-09-03', 'New Users': 16, 'Cumulative New Users': 1033 },
			{ DATE: '2021-09-04', 'New Users': 11, 'Cumulative New Users': 1044 },
			{ DATE: '2021-09-05', 'New Users': 8, 'Cumulative New Users': 1052 },
			{ DATE: '2021-09-06', 'New Users': 6, 'Cumulative New Users': 1058 },
			{ DATE: '2021-09-07', 'New Users': 8, 'Cumulative New Users': 1066 },
			{ DATE: '2021-09-08', 'New Users': 7, 'Cumulative New Users': 1073 },
			{ DATE: '2021-09-09', 'New Users': 6, 'Cumulative New Users': 1079 },
			{ DATE: '2021-09-10', 'New Users': 5, 'Cumulative New Users': 1084 },
			{ DATE: '2021-09-11', 'New Users': 14, 'Cumulative New Users': 1098 },
			{ DATE: '2021-09-12', 'New Users': 29, 'Cumulative New Users': 1127 },
			{ DATE: '2021-09-13', 'New Users': 23, 'Cumulative New Users': 1150 },
			{ DATE: '2021-09-14', 'New Users': 11, 'Cumulative New Users': 1161 },
			{ DATE: '2021-09-15', 'New Users': 13, 'Cumulative New Users': 1174 },
			{ DATE: '2021-09-16', 'New Users': 38, 'Cumulative New Users': 1212 },
			{ DATE: '2021-09-17', 'New Users': 44, 'Cumulative New Users': 1256 },
			{ DATE: '2021-09-18', 'New Users': 29, 'Cumulative New Users': 1285 },
			{ DATE: '2021-09-19', 'New Users': 40, 'Cumulative New Users': 1325 },
			{ DATE: '2021-09-20', 'New Users': 11, 'Cumulative New Users': 1336 },
			{ DATE: '2021-09-21', 'New Users': 17, 'Cumulative New Users': 1353 },
			{ DATE: '2021-09-22', 'New Users': 18, 'Cumulative New Users': 1371 },
			{ DATE: '2021-09-23', 'New Users': 17, 'Cumulative New Users': 1388 },
			{ DATE: '2021-09-24', 'New Users': 16, 'Cumulative New Users': 1404 },
			{ DATE: '2021-09-25', 'New Users': 13, 'Cumulative New Users': 1417 },
			{ DATE: '2021-09-26', 'New Users': 9, 'Cumulative New Users': 1426 },
			{ DATE: '2021-09-27', 'New Users': 12, 'Cumulative New Users': 1438 },
			{ DATE: '2021-09-28', 'New Users': 9, 'Cumulative New Users': 1447 },
			{ DATE: '2021-09-29', 'New Users': 11, 'Cumulative New Users': 1458 },
			{ DATE: '2021-09-30', 'New Users': 21, 'Cumulative New Users': 1479 },
			{ DATE: '2021-10-01', 'New Users': 9, 'Cumulative New Users': 1488 },
			{ DATE: '2021-10-02', 'New Users': 13, 'Cumulative New Users': 1501 },
			{ DATE: '2021-10-03', 'New Users': 18, 'Cumulative New Users': 1519 },
			{ DATE: '2021-10-04', 'New Users': 24, 'Cumulative New Users': 1543 },
			{ DATE: '2021-10-05', 'New Users': 23, 'Cumulative New Users': 1566 },
			{ DATE: '2021-10-06', 'New Users': 21, 'Cumulative New Users': 1587 },
			{ DATE: '2021-10-07', 'New Users': 13, 'Cumulative New Users': 1600 },
			{ DATE: '2021-10-08', 'New Users': 35, 'Cumulative New Users': 1635 },
			{ DATE: '2021-10-09', 'New Users': 17, 'Cumulative New Users': 1652 },
			{ DATE: '2021-10-10', 'New Users': 16, 'Cumulative New Users': 1668 },
			{ DATE: '2021-10-11', 'New Users': 11, 'Cumulative New Users': 1679 },
			{ DATE: '2021-10-12', 'New Users': 16, 'Cumulative New Users': 1695 },
			{ DATE: '2021-10-13', 'New Users': 16, 'Cumulative New Users': 1711 },
			{ DATE: '2021-10-14', 'New Users': 13, 'Cumulative New Users': 1724 },
			{ DATE: '2021-10-15', 'New Users': 11, 'Cumulative New Users': 1735 },
			{ DATE: '2021-10-16', 'New Users': 10, 'Cumulative New Users': 1745 },
			{ DATE: '2021-10-17', 'New Users': 11, 'Cumulative New Users': 1756 },
			{ DATE: '2021-10-18', 'New Users': 11, 'Cumulative New Users': 1767 },
			{ DATE: '2021-10-19', 'New Users': 15, 'Cumulative New Users': 1782 },
			{ DATE: '2021-10-20', 'New Users': 12, 'Cumulative New Users': 1794 },
			{ DATE: '2021-10-21', 'New Users': 16, 'Cumulative New Users': 1810 },
			{ DATE: '2021-10-22', 'New Users': 21, 'Cumulative New Users': 1831 },
			{ DATE: '2021-10-23', 'New Users': 17, 'Cumulative New Users': 1848 },
			{ DATE: '2021-10-24', 'New Users': 18, 'Cumulative New Users': 1866 },
			{ DATE: '2021-10-25', 'New Users': 11, 'Cumulative New Users': 1877 },
			{ DATE: '2021-10-26', 'New Users': 24, 'Cumulative New Users': 1901 },
			{ DATE: '2021-10-27', 'New Users': 13, 'Cumulative New Users': 1914 },
			{ DATE: '2021-10-28', 'New Users': 18, 'Cumulative New Users': 1932 },
			{ DATE: '2021-10-29', 'New Users': 13, 'Cumulative New Users': 1945 },
			{ DATE: '2021-10-30', 'New Users': 19, 'Cumulative New Users': 1964 },
			{ DATE: '2021-10-31', 'New Users': 15, 'Cumulative New Users': 1979 },
			{ DATE: '2021-11-01', 'New Users': 16, 'Cumulative New Users': 1995 },
			{ DATE: '2021-11-02', 'New Users': 22, 'Cumulative New Users': 2017 },
			{ DATE: '2021-11-03', 'New Users': 12, 'Cumulative New Users': 2029 },
			{ DATE: '2021-11-04', 'New Users': 17, 'Cumulative New Users': 2046 },
			{ DATE: '2021-11-05', 'New Users': 20, 'Cumulative New Users': 2066 },
			{ DATE: '2021-11-06', 'New Users': 17, 'Cumulative New Users': 2083 },
			{ DATE: '2021-11-07', 'New Users': 13, 'Cumulative New Users': 2096 },
			{ DATE: '2021-11-08', 'New Users': 26, 'Cumulative New Users': 2122 },
			{ DATE: '2021-11-09', 'New Users': 28, 'Cumulative New Users': 2150 },
			{ DATE: '2021-11-10', 'New Users': 17, 'Cumulative New Users': 2167 },
			{ DATE: '2021-11-11', 'New Users': 23, 'Cumulative New Users': 2190 },
			{ DATE: '2021-11-12', 'New Users': 22, 'Cumulative New Users': 2212 },
			{ DATE: '2021-11-13', 'New Users': 23, 'Cumulative New Users': 2235 },
			{ DATE: '2021-11-14', 'New Users': 27, 'Cumulative New Users': 2262 },
			{ DATE: '2021-11-15', 'New Users': 34, 'Cumulative New Users': 2296 },
			{ DATE: '2021-11-16', 'New Users': 25, 'Cumulative New Users': 2321 },
			{ DATE: '2021-11-17', 'New Users': 30, 'Cumulative New Users': 2351 },
			{ DATE: '2021-11-18', 'New Users': 35, 'Cumulative New Users': 2386 },
			{ DATE: '2021-11-19', 'New Users': 29, 'Cumulative New Users': 2415 },
			{ DATE: '2021-11-20', 'New Users': 20, 'Cumulative New Users': 2435 },
			{ DATE: '2021-11-21', 'New Users': 32, 'Cumulative New Users': 2467 },
			{ DATE: '2021-11-22', 'New Users': 28, 'Cumulative New Users': 2495 },
			{ DATE: '2021-11-23', 'New Users': 24, 'Cumulative New Users': 2519 },
			{ DATE: '2021-11-24', 'New Users': 23, 'Cumulative New Users': 2542 },
			{ DATE: '2021-11-25', 'New Users': 22, 'Cumulative New Users': 2564 },
			{ DATE: '2021-11-26', 'New Users': 22, 'Cumulative New Users': 2586 },
			{ DATE: '2021-11-27', 'New Users': 22, 'Cumulative New Users': 2608 },
			{ DATE: '2021-11-28', 'New Users': 21, 'Cumulative New Users': 2629 },
			{ DATE: '2021-11-29', 'New Users': 19, 'Cumulative New Users': 2648 },
			{ DATE: '2021-11-30', 'New Users': 22, 'Cumulative New Users': 2670 },
			{ DATE: '2021-12-01', 'New Users': 29, 'Cumulative New Users': 2699 },
			{ DATE: '2021-12-02', 'New Users': 16, 'Cumulative New Users': 2715 },
			{ DATE: '2021-12-03', 'New Users': 27, 'Cumulative New Users': 2742 },
			{ DATE: '2021-12-04', 'New Users': 16, 'Cumulative New Users': 2758 },
			{ DATE: '2021-12-05', 'New Users': 18, 'Cumulative New Users': 2776 },
			{ DATE: '2021-12-06', 'New Users': 18, 'Cumulative New Users': 2794 },
			{ DATE: '2021-12-07', 'New Users': 33, 'Cumulative New Users': 2827 },
			{ DATE: '2021-12-08', 'New Users': 34, 'Cumulative New Users': 2861 },
			{ DATE: '2021-12-09', 'New Users': 31, 'Cumulative New Users': 2892 },
			{ DATE: '2021-12-10', 'New Users': 47, 'Cumulative New Users': 2939 },
			{ DATE: '2021-12-11', 'New Users': 44, 'Cumulative New Users': 2983 },
			{ DATE: '2021-12-12', 'New Users': 32, 'Cumulative New Users': 3015 },
			{ DATE: '2021-12-13', 'New Users': 26, 'Cumulative New Users': 3041 },
			{ DATE: '2021-12-14', 'New Users': 27, 'Cumulative New Users': 3068 },
			{ DATE: '2021-12-15', 'New Users': 38, 'Cumulative New Users': 3106 },
			{ DATE: '2021-12-16', 'New Users': 25, 'Cumulative New Users': 3131 },
			{ DATE: '2021-12-17', 'New Users': 21, 'Cumulative New Users': 3152 },
			{ DATE: '2021-12-18', 'New Users': 29, 'Cumulative New Users': 3181 },
			{ DATE: '2021-12-19', 'New Users': 22, 'Cumulative New Users': 3203 },
			{ DATE: '2021-12-20', 'New Users': 17, 'Cumulative New Users': 3220 },
			{ DATE: '2021-12-21', 'New Users': 24, 'Cumulative New Users': 3244 },
			{ DATE: '2021-12-22', 'New Users': 18, 'Cumulative New Users': 3262 },
			{ DATE: '2021-12-23', 'New Users': 15, 'Cumulative New Users': 3277 },
			{ DATE: '2021-12-24', 'New Users': 9, 'Cumulative New Users': 3286 },
			{ DATE: '2021-12-25', 'New Users': 14, 'Cumulative New Users': 3300 },
			{ DATE: '2021-12-26', 'New Users': 17, 'Cumulative New Users': 3317 },
			{ DATE: '2021-12-27', 'New Users': 27, 'Cumulative New Users': 3344 },
			{ DATE: '2021-12-28', 'New Users': 19, 'Cumulative New Users': 3363 },
			{ DATE: '2021-12-29', 'New Users': 13, 'Cumulative New Users': 3376 },
			{ DATE: '2021-12-30', 'New Users': 27, 'Cumulative New Users': 3403 },
			{ DATE: '2021-12-31', 'New Users': 10, 'Cumulative New Users': 3413 },
			{ DATE: '2022-01-01', 'New Users': 7, 'Cumulative New Users': 3420 },
			{ DATE: '2022-01-02', 'New Users': 25, 'Cumulative New Users': 3445 },
			{ DATE: '2022-01-03', 'New Users': 24, 'Cumulative New Users': 3469 },
			{ DATE: '2022-01-04', 'New Users': 29, 'Cumulative New Users': 3498 },
			{ DATE: '2022-01-05', 'New Users': 21, 'Cumulative New Users': 3519 },
			{ DATE: '2022-01-06', 'New Users': 23, 'Cumulative New Users': 3542 },
			{ DATE: '2022-01-07', 'New Users': 20, 'Cumulative New Users': 3562 },
			{ DATE: '2022-01-08', 'New Users': 18, 'Cumulative New Users': 3580 },
			{ DATE: '2022-01-09', 'New Users': 13, 'Cumulative New Users': 3593 },
			{ DATE: '2022-01-10', 'New Users': 31, 'Cumulative New Users': 3624 },
			{ DATE: '2022-01-11', 'New Users': 15, 'Cumulative New Users': 3639 },
			{ DATE: '2022-01-12', 'New Users': 8, 'Cumulative New Users': 3647 },
			{ DATE: '2022-01-13', 'New Users': 10, 'Cumulative New Users': 3657 },
			{ DATE: '2022-01-14', 'New Users': 13, 'Cumulative New Users': 3670 },
			{ DATE: '2022-01-15', 'New Users': 27, 'Cumulative New Users': 3697 },
			{ DATE: '2022-01-16', 'New Users': 29, 'Cumulative New Users': 3726 },
			{ DATE: '2022-01-17', 'New Users': 22, 'Cumulative New Users': 3748 },
			{ DATE: '2022-01-18', 'New Users': 21, 'Cumulative New Users': 3769 },
			{ DATE: '2022-01-19', 'New Users': 17, 'Cumulative New Users': 3786 },
			{ DATE: '2022-01-20', 'New Users': 21, 'Cumulative New Users': 3807 },
			{ DATE: '2022-01-21', 'New Users': 17, 'Cumulative New Users': 3824 },
			{ DATE: '2022-01-22', 'New Users': 14, 'Cumulative New Users': 3838 },
			{ DATE: '2022-01-23', 'New Users': 13, 'Cumulative New Users': 3851 },
			{ DATE: '2022-01-24', 'New Users': 15, 'Cumulative New Users': 3866 },
			{ DATE: '2022-01-25', 'New Users': 17, 'Cumulative New Users': 3883 },
			{ DATE: '2022-01-26', 'New Users': 18, 'Cumulative New Users': 3901 },
			{ DATE: '2022-01-27', 'New Users': 37, 'Cumulative New Users': 3938 },
			{ DATE: '2022-01-28', 'New Users': 37, 'Cumulative New Users': 3975 },
			{ DATE: '2022-01-29', 'New Users': 27, 'Cumulative New Users': 4002 },
			{ DATE: '2022-01-30', 'New Users': 20, 'Cumulative New Users': 4022 },
			{ DATE: '2022-01-31', 'New Users': 13, 'Cumulative New Users': 4035 },
			{ DATE: '2022-02-01', 'New Users': 11, 'Cumulative New Users': 4046 },
			{ DATE: '2022-02-02', 'New Users': 39, 'Cumulative New Users': 4085 },
			{ DATE: '2022-02-03', 'New Users': 64, 'Cumulative New Users': 4149 },
			{ DATE: '2022-02-04', 'New Users': 28, 'Cumulative New Users': 4177 },
			{ DATE: '2022-02-05', 'New Users': 11, 'Cumulative New Users': 4188 },
			{ DATE: '2022-02-06', 'New Users': 13, 'Cumulative New Users': 4201 },
			{ DATE: '2022-02-07', 'New Users': 40, 'Cumulative New Users': 4241 },
			{ DATE: '2022-02-08', 'New Users': 38, 'Cumulative New Users': 4279 },
			{ DATE: '2022-02-09', 'New Users': 45, 'Cumulative New Users': 4324 },
			{ DATE: '2022-02-10', 'New Users': 29, 'Cumulative New Users': 4353 },
			{ DATE: '2022-02-11', 'New Users': 41, 'Cumulative New Users': 4394 },
			{ DATE: '2022-02-12', 'New Users': 40, 'Cumulative New Users': 4434 },
			{ DATE: '2022-02-13', 'New Users': 31, 'Cumulative New Users': 4465 },
			{ DATE: '2022-02-14', 'New Users': 16, 'Cumulative New Users': 4481 },
			{ DATE: '2022-02-15', 'New Users': 34, 'Cumulative New Users': 4515 },
			{ DATE: '2022-02-16', 'New Users': 20, 'Cumulative New Users': 4535 },
			{ DATE: '2022-02-17', 'New Users': 26, 'Cumulative New Users': 4561 },
			{ DATE: '2022-02-18', 'New Users': 18, 'Cumulative New Users': 4579 },
			{ DATE: '2022-02-19', 'New Users': 39, 'Cumulative New Users': 4618 },
			{ DATE: '2022-02-20', 'New Users': 38, 'Cumulative New Users': 4656 },
			{ DATE: '2022-02-21', 'New Users': 21, 'Cumulative New Users': 4677 },
			{ DATE: '2022-02-22', 'New Users': 13, 'Cumulative New Users': 4690 },
			{ DATE: '2022-02-23', 'New Users': 24, 'Cumulative New Users': 4714 },
			{ DATE: '2022-02-24', 'New Users': 20, 'Cumulative New Users': 4734 },
			{ DATE: '2022-02-25', 'New Users': 36, 'Cumulative New Users': 4770 },
			{ DATE: '2022-02-26', 'New Users': 13, 'Cumulative New Users': 4783 },
			{ DATE: '2022-02-27', 'New Users': 19, 'Cumulative New Users': 4802 },
			{ DATE: '2022-02-28', 'New Users': 12, 'Cumulative New Users': 4814 },
			{ DATE: '2022-03-01', 'New Users': 27, 'Cumulative New Users': 4841 },
			{ DATE: '2022-03-02', 'New Users': 20, 'Cumulative New Users': 4861 },
			{ DATE: '2022-03-03', 'New Users': 13, 'Cumulative New Users': 4874 },
			{ DATE: '2022-03-04', 'New Users': 14, 'Cumulative New Users': 4888 },
			{ DATE: '2022-03-05', 'New Users': 11, 'Cumulative New Users': 4899 },
			{ DATE: '2022-03-06', 'New Users': 7, 'Cumulative New Users': 4906 },
			{ DATE: '2022-03-07', 'New Users': 11, 'Cumulative New Users': 4917 },
			{ DATE: '2022-03-08', 'New Users': 7, 'Cumulative New Users': 4924 },
			{ DATE: '2022-03-09', 'New Users': 11, 'Cumulative New Users': 4935 },
			{ DATE: '2022-03-10', 'New Users': 10, 'Cumulative New Users': 4945 },
			{ DATE: '2022-03-11', 'New Users': 7, 'Cumulative New Users': 4952 },
			{ DATE: '2022-03-12', 'New Users': 7, 'Cumulative New Users': 4959 },
			{ DATE: '2022-03-13', 'New Users': 12, 'Cumulative New Users': 4971 },
			{ DATE: '2022-03-14', 'New Users': 12, 'Cumulative New Users': 4983 },
			{ DATE: '2022-03-15', 'New Users': 10, 'Cumulative New Users': 4993 },
			{ DATE: '2022-03-16', 'New Users': 6, 'Cumulative New Users': 4999 },
			{ DATE: '2022-03-17', 'New Users': 13, 'Cumulative New Users': 5012 },
			{ DATE: '2022-03-18', 'New Users': 6, 'Cumulative New Users': 5018 },
			{ DATE: '2022-03-19', 'New Users': 13, 'Cumulative New Users': 5031 },
			{ DATE: '2022-03-20', 'New Users': 6, 'Cumulative New Users': 5037 },
			{ DATE: '2022-03-21', 'New Users': 7, 'Cumulative New Users': 5044 },
			{ DATE: '2022-03-22', 'New Users': 8, 'Cumulative New Users': 5052 },
			{ DATE: '2022-03-23', 'New Users': 14, 'Cumulative New Users': 5066 },
			{ DATE: '2022-03-24', 'New Users': 17, 'Cumulative New Users': 5083 },
			{ DATE: '2022-03-25', 'New Users': 5, 'Cumulative New Users': 5088 },
			{ DATE: '2022-03-26', 'New Users': 9, 'Cumulative New Users': 5097 },
			{ DATE: '2022-03-27', 'New Users': 8, 'Cumulative New Users': 5105 },
			{ DATE: '2022-03-28', 'New Users': 14, 'Cumulative New Users': 5119 },
			{ DATE: '2022-03-29', 'New Users': 14, 'Cumulative New Users': 5133 },
			{ DATE: '2022-03-30', 'New Users': 18, 'Cumulative New Users': 5151 },
			{ DATE: '2022-03-31', 'New Users': 14, 'Cumulative New Users': 5165 },
			{ DATE: '2022-04-01', 'New Users': 17, 'Cumulative New Users': 5182 },
			{ DATE: '2022-04-02', 'New Users': 15, 'Cumulative New Users': 5197 },
			{ DATE: '2022-04-03', 'New Users': 10, 'Cumulative New Users': 5207 },
			{ DATE: '2022-04-04', 'New Users': 4, 'Cumulative New Users': 5211 },
			{ DATE: '2022-04-05', 'New Users': 15, 'Cumulative New Users': 5226 },
			{ DATE: '2022-04-06', 'New Users': 12, 'Cumulative New Users': 5238 },
			{ DATE: '2022-04-07', 'New Users': 13, 'Cumulative New Users': 5251 },
			{ DATE: '2022-04-08', 'New Users': 9, 'Cumulative New Users': 5260 },
			{ DATE: '2022-04-09', 'New Users': 4, 'Cumulative New Users': 5264 },
			{ DATE: '2022-04-10', 'New Users': 6, 'Cumulative New Users': 5270 },
			{ DATE: '2022-04-11', 'New Users': 11, 'Cumulative New Users': 5281 },
			{ DATE: '2022-04-12', 'New Users': 8, 'Cumulative New Users': 5289 },
			{ DATE: '2022-04-13', 'New Users': 9, 'Cumulative New Users': 5298 },
			{ DATE: '2022-04-14', 'New Users': 14, 'Cumulative New Users': 5312 },
			{ DATE: '2022-04-15', 'New Users': 17, 'Cumulative New Users': 5329 },
			{ DATE: '2022-04-16', 'New Users': 12, 'Cumulative New Users': 5341 },
			{ DATE: '2022-04-17', 'New Users': 7, 'Cumulative New Users': 5348 },
			{ DATE: '2022-04-18', 'New Users': 10, 'Cumulative New Users': 5358 },
			{ DATE: '2022-04-19', 'New Users': 6, 'Cumulative New Users': 5364 },
			{ DATE: '2022-04-20', 'New Users': 11, 'Cumulative New Users': 5375 },
			{ DATE: '2022-04-21', 'New Users': 13, 'Cumulative New Users': 5388 },
			{ DATE: '2022-04-22', 'New Users': 7, 'Cumulative New Users': 5395 },
			{ DATE: '2022-04-23', 'New Users': 26, 'Cumulative New Users': 5421 },
			{ DATE: '2022-04-24', 'New Users': 15, 'Cumulative New Users': 5436 },
			{ DATE: '2022-04-25', 'New Users': 15, 'Cumulative New Users': 5451 },
			{ DATE: '2022-04-26', 'New Users': 31, 'Cumulative New Users': 5482 },
			{ DATE: '2022-04-27', 'New Users': 15, 'Cumulative New Users': 5497 },
			{ DATE: '2022-04-28', 'New Users': 24, 'Cumulative New Users': 5521 },
			{ DATE: '2022-04-29', 'New Users': 23, 'Cumulative New Users': 5544 },
			{ DATE: '2022-04-30', 'New Users': 24, 'Cumulative New Users': 5568 },
			{ DATE: '2022-05-01', 'New Users': 17, 'Cumulative New Users': 5585 },
			{ DATE: '2022-05-02', 'New Users': 22, 'Cumulative New Users': 5607 },
			{ DATE: '2022-05-03', 'New Users': 22, 'Cumulative New Users': 5629 },
			{ DATE: '2022-05-04', 'New Users': 36, 'Cumulative New Users': 5665 },
			{ DATE: '2022-05-05', 'New Users': 19, 'Cumulative New Users': 5684 },
			{ DATE: '2022-05-06', 'New Users': 59, 'Cumulative New Users': 5743 },
			{ DATE: '2022-05-07', 'New Users': 22, 'Cumulative New Users': 5765 },
			{ DATE: '2022-05-08', 'New Users': 24, 'Cumulative New Users': 5789 },
			{ DATE: '2022-05-09', 'New Users': 13, 'Cumulative New Users': 5802 },
			{ DATE: '2022-05-10', 'New Users': 18, 'Cumulative New Users': 5820 },
			{ DATE: '2022-05-11', 'New Users': 7, 'Cumulative New Users': 5827 },
			{ DATE: '2022-05-12', 'New Users': 13, 'Cumulative New Users': 5840 },
			{ DATE: '2022-05-13', 'New Users': 11, 'Cumulative New Users': 5851 },
			{ DATE: '2022-05-14', 'New Users': 17, 'Cumulative New Users': 5868 },
			{ DATE: '2022-05-15', 'New Users': 13, 'Cumulative New Users': 5881 },
			{ DATE: '2022-05-16', 'New Users': 17, 'Cumulative New Users': 5898 },
			{ DATE: '2022-05-17', 'New Users': 15, 'Cumulative New Users': 5913 },
			{ DATE: '2022-05-18', 'New Users': 11, 'Cumulative New Users': 5924 },
			{ DATE: '2022-05-19', 'New Users': 19, 'Cumulative New Users': 5943 },
			{ DATE: '2022-05-20', 'New Users': 9, 'Cumulative New Users': 5952 },
			{ DATE: '2022-05-21', 'New Users': 10, 'Cumulative New Users': 5962 },
			{ DATE: '2022-05-22', 'New Users': 11, 'Cumulative New Users': 5973 },
			{ DATE: '2022-05-23', 'New Users': 7, 'Cumulative New Users': 5980 },
			{ DATE: '2022-05-24', 'New Users': 9, 'Cumulative New Users': 5989 },
			{ DATE: '2022-05-25', 'New Users': 7, 'Cumulative New Users': 5996 },
			{ DATE: '2022-05-26', 'New Users': 10, 'Cumulative New Users': 6006 },
			{ DATE: '2022-05-27', 'New Users': 9, 'Cumulative New Users': 6015 },
			{ DATE: '2022-05-28', 'New Users': 5, 'Cumulative New Users': 6020 },
			{ DATE: '2022-05-29', 'New Users': 6, 'Cumulative New Users': 6026 },
			{ DATE: '2022-05-30', 'New Users': 9, 'Cumulative New Users': 6035 },
			{ DATE: '2022-05-31', 'New Users': 11, 'Cumulative New Users': 6046 },
			{ DATE: '2022-06-01', 'New Users': 14, 'Cumulative New Users': 6060 },
			{ DATE: '2022-06-02', 'New Users': 11, 'Cumulative New Users': 6071 },
			{ DATE: '2022-06-03', 'New Users': 6, 'Cumulative New Users': 6077 },
			{ DATE: '2022-06-04', 'New Users': 6, 'Cumulative New Users': 6083 },
			{ DATE: '2022-06-05', 'New Users': 8, 'Cumulative New Users': 6091 },
			{ DATE: '2022-06-06', 'New Users': 5, 'Cumulative New Users': 6096 },
			{ DATE: '2022-06-07', 'New Users': 11, 'Cumulative New Users': 6107 },
			{ DATE: '2022-06-08', 'New Users': 4, 'Cumulative New Users': 6111 },
			{ DATE: '2022-06-09', 'New Users': 9, 'Cumulative New Users': 6120 },
			{ DATE: '2022-06-10', 'New Users': 7, 'Cumulative New Users': 6127 },
			{ DATE: '2022-06-11', 'New Users': 14, 'Cumulative New Users': 6141 },
			{ DATE: '2022-06-12', 'New Users': 8, 'Cumulative New Users': 6149 },
			{ DATE: '2022-06-13', 'New Users': 16, 'Cumulative New Users': 6165 },
			{ DATE: '2022-06-14', 'New Users': 6, 'Cumulative New Users': 6171 },
			{ DATE: '2022-06-15', 'New Users': 5, 'Cumulative New Users': 6176 },
			{ DATE: '2022-06-16', 'New Users': 9, 'Cumulative New Users': 6185 },
			{ DATE: '2022-06-17', 'New Users': 7, 'Cumulative New Users': 6192 },
			{ DATE: '2022-06-18', 'New Users': 7, 'Cumulative New Users': 6199 },
			{ DATE: '2022-06-19', 'New Users': 13, 'Cumulative New Users': 6212 },
			{ DATE: '2022-06-20', 'New Users': 9, 'Cumulative New Users': 6221 },
			{ DATE: '2022-06-21', 'New Users': 13, 'Cumulative New Users': 6234 },
			{ DATE: '2022-06-22', 'New Users': 40, 'Cumulative New Users': 6274 },
			{ DATE: '2022-06-23', 'New Users': 72, 'Cumulative New Users': 6346 },
			{ DATE: '2022-06-24', 'New Users': 60, 'Cumulative New Users': 6406 },
			{ DATE: '2022-06-25', 'New Users': 53, 'Cumulative New Users': 6459 },
			{ DATE: '2022-06-26', 'New Users': 31, 'Cumulative New Users': 6490 },
			{ DATE: '2022-06-27', 'New Users': 35, 'Cumulative New Users': 6525 },
			{ DATE: '2022-06-28', 'New Users': 30, 'Cumulative New Users': 6555 },
			{ DATE: '2022-06-29', 'New Users': 23, 'Cumulative New Users': 6578 },
			{ DATE: '2022-06-30', 'New Users': 20, 'Cumulative New Users': 6598 },
			{ DATE: '2022-07-01', 'New Users': 26, 'Cumulative New Users': 6624 },
			{ DATE: '2022-07-02', 'New Users': 17, 'Cumulative New Users': 6641 },
			{ DATE: '2022-07-03', 'New Users': 17, 'Cumulative New Users': 6658 },
			{ DATE: '2022-07-04', 'New Users': 35, 'Cumulative New Users': 6693 },
			{ DATE: '2022-07-05', 'New Users': 26, 'Cumulative New Users': 6719 },
			{ DATE: '2022-07-06', 'New Users': 22, 'Cumulative New Users': 6741 },
			{ DATE: '2022-07-07', 'New Users': 31, 'Cumulative New Users': 6772 },
			{ DATE: '2022-07-08', 'New Users': 19, 'Cumulative New Users': 6791 },
			{ DATE: '2022-07-09', 'New Users': 16, 'Cumulative New Users': 6807 },
			{ DATE: '2022-07-10', 'New Users': 16, 'Cumulative New Users': 6823 },
			{ DATE: '2022-07-11', 'New Users': 19, 'Cumulative New Users': 6842 },
			{ DATE: '2022-07-12', 'New Users': 11, 'Cumulative New Users': 6853 },
			{ DATE: '2022-07-13', 'New Users': 11, 'Cumulative New Users': 6864 },
			{ DATE: '2022-07-14', 'New Users': 9, 'Cumulative New Users': 6873 },
			{ DATE: '2022-07-15', 'New Users': 10, 'Cumulative New Users': 6883 },
			{ DATE: '2022-07-16', 'New Users': 12, 'Cumulative New Users': 6895 },
			{ DATE: '2022-07-17', 'New Users': 22, 'Cumulative New Users': 6917 },
			{ DATE: '2022-07-18', 'New Users': 24, 'Cumulative New Users': 6941 },
			{ DATE: '2022-07-19', 'New Users': 6, 'Cumulative New Users': 6947 },
			{ DATE: '2022-07-20', 'New Users': 15, 'Cumulative New Users': 6962 },
			{ DATE: '2022-07-21', 'New Users': 16, 'Cumulative New Users': 6978 },
			{ DATE: '2022-07-22', 'New Users': 20, 'Cumulative New Users': 6998 },
			{ DATE: '2022-07-23', 'New Users': 26, 'Cumulative New Users': 7024 },
			{ DATE: '2022-07-24', 'New Users': 37, 'Cumulative New Users': 7061 },
			{ DATE: '2022-07-25', 'New Users': 9, 'Cumulative New Users': 7070 },
			{ DATE: '2022-07-26', 'New Users': 27, 'Cumulative New Users': 7097 },
			{ DATE: '2022-07-27', 'New Users': 29, 'Cumulative New Users': 7126 },
			{ DATE: '2022-07-28', 'New Users': 10, 'Cumulative New Users': 7136 },
			{ DATE: '2022-07-29', 'New Users': 16, 'Cumulative New Users': 7152 },
			{ DATE: '2022-07-30', 'New Users': 21, 'Cumulative New Users': 7173 },
			{ DATE: '2022-07-31', 'New Users': 12, 'Cumulative New Users': 7185 },
			{ DATE: '2022-08-01', 'New Users': 13, 'Cumulative New Users': 7198 },
			{ DATE: '2022-08-02', 'New Users': 14, 'Cumulative New Users': 7212 },
			{ DATE: '2022-08-03', 'New Users': 29, 'Cumulative New Users': 7241 },
			{ DATE: '2022-08-04', 'New Users': 23, 'Cumulative New Users': 7264 },
			{ DATE: '2022-08-05', 'New Users': 10, 'Cumulative New Users': 7274 },
			{ DATE: '2022-08-06', 'New Users': 17, 'Cumulative New Users': 7291 },
			{ DATE: '2022-08-07', 'New Users': 25, 'Cumulative New Users': 7316 },
			{ DATE: '2022-08-08', 'New Users': 26, 'Cumulative New Users': 7342 },
			{ DATE: '2022-08-09', 'New Users': 16, 'Cumulative New Users': 7358 },
			{ DATE: '2022-08-10', 'New Users': 26, 'Cumulative New Users': 7384 },
			{ DATE: '2022-08-11', 'New Users': 17, 'Cumulative New Users': 7401 },
			{ DATE: '2022-08-12', 'New Users': 11, 'Cumulative New Users': 7412 },
			{ DATE: '2022-08-13', 'New Users': 21, 'Cumulative New Users': 7433 },
			{ DATE: '2022-08-14', 'New Users': 19, 'Cumulative New Users': 7452 },
			{ DATE: '2022-08-15', 'New Users': 15, 'Cumulative New Users': 7467 },
			{ DATE: '2022-08-16', 'New Users': 16, 'Cumulative New Users': 7483 },
			{ DATE: '2022-08-17', 'New Users': 6, 'Cumulative New Users': 7489 },
			{ DATE: '2022-08-18', 'New Users': 14, 'Cumulative New Users': 7503 },
			{ DATE: '2022-08-19', 'New Users': 18, 'Cumulative New Users': 7521 },
			{ DATE: '2022-08-20', 'New Users': 22, 'Cumulative New Users': 7543 },
			{ DATE: '2022-08-21', 'New Users': 12, 'Cumulative New Users': 7555 },
			{ DATE: '2022-08-22', 'New Users': 13, 'Cumulative New Users': 7568 },
			{ DATE: '2022-08-23', 'New Users': 18, 'Cumulative New Users': 7586 },
			{ DATE: '2022-08-24', 'New Users': 17, 'Cumulative New Users': 7603 },
			{ DATE: '2022-08-25', 'New Users': 23, 'Cumulative New Users': 7626 },
			{ DATE: '2022-08-26', 'New Users': 24, 'Cumulative New Users': 7650 },
			{ DATE: '2022-08-27', 'New Users': 13, 'Cumulative New Users': 7663 },
			{ DATE: '2022-08-28', 'New Users': 22, 'Cumulative New Users': 7685 },
			{ DATE: '2022-08-29', 'New Users': 24, 'Cumulative New Users': 7709 },
			{ DATE: '2022-08-30', 'New Users': 15, 'Cumulative New Users': 7724 },
			{ DATE: '2022-08-31', 'New Users': 24, 'Cumulative New Users': 7748 },
			{ DATE: '2022-09-01', 'New Users': 14, 'Cumulative New Users': 7762 },
			{ DATE: '2022-09-02', 'New Users': 13, 'Cumulative New Users': 7775 },
			{ DATE: '2022-09-03', 'New Users': 20, 'Cumulative New Users': 7795 },
			{ DATE: '2022-09-04', 'New Users': 14, 'Cumulative New Users': 7809 },
			{ DATE: '2022-09-05', 'New Users': 22, 'Cumulative New Users': 7831 },
			{ DATE: '2022-09-06', 'New Users': 13, 'Cumulative New Users': 7844 },
			{ DATE: '2022-09-07', 'New Users': 8, 'Cumulative New Users': 7852 },
			{ DATE: '2022-09-08', 'New Users': 17, 'Cumulative New Users': 7869 },
			{ DATE: '2022-09-09', 'New Users': 25, 'Cumulative New Users': 7894 },
			{ DATE: '2022-09-10', 'New Users': 14, 'Cumulative New Users': 7908 },
			{ DATE: '2022-09-11', 'New Users': 13, 'Cumulative New Users': 7921 },
			{ DATE: '2022-09-12', 'New Users': 12, 'Cumulative New Users': 7933 },
			{ DATE: '2022-09-13', 'New Users': 15, 'Cumulative New Users': 7948 },
			{ DATE: '2022-09-14', 'New Users': 13, 'Cumulative New Users': 7961 },
			{ DATE: '2022-09-15', 'New Users': 8, 'Cumulative New Users': 7969 },
			{ DATE: '2022-09-16', 'New Users': 10, 'Cumulative New Users': 7979 },
			{ DATE: '2022-09-17', 'New Users': 19, 'Cumulative New Users': 7998 },
			{ DATE: '2022-09-18', 'New Users': 23, 'Cumulative New Users': 8021 },
			{ DATE: '2022-09-19', 'New Users': 9, 'Cumulative New Users': 8030 },
			{ DATE: '2022-09-20', 'New Users': 13, 'Cumulative New Users': 8043 },
			{ DATE: '2022-09-21', 'New Users': 12, 'Cumulative New Users': 8055 },
			{ DATE: '2022-09-22', 'New Users': 6, 'Cumulative New Users': 8061 },
			{ DATE: '2022-09-23', 'New Users': 8, 'Cumulative New Users': 8069 },
			{ DATE: '2022-09-24', 'New Users': 10, 'Cumulative New Users': 8079 },
			{ DATE: '2022-09-25', 'New Users': 12, 'Cumulative New Users': 8091 },
			{ DATE: '2022-09-26', 'New Users': 6, 'Cumulative New Users': 8097 },
			{ DATE: '2022-09-27', 'New Users': 19, 'Cumulative New Users': 8116 },
			{ DATE: '2022-09-28', 'New Users': 24, 'Cumulative New Users': 8140 },
			{ DATE: '2022-09-29', 'New Users': 16, 'Cumulative New Users': 8156 },
			{ DATE: '2022-09-30', 'New Users': 6, 'Cumulative New Users': 8162 },
			{ DATE: '2022-10-01', 'New Users': 15, 'Cumulative New Users': 8177 },
			{ DATE: '2022-10-02', 'New Users': 11, 'Cumulative New Users': 8188 },
			{ DATE: '2022-10-03', 'New Users': 8, 'Cumulative New Users': 8196 },
			{ DATE: '2022-10-04', 'New Users': 10, 'Cumulative New Users': 8206 },
			{ DATE: '2022-10-05', 'New Users': 11, 'Cumulative New Users': 8217 },
			{ DATE: '2022-10-06', 'New Users': 10, 'Cumulative New Users': 8227 },
			{ DATE: '2022-10-07', 'New Users': 15, 'Cumulative New Users': 8242 },
			{ DATE: '2022-10-08', 'New Users': 12, 'Cumulative New Users': 8254 },
			{ DATE: '2022-10-09', 'New Users': 13, 'Cumulative New Users': 8267 },
			{ DATE: '2022-10-10', 'New Users': 15, 'Cumulative New Users': 8282 },
			{ DATE: '2022-10-11', 'New Users': 17, 'Cumulative New Users': 8299 },
			{ DATE: '2022-10-12', 'New Users': 13, 'Cumulative New Users': 8312 },
			{ DATE: '2022-10-13', 'New Users': 18, 'Cumulative New Users': 8330 },
			{ DATE: '2022-10-14', 'New Users': 17, 'Cumulative New Users': 8347 },
			{ DATE: '2022-10-15', 'New Users': 10, 'Cumulative New Users': 8357 },
			{ DATE: '2022-10-16', 'New Users': 11, 'Cumulative New Users': 8368 },
			{ DATE: '2022-10-17', 'New Users': 11, 'Cumulative New Users': 8379 },
			{ DATE: '2022-10-18', 'New Users': 19, 'Cumulative New Users': 8398 },
			{ DATE: '2022-10-19', 'New Users': 19, 'Cumulative New Users': 8417 },
			{ DATE: '2022-10-20', 'New Users': 44, 'Cumulative New Users': 8461 },
			{ DATE: '2022-10-21', 'New Users': 48, 'Cumulative New Users': 8509 },
			{ DATE: '2022-10-22', 'New Users': 22, 'Cumulative New Users': 8531 },
			{ DATE: '2022-10-23', 'New Users': 20, 'Cumulative New Users': 8551 },
			{ DATE: '2022-10-24', 'New Users': 20, 'Cumulative New Users': 8571 },
			{ DATE: '2022-10-25', 'New Users': 30, 'Cumulative New Users': 8601 },
			{ DATE: '2022-10-26', 'New Users': 49, 'Cumulative New Users': 8650 },
			{ DATE: '2022-10-27', 'New Users': 47, 'Cumulative New Users': 8697 },
			{ DATE: '2022-10-28', 'New Users': 80, 'Cumulative New Users': 8777 },
			{ DATE: '2022-10-29', 'New Users': 40, 'Cumulative New Users': 8817 },
			{ DATE: '2022-10-30', 'New Users': 31, 'Cumulative New Users': 8848 },
			{ DATE: '2022-10-31', 'New Users': 60, 'Cumulative New Users': 8908 },
			{ DATE: '2022-11-01', 'New Users': 48, 'Cumulative New Users': 8956 },
			{ DATE: '2022-11-02', 'New Users': 23, 'Cumulative New Users': 8979 },
			{ DATE: '2022-11-03', 'New Users': 28, 'Cumulative New Users': 9007 },
			{ DATE: '2022-11-04', 'New Users': 22, 'Cumulative New Users': 9029 },
			{ DATE: '2022-11-05', 'New Users': 46, 'Cumulative New Users': 9075 },
			{ DATE: '2022-11-06', 'New Users': 46, 'Cumulative New Users': 9121 },
			{ DATE: '2022-11-07', 'New Users': 165, 'Cumulative New Users': 9286 },
			{ DATE: '2022-11-08', 'New Users': 173, 'Cumulative New Users': 9459 },
			{ DATE: '2022-11-09', 'New Users': 40, 'Cumulative New Users': 9499 },
			{ DATE: '2022-11-10', 'New Users': 55, 'Cumulative New Users': 9554 },
			{ DATE: '2022-11-11', 'New Users': 59, 'Cumulative New Users': 9613 },
			{ DATE: '2022-11-12', 'New Users': 67, 'Cumulative New Users': 9680 },
			{ DATE: '2022-11-13', 'New Users': 73, 'Cumulative New Users': 9753 },
			{ DATE: '2022-11-14', 'New Users': 49, 'Cumulative New Users': 9802 },
			{ DATE: '2022-11-15', 'New Users': 77, 'Cumulative New Users': 9879 },
			{ DATE: '2022-11-16', 'New Users': 129, 'Cumulative New Users': 10008 },
			{ DATE: '2022-11-17', 'New Users': 55, 'Cumulative New Users': 10063 },
			{ DATE: '2022-11-18', 'New Users': 64, 'Cumulative New Users': 10127 },
			{ DATE: '2022-11-19', 'New Users': 58, 'Cumulative New Users': 10185 },
			{ DATE: '2022-11-20', 'New Users': 78, 'Cumulative New Users': 10263 },
			{ DATE: '2022-11-21', 'New Users': 48, 'Cumulative New Users': 10311 },
			{ DATE: '2022-11-22', 'New Users': 128, 'Cumulative New Users': 10439 },
			{ DATE: '2022-11-23', 'New Users': 115, 'Cumulative New Users': 10554 },
			{ DATE: '2022-11-24', 'New Users': 134, 'Cumulative New Users': 10688 },
			{ DATE: '2022-11-25', 'New Users': 76, 'Cumulative New Users': 10764 },
			{ DATE: '2022-11-26', 'New Users': 77, 'Cumulative New Users': 10841 },
			{ DATE: '2022-11-27', 'New Users': 84, 'Cumulative New Users': 10925 },
			{ DATE: '2022-11-28', 'New Users': 66, 'Cumulative New Users': 10991 },
			{ DATE: '2022-11-29', 'New Users': 76, 'Cumulative New Users': 11067 },
			{ DATE: '2022-11-30', 'New Users': 64, 'Cumulative New Users': 11131 },
			{ DATE: '2022-12-01', 'New Users': 58, 'Cumulative New Users': 11189 },
			{ DATE: '2022-12-02', 'New Users': 100, 'Cumulative New Users': 11289 },
			{ DATE: '2022-12-03', 'New Users': 121, 'Cumulative New Users': 11410 },
			{ DATE: '2022-12-04', 'New Users': 82, 'Cumulative New Users': 11492 },
			{ DATE: '2022-12-05', 'New Users': 46, 'Cumulative New Users': 11538 },
			{ DATE: '2022-12-06', 'New Users': 41, 'Cumulative New Users': 11579 },
			{ DATE: '2022-12-07', 'New Users': 123, 'Cumulative New Users': 11702 },
			{ DATE: '2022-12-08', 'New Users': 165, 'Cumulative New Users': 11867 },
			{ DATE: '2022-12-09', 'New Users': 294, 'Cumulative New Users': 12161 },
			{ DATE: '2022-12-10', 'New Users': 228, 'Cumulative New Users': 12389 },
			{ DATE: '2022-12-11', 'New Users': 215, 'Cumulative New Users': 12604 },
			{ DATE: '2022-12-12', 'New Users': 180, 'Cumulative New Users': 12784 },
			{ DATE: '2022-12-13', 'New Users': 123, 'Cumulative New Users': 12907 },
			{ DATE: '2022-12-14', 'New Users': 309, 'Cumulative New Users': 13216 },
			{ DATE: '2022-12-15', 'New Users': 261, 'Cumulative New Users': 13477 },
			{ DATE: '2022-12-16', 'New Users': 180, 'Cumulative New Users': 13657 },
			{ DATE: '2022-12-17', 'New Users': 163, 'Cumulative New Users': 13820 },
			{ DATE: '2022-12-18', 'New Users': 64, 'Cumulative New Users': 13884 },
			{ DATE: '2022-12-19', 'New Users': 119, 'Cumulative New Users': 14003 },
			{ DATE: '2022-12-20', 'New Users': 148, 'Cumulative New Users': 14151 },
			{ DATE: '2022-12-21', 'New Users': 214, 'Cumulative New Users': 14365 },
			{ DATE: '2022-12-22', 'New Users': 159, 'Cumulative New Users': 14524 },
			{ DATE: '2022-12-23', 'New Users': 158, 'Cumulative New Users': 14682 },
			{ DATE: '2022-12-24', 'New Users': 106, 'Cumulative New Users': 14788 },
			{ DATE: '2022-12-25', 'New Users': 82, 'Cumulative New Users': 14870 },
			{ DATE: '2022-12-26', 'New Users': 145, 'Cumulative New Users': 15015 },
			{ DATE: '2022-12-27', 'New Users': 101, 'Cumulative New Users': 15116 },
			{ DATE: '2022-12-28', 'New Users': 81, 'Cumulative New Users': 15197 },
			{ DATE: '2022-12-29', 'New Users': 104, 'Cumulative New Users': 15301 },
			{ DATE: '2022-12-30', 'New Users': 70, 'Cumulative New Users': 15371 },
			{ DATE: '2022-12-31', 'New Users': 42, 'Cumulative New Users': 15413 },
			{ DATE: '2023-01-01', 'New Users': 31, 'Cumulative New Users': 15444 },
			{ DATE: '2023-01-02', 'New Users': 44, 'Cumulative New Users': 15488 },
			{ DATE: '2023-01-03', 'New Users': 53, 'Cumulative New Users': 15541 },
			{ DATE: '2023-01-04', 'New Users': 62, 'Cumulative New Users': 15603 },
			{ DATE: '2023-01-05', 'New Users': 56, 'Cumulative New Users': 15659 },
			{ DATE: '2023-01-06', 'New Users': 130, 'Cumulative New Users': 15789 },
			{ DATE: '2023-01-07', 'New Users': 66, 'Cumulative New Users': 15855 },
			{ DATE: '2023-01-08', 'New Users': 69, 'Cumulative New Users': 15924 },
			{ DATE: '2023-01-09', 'New Users': 64, 'Cumulative New Users': 15988 },
			{ DATE: '2023-01-10', 'New Users': 51, 'Cumulative New Users': 16039 },
			{ DATE: '2023-01-11', 'New Users': 68, 'Cumulative New Users': 16107 },
			{ DATE: '2023-01-12', 'New Users': 81, 'Cumulative New Users': 16188 },
			{ DATE: '2023-01-13', 'New Users': 71, 'Cumulative New Users': 16259 },
			{ DATE: '2023-01-14', 'New Users': 84, 'Cumulative New Users': 16343 },
			{ DATE: '2023-01-15', 'New Users': 60, 'Cumulative New Users': 16403 },
			{ DATE: '2023-01-16', 'New Users': 87, 'Cumulative New Users': 16490 },
			{ DATE: '2023-01-17', 'New Users': 64, 'Cumulative New Users': 16554 },
			{ DATE: '2023-01-18', 'New Users': 67, 'Cumulative New Users': 16621 },
			{ DATE: '2023-01-19', 'New Users': 78, 'Cumulative New Users': 16699 },
			{ DATE: '2023-01-20', 'New Users': 82, 'Cumulative New Users': 16781 },
			{ DATE: '2023-01-21', 'New Users': 37, 'Cumulative New Users': 16818 },
			{ DATE: '2023-01-22', 'New Users': 56, 'Cumulative New Users': 16874 },
			{ DATE: '2023-01-23', 'New Users': 78, 'Cumulative New Users': 16952 },
			{ DATE: '2023-01-24', 'New Users': 49, 'Cumulative New Users': 17001 },
			{ DATE: '2023-01-25', 'New Users': 65, 'Cumulative New Users': 17066 },
			{ DATE: '2023-01-26', 'New Users': 43, 'Cumulative New Users': 17109 },
			{ DATE: '2023-01-27', 'New Users': 49, 'Cumulative New Users': 17158 },
			{ DATE: '2023-01-28', 'New Users': 41, 'Cumulative New Users': 17199 },
			{ DATE: '2023-01-29', 'New Users': 41, 'Cumulative New Users': 17240 },
			{ DATE: '2023-01-30', 'New Users': 60, 'Cumulative New Users': 17300 },
			{ DATE: '2023-01-31', 'New Users': 98, 'Cumulative New Users': 17398 },
			{ DATE: '2023-02-01', 'New Users': 115, 'Cumulative New Users': 17513 },
			{ DATE: '2023-02-02', 'New Users': 74, 'Cumulative New Users': 17587 },
			{ DATE: '2023-02-03', 'New Users': 98, 'Cumulative New Users': 17685 },
			{ DATE: '2023-02-04', 'New Users': 110, 'Cumulative New Users': 17795 },
			{ DATE: '2023-02-05', 'New Users': 51, 'Cumulative New Users': 17846 },
			{ DATE: '2023-02-06', 'New Users': 71, 'Cumulative New Users': 17917 },
			{ DATE: '2023-02-07', 'New Users': 42, 'Cumulative New Users': 17959 },
			{ DATE: '2023-02-08', 'New Users': 120, 'Cumulative New Users': 18079 },
			{ DATE: '2023-02-09', 'New Users': 64, 'Cumulative New Users': 18143 },
			{ DATE: '2023-02-10', 'New Users': 61, 'Cumulative New Users': 18204 },
			{ DATE: '2023-02-11', 'New Users': 32, 'Cumulative New Users': 18236 },
			{ DATE: '2023-02-12', 'New Users': 48, 'Cumulative New Users': 18284 },
			{ DATE: '2023-02-13', 'New Users': 91, 'Cumulative New Users': 18375 },
			{ DATE: '2023-02-14', 'New Users': 35, 'Cumulative New Users': 18410 },
			{ DATE: '2023-02-15', 'New Users': 67, 'Cumulative New Users': 18477 },
			{ DATE: '2023-02-16', 'New Users': 49, 'Cumulative New Users': 18526 },
			{ DATE: '2023-02-17', 'New Users': 92, 'Cumulative New Users': 18618 },
			{ DATE: '2023-02-18', 'New Users': 179, 'Cumulative New Users': 18797 },
			{ DATE: '2023-02-19', 'New Users': 107, 'Cumulative New Users': 18904 },
			{ DATE: '2023-02-20', 'New Users': 119, 'Cumulative New Users': 19023 },
			{ DATE: '2023-02-21', 'New Users': 83, 'Cumulative New Users': 19106 },
			{ DATE: '2023-02-22', 'New Users': 79, 'Cumulative New Users': 19185 },
			{ DATE: '2023-02-23', 'New Users': 79, 'Cumulative New Users': 19264 },
			{ DATE: '2023-02-24', 'New Users': 79, 'Cumulative New Users': 19343 },
			{ DATE: '2023-02-25', 'New Users': 80, 'Cumulative New Users': 19423 },
			{ DATE: '2023-02-26', 'New Users': 77, 'Cumulative New Users': 19500 },
			{ DATE: '2023-02-27', 'New Users': 98, 'Cumulative New Users': 19598 },
			{ DATE: '2023-02-28', 'New Users': 68, 'Cumulative New Users': 19666 },
			{ DATE: '2023-03-01', 'New Users': 82, 'Cumulative New Users': 19748 },
			{ DATE: '2023-03-02', 'New Users': 97, 'Cumulative New Users': 19845 },
			{ DATE: '2023-03-03', 'New Users': 42, 'Cumulative New Users': 19887 },
			{ DATE: '2023-03-04', 'New Users': 128, 'Cumulative New Users': 20015 },
			{ DATE: '2023-03-05', 'New Users': 73, 'Cumulative New Users': 20088 },
			{ DATE: '2023-03-06', 'New Users': 44, 'Cumulative New Users': 20132 },
			{ DATE: '2023-03-07', 'New Users': 35, 'Cumulative New Users': 20167 },
			{ DATE: '2023-03-08', 'New Users': 65, 'Cumulative New Users': 20232 },
			{ DATE: '2023-03-09', 'New Users': 55, 'Cumulative New Users': 20287 },
			{ DATE: '2023-03-10', 'New Users': 56, 'Cumulative New Users': 20343 },
			{ DATE: '2023-03-11', 'New Users': 28, 'Cumulative New Users': 20371 },
			{ DATE: '2023-03-12', 'New Users': 54, 'Cumulative New Users': 20425 },
			{ DATE: '2023-03-13', 'New Users': 50, 'Cumulative New Users': 20475 },
			{ DATE: '2023-03-14', 'New Users': 47, 'Cumulative New Users': 20522 },
			{ DATE: '2023-03-15', 'New Users': 8, 'Cumulative New Users': 20530 }
		],
		ACTIONS_DIST: [
			{ EVENT_NAME: 'Transfer', ACTIONS: 413439, USERS: 22812, AMOUNT: 29.61369897 },

			{ EVENT_NAME: 'Approval', ACTIONS: 190301, USERS: 19951, AMOUNT: 1.31700764381105e70 },
			{ EVENT_NAME: 'Mint', ACTIONS: 4940, USERS: 1, AMOUNT: 3.409691965 },
			{ EVENT_NAME: 'Unwrap', ACTIONS: 1903, USERS: 850, AMOUNT: 2.694839666 }
		],
		ACTIONS_COUNT_DIST: [
			{ BUCKETS: '2 - 10 Actions', FREQUENCY: 15704 },
			{ BUCKETS: 'Greater than 10 Actions', FREQUENCY: 6042 },
			{ BUCKETS: 'Single Action', FREQUENCY: 1213 }
		],
		ACTIONS_DAILY: [
			{ DATE: '2022-05-19', EVENT_NAME: 'Unwrap', ACTIONS: 1, USERS: 1, AMOUNT: 3e-7 },
			{ DATE: '2022-05-19', EVENT_NAME: 'Transfer', ACTIONS: 5, USERS: 2, AMOUNT: 9.25e-7 },
			{ DATE: '2022-05-19', EVENT_NAME: 'Mint', ACTIONS: 2, USERS: 1, AMOUNT: 6.05026e-7 },
			{ DATE: '2022-05-20', EVENT_NAME: 'Unwrap', ACTIONS: 1, USERS: 1, AMOUNT: 4.3e-7 },
			{ DATE: '2022-05-20', EVENT_NAME: 'Transfer', ACTIONS: 7, USERS: 2, AMOUNT: 0.0000014 },
			{ DATE: '2022-05-20', EVENT_NAME: 'Mint', ACTIONS: 3, USERS: 1, AMOUNT: 9.39096e-7 },
			{ DATE: '2022-05-24', EVENT_NAME: 'Unwrap', ACTIONS: 1, USERS: 1, AMOUNT: 9.69352e-7 },
			{
				DATE: '2022-05-24',
				EVENT_NAME: 'Transfer',
				ACTIONS: 7,
				USERS: 2,
				AMOUNT: 0.000003305839
			},
			{ DATE: '2022-05-24', EVENT_NAME: 'Mint', ACTIONS: 3, USERS: 1, AMOUNT: 0.00000230567 },
			{ DATE: '2022-05-26', EVENT_NAME: 'Unwrap', ACTIONS: 4, USERS: 3, AMOUNT: 0.000002075907 },
			{
				DATE: '2022-05-26',
				EVENT_NAME: 'Transfer',
				ACTIONS: 10,
				USERS: 4,
				AMOUNT: 0.000002875907
			},
			{ DATE: '2022-05-26', EVENT_NAME: 'Mint', ACTIONS: 3, USERS: 1, AMOUNT: 7.69473e-7 },
			{ DATE: '2022-05-27', EVENT_NAME: 'Unwrap', ACTIONS: 1, USERS: 1, AMOUNT: 1.25e-7 },
			{ DATE: '2022-05-27', EVENT_NAME: 'Transfer', ACTIONS: 3, USERS: 2, AMOUNT: 2.5e-7 },
			{ DATE: '2022-05-27', EVENT_NAME: 'Mint', ACTIONS: 1, USERS: 1, AMOUNT: 1.1463e-7 },
			{ DATE: '2022-05-31', EVENT_NAME: 'Unwrap', ACTIONS: 1, USERS: 1, AMOUNT: 1.90636e-7 },
			{ DATE: '2022-05-31', EVENT_NAME: 'Mint', ACTIONS: 2, USERS: 1, AMOUNT: 3.81152e-7 },
			{ DATE: '2022-05-31', EVENT_NAME: 'Transfer', ACTIONS: 5, USERS: 2, AMOUNT: 5.90636e-7 },
			{ DATE: '2022-06-01', EVENT_NAME: 'Transfer', ACTIONS: 1, USERS: 1, AMOUNT: 8e-8 },
			{ DATE: '2022-06-01', EVENT_NAME: 'Unwrap', ACTIONS: 1, USERS: 1, AMOUNT: 8e-8 },
			{ DATE: '2022-06-02', EVENT_NAME: 'Transfer', ACTIONS: 2, USERS: 1, AMOUNT: 2e-7 },
			{ DATE: '2022-06-02', EVENT_NAME: 'Mint', ACTIONS: 1, USERS: 1, AMOUNT: 1.90099e-7 },
			{ DATE: '2022-06-07', EVENT_NAME: 'Unwrap', ACTIONS: 1, USERS: 1, AMOUNT: 2.29981e-7 },
			{ DATE: '2022-06-07', EVENT_NAME: 'Mint', ACTIONS: 1, USERS: 1, AMOUNT: 1.14968e-7 },
			{ DATE: '2022-06-07', EVENT_NAME: 'Transfer', ACTIONS: 3, USERS: 2, AMOUNT: 3.54981e-7 },
			{ DATE: '2022-06-08', EVENT_NAME: 'Transfer', ACTIONS: 6, USERS: 1, AMOUNT: 6.96856e-7 },
			{ DATE: '2022-06-08', EVENT_NAME: 'Mint', ACTIONS: 3, USERS: 1, AMOUNT: 6.6717e-7 },
			{ DATE: '2022-06-09', EVENT_NAME: 'Mint', ACTIONS: 1, USERS: 1, AMOUNT: 1.1509e-7 },
			{ DATE: '2022-06-09', EVENT_NAME: 'Unwrap', ACTIONS: 1, USERS: 1, AMOUNT: 1.1509e-7 },
			{ DATE: '2022-06-09', EVENT_NAME: 'Transfer', ACTIONS: 3, USERS: 2, AMOUNT: 2.4009e-7 },
			{ DATE: '2022-06-10', EVENT_NAME: 'Mint', ACTIONS: 1, USERS: 1, AMOUNT: 0.000001611364 },
			{
				DATE: '2022-06-10',
				EVENT_NAME: 'Transfer',
				ACTIONS: 3,
				USERS: 2,
				AMOUNT: 0.000002201381
			},
			{ DATE: '2022-06-10', EVENT_NAME: 'Unwrap', ACTIONS: 1, USERS: 1, AMOUNT: 5.79664e-7 },
			{ DATE: '2022-06-14', EVENT_NAME: 'Mint', ACTIONS: 2, USERS: 1, AMOUNT: 0.000001097492 },
			{
				DATE: '2022-06-14',
				EVENT_NAME: 'Transfer',
				ACTIONS: 4,
				USERS: 1,
				AMOUNT: 0.000001124978
			},
			{ DATE: '2022-06-15', EVENT_NAME: 'Mint', ACTIONS: 1, USERS: 1, AMOUNT: 7.80806e-7 },
			{ DATE: '2022-06-15', EVENT_NAME: 'Transfer', ACTIONS: 2, USERS: 1, AMOUNT: 7.94269e-7 },
			{ DATE: '2022-06-16', EVENT_NAME: 'Transfer', ACTIONS: 2, USERS: 1, AMOUNT: 1.25e-7 },
			{ DATE: '2022-06-16', EVENT_NAME: 'Mint', ACTIONS: 1, USERS: 1, AMOUNT: 1.10702e-7 },
			{ DATE: '2022-06-18', EVENT_NAME: 'Mint', ACTIONS: 1, USERS: 1, AMOUNT: 0.000002668033 },
			{
				DATE: '2022-06-18',
				EVENT_NAME: 'Transfer',
				ACTIONS: 2,
				USERS: 1,
				AMOUNT: 0.000002682621
			},
			{
				DATE: '2022-06-21',
				EVENT_NAME: 'Transfer',
				ACTIONS: 8,
				USERS: 2,
				AMOUNT: 0.002106603429
			},
			{ DATE: '2022-06-21', EVENT_NAME: 'Mint', ACTIONS: 3, USERS: 1, AMOUNT: 0.002103456989 },
			{ DATE: '2022-06-21', EVENT_NAME: 'Unwrap', ACTIONS: 2, USERS: 1, AMOUNT: 0.000003103989 },
			{
				DATE: '2022-06-21',
				EVENT_NAME: 'Approval',
				ACTIONS: 1,
				USERS: 1,
				AMOUNT: 1.15792089237316e65
			},
			{
				DATE: '2022-06-22',
				EVENT_NAME: 'Transfer',
				ACTIONS: 769,
				USERS: 172,
				AMOUNT: 0.04557641199
			},
			{
				DATE: '2022-06-22',
				EVENT_NAME: 'Approval',
				ACTIONS: 475,
				USERS: 132,
				AMOUNT: 5.10643113536564e67
			},
			{ DATE: '2022-06-22', EVENT_NAME: 'Mint', ACTIONS: 41, USERS: 1, AMOUNT: 0.01471581358 },
			{ DATE: '2022-06-22', EVENT_NAME: 'Unwrap', ACTIONS: 3, USERS: 3, AMOUNT: 0.000009483987 },
			{ DATE: '2022-06-23', EVENT_NAME: 'Mint', ACTIONS: 144, USERS: 1, AMOUNT: 0.02276631527 },
			{
				DATE: '2022-06-23',
				EVENT_NAME: 'Unwrap',
				ACTIONS: 13,
				USERS: 12,
				AMOUNT: 0.000004220166
			},
			{
				DATE: '2022-06-23',
				EVENT_NAME: 'Transfer',
				ACTIONS: 1511,
				USERS: 319,
				AMOUNT: 0.0872110206
			},
			{
				DATE: '2022-06-23',
				EVENT_NAME: 'Approval',
				ACTIONS: 873,
				USERS: 265,
				AMOUNT: 9.02020375158693e67
			},
			{
				DATE: '2022-06-24',
				EVENT_NAME: 'Transfer',
				ACTIONS: 1403,
				USERS: 262,
				AMOUNT: 0.05342040299
			},
			{ DATE: '2022-06-24', EVENT_NAME: 'Mint', ACTIONS: 125, USERS: 1, AMOUNT: 0.009800755481 },
			{ DATE: '2022-06-24', EVENT_NAME: 'Unwrap', ACTIONS: 8, USERS: 8, AMOUNT: 0.000002506924 },
			{
				DATE: '2022-06-24',
				EVENT_NAME: 'Approval',
				ACTIONS: 802,
				USERS: 228,
				AMOUNT: 7.80438681459511e67
			},
			{ DATE: '2022-06-25', EVENT_NAME: 'Unwrap', ACTIONS: 5, USERS: 5, AMOUNT: 0.001073522565 },
			{ DATE: '2022-06-25', EVENT_NAME: 'Mint', ACTIONS: 86, USERS: 1, AMOUNT: 0.01553521162 },
			{
				DATE: '2022-06-25',
				EVENT_NAME: 'Transfer',
				ACTIONS: 1062,
				USERS: 209,
				AMOUNT: 0.06445644276
			},
			{
				DATE: '2022-06-25',
				EVENT_NAME: 'Approval',
				ACTIONS: 635,
				USERS: 177,
				AMOUNT: 5.84750050648447e67
			},
			{ DATE: '2022-06-26', EVENT_NAME: 'Mint', ACTIONS: 58, USERS: 1, AMOUNT: 0.005546454446 },
			{ DATE: '2022-06-26', EVENT_NAME: 'Unwrap', ACTIONS: 4, USERS: 4, AMOUNT: 0.00000232213 },
			{
				DATE: '2022-06-26',
				EVENT_NAME: 'Transfer',
				ACTIONS: 700,
				USERS: 150,
				AMOUNT: 0.02950716843
			},
			{
				DATE: '2022-06-26',
				EVENT_NAME: 'Approval',
				ACTIONS: 428,
				USERS: 129,
				AMOUNT: 3.69376764667039e67
			},
			{
				DATE: '2022-06-27',
				EVENT_NAME: 'Approval',
				ACTIONS: 453,
				USERS: 130,
				AMOUNT: 4.44641622671294e67
			},
			{ DATE: '2022-06-27', EVENT_NAME: 'Mint', ACTIONS: 37, USERS: 1, AMOUNT: 0.007054548704 },
			{
				DATE: '2022-06-27',
				EVENT_NAME: 'Transfer',
				ACTIONS: 758,
				USERS: 151,
				AMOUNT: 0.07125402069
			},
			{ DATE: '2022-06-27', EVENT_NAME: 'Unwrap', ACTIONS: 8, USERS: 7, AMOUNT: 0.001957945123 },
			{
				DATE: '2022-06-28',
				EVENT_NAME: 'Transfer',
				ACTIONS: 871,
				USERS: 137,
				AMOUNT: 0.04664636659
			},
			{ DATE: '2022-06-28', EVENT_NAME: 'Unwrap', ACTIONS: 1, USERS: 1, AMOUNT: 1.24202e-7 },
			{
				DATE: '2022-06-28',
				EVENT_NAME: 'Approval',
				ACTIONS: 493,
				USERS: 112,
				AMOUNT: 4.87484695689101e67
			},
			{ DATE: '2022-06-28', EVENT_NAME: 'Mint', ACTIONS: 41, USERS: 1, AMOUNT: 0.005088904707 },
			{
				DATE: '2022-06-29',
				EVENT_NAME: 'Approval',
				ACTIONS: 461,
				USERS: 129,
				AMOUNT: 4.46957464456041e67
			},
			{ DATE: '2022-06-29', EVENT_NAME: 'Mint', ACTIONS: 43, USERS: 1, AMOUNT: 0.01591255924 },
			{
				DATE: '2022-06-29',
				EVENT_NAME: 'Transfer',
				ACTIONS: 844,
				USERS: 171,
				AMOUNT: 0.05249422886
			},
			{ DATE: '2022-06-29', EVENT_NAME: 'Unwrap', ACTIONS: 9, USERS: 8, AMOUNT: 0.003423216814 },
			{ DATE: '2022-06-30', EVENT_NAME: 'Unwrap', ACTIONS: 7, USERS: 6, AMOUNT: 0.002858386941 },
			{ DATE: '2022-06-30', EVENT_NAME: 'Mint', ACTIONS: 32, USERS: 1, AMOUNT: 0.000934283321 },
			{
				DATE: '2022-06-30',
				EVENT_NAME: 'Approval',
				ACTIONS: 522,
				USERS: 130,
				AMOUNT: 5.25696085137416e67
			},
			{
				DATE: '2022-06-30',
				EVENT_NAME: 'Transfer',
				ACTIONS: 936,
				USERS: 169,
				AMOUNT: 0.02871468671
			},
			{ DATE: '2022-07-01', EVENT_NAME: 'Unwrap', ACTIONS: 1, USERS: 1, AMOUNT: 0.000032486641 },
			{
				DATE: '2022-07-01',
				EVENT_NAME: 'Transfer',
				ACTIONS: 642,
				USERS: 142,
				AMOUNT: 0.009406630382
			},
			{
				DATE: '2022-07-01',
				EVENT_NAME: 'Approval',
				ACTIONS: 339,
				USERS: 108,
				AMOUNT: 3.63587160205173e67
			},
			{ DATE: '2022-07-01', EVENT_NAME: 'Mint', ACTIONS: 14, USERS: 1, AMOUNT: 0.00012516295 },
			{
				DATE: '2022-07-02',
				EVENT_NAME: 'Transfer',
				ACTIONS: 369,
				USERS: 105,
				AMOUNT: 0.008308946914
			},
			{
				DATE: '2022-07-02',
				EVENT_NAME: 'Approval',
				ACTIONS: 227,
				USERS: 87,
				AMOUNT: 2.16531206873781e67
			},
			{ DATE: '2022-07-02', EVENT_NAME: 'Unwrap', ACTIONS: 3, USERS: 3, AMOUNT: 0.000011156125 },
			{ DATE: '2022-07-02', EVENT_NAME: 'Mint', ACTIONS: 13, USERS: 1, AMOUNT: 0.00152788478 },
			{
				DATE: '2022-07-03',
				EVENT_NAME: 'Transfer',
				ACTIONS: 474,
				USERS: 111,
				AMOUNT: 0.01996818783
			},
			{
				DATE: '2022-07-03',
				EVENT_NAME: 'Approval',
				ACTIONS: 276,
				USERS: 90,
				AMOUNT: 2.65163884353454e67
			},
			{ DATE: '2022-07-03', EVENT_NAME: 'Mint', ACTIONS: 15, USERS: 1, AMOUNT: 0.000407058606 },
			{ DATE: '2022-07-03', EVENT_NAME: 'Unwrap', ACTIONS: 1, USERS: 1, AMOUNT: 0.00130260953 },
			{ DATE: '2022-07-04', EVENT_NAME: 'Mint', ACTIONS: 15, USERS: 1, AMOUNT: 0.003581079443 },
			{ DATE: '2022-07-04', EVENT_NAME: 'Unwrap', ACTIONS: 1, USERS: 1, AMOUNT: 0.000001208487 },
			{
				DATE: '2022-07-04',
				EVENT_NAME: 'Approval',
				ACTIONS: 289,
				USERS: 85,
				AMOUNT: 2.77901014169559e67
			},
			{
				DATE: '2022-07-04',
				EVENT_NAME: 'Transfer',
				ACTIONS: 548,
				USERS: 108,
				AMOUNT: 0.01874574835
			},
			{
				DATE: '2022-07-05',
				EVENT_NAME: 'Transfer',
				ACTIONS: 681,
				USERS: 114,
				AMOUNT: 0.02535477225
			},
			{
				DATE: '2022-07-05',
				EVENT_NAME: 'Approval',
				ACTIONS: 383,
				USERS: 96,
				AMOUNT: 3.8442973626789e67
			},
			{ DATE: '2022-07-05', EVENT_NAME: 'Mint', ACTIONS: 20, USERS: 1, AMOUNT: 0.005910505811 },
			{ DATE: '2022-07-05', EVENT_NAME: 'Unwrap', ACTIONS: 2, USERS: 2, AMOUNT: 0.000004692635 },
			{
				DATE: '2022-07-06',
				EVENT_NAME: 'Approval',
				ACTIONS: 383,
				USERS: 101,
				AMOUNT: 4.00640628761114e67
			},
			{
				DATE: '2022-07-06',
				EVENT_NAME: 'Transfer',
				ACTIONS: 692,
				USERS: 131,
				AMOUNT: 0.01539728176
			},
			{ DATE: '2022-07-06', EVENT_NAME: 'Mint', ACTIONS: 34, USERS: 1, AMOUNT: 0.00072508484 },
			{
				DATE: '2022-07-07',
				EVENT_NAME: 'Transfer',
				ACTIONS: 668,
				USERS: 133,
				AMOUNT: 0.1316874815
			},
			{
				DATE: '2022-07-07',
				EVENT_NAME: 'Approval',
				ACTIONS: 364,
				USERS: 110,
				AMOUNT: 3.46218346819575e67
			},
			{ DATE: '2022-07-07', EVENT_NAME: 'Mint', ACTIONS: 19, USERS: 1, AMOUNT: 0.0333850299 },
			{ DATE: '2022-07-07', EVENT_NAME: 'Unwrap', ACTIONS: 3, USERS: 3, AMOUNT: 0.003102309135 },
			{
				DATE: '2022-07-08',
				EVENT_NAME: 'Approval',
				ACTIONS: 280,
				USERS: 91,
				AMOUNT: 2.69795567922947e67
			},
			{
				DATE: '2022-07-08',
				EVENT_NAME: 'Transfer',
				ACTIONS: 523,
				USERS: 123,
				AMOUNT: 0.03379315587
			},
			{ DATE: '2022-07-08', EVENT_NAME: 'Unwrap', ACTIONS: 5, USERS: 5, AMOUNT: 0.002571872442 },
			{ DATE: '2022-07-08', EVENT_NAME: 'Mint', ACTIONS: 23, USERS: 1, AMOUNT: 0.006204597997 },
			{
				DATE: '2022-07-09',
				EVENT_NAME: 'Approval',
				ACTIONS: 207,
				USERS: 66,
				AMOUNT: 1.88741105456825e67
			},
			{
				DATE: '2022-07-09',
				EVENT_NAME: 'Transfer',
				ACTIONS: 326,
				USERS: 86,
				AMOUNT: 0.01724246967
			},
			{ DATE: '2022-07-09', EVENT_NAME: 'Unwrap', ACTIONS: 2, USERS: 2, AMOUNT: 8.18752e-7 },
			{ DATE: '2022-07-09', EVENT_NAME: 'Mint', ACTIONS: 15, USERS: 1, AMOUNT: 0.000407283003 },
			{
				DATE: '2022-07-10',
				EVENT_NAME: 'Approval',
				ACTIONS: 201,
				USERS: 63,
				AMOUNT: 1.80635659210213e67
			},
			{
				DATE: '2022-07-10',
				EVENT_NAME: 'Transfer',
				ACTIONS: 308,
				USERS: 76,
				AMOUNT: 0.007731468892
			},
			{ DATE: '2022-07-10', EVENT_NAME: 'Unwrap', ACTIONS: 2, USERS: 2, AMOUNT: 0.001603130967 },
			{ DATE: '2022-07-10', EVENT_NAME: 'Mint', ACTIONS: 10, USERS: 1, AMOUNT: 0.000526839268 },
			{
				DATE: '2022-07-11',
				EVENT_NAME: 'Transfer',
				ACTIONS: 463,
				USERS: 110,
				AMOUNT: 0.03745718113
			},
			{
				DATE: '2022-07-11',
				EVENT_NAME: 'Approval',
				ACTIONS: 241,
				USERS: 88,
				AMOUNT: 2.33900020259379e67
			},
			{ DATE: '2022-07-11', EVENT_NAME: 'Mint', ACTIONS: 13, USERS: 1, AMOUNT: 0.01023705754 },
			{
				DATE: '2022-07-12',
				EVENT_NAME: 'Transfer',
				ACTIONS: 523,
				USERS: 132,
				AMOUNT: 0.0597025125
			},
			{
				DATE: '2022-07-12',
				EVENT_NAME: 'Approval',
				ACTIONS: 312,
				USERS: 99,
				AMOUNT: 2.90638143985664e67
			},
			{ DATE: '2022-07-12', EVENT_NAME: 'Unwrap', ACTIONS: 5, USERS: 4, AMOUNT: 0.007986527081 },
			{ DATE: '2022-07-12', EVENT_NAME: 'Mint', ACTIONS: 17, USERS: 1, AMOUNT: 0.000779335925 },
			{
				DATE: '2022-07-13',
				EVENT_NAME: 'Approval',
				ACTIONS: 301,
				USERS: 77,
				AMOUNT: 2.81374776846678e67
			},
			{
				DATE: '2022-07-13',
				EVENT_NAME: 'Transfer',
				ACTIONS: 588,
				USERS: 142,
				AMOUNT: 0.02193626989
			},
			{ DATE: '2022-07-13', EVENT_NAME: 'Mint', ACTIONS: 3, USERS: 1, AMOUNT: 0.000087884706 },
			{ DATE: '2022-07-13', EVENT_NAME: 'Unwrap', ACTIONS: 4, USERS: 2, AMOUNT: 0.000250935448 },
			{
				DATE: '2022-07-14',
				EVENT_NAME: 'Transfer',
				ACTIONS: 436,
				USERS: 112,
				AMOUNT: 0.03054521981
			},
			{
				DATE: '2022-07-14',
				EVENT_NAME: 'Approval',
				ACTIONS: 232,
				USERS: 66,
				AMOUNT: 2.03794077057677e67
			},
			{ DATE: '2022-07-14', EVENT_NAME: 'Mint', ACTIONS: 8, USERS: 1, AMOUNT: 0.003066062464 },
			{ DATE: '2022-07-14', EVENT_NAME: 'Unwrap', ACTIONS: 5, USERS: 3, AMOUNT: 0.001512435836 },
			{ DATE: '2022-07-15', EVENT_NAME: 'Mint', ACTIONS: 16, USERS: 1, AMOUNT: 0.01123483488 },
			{
				DATE: '2022-07-15',
				EVENT_NAME: 'Transfer',
				ACTIONS: 494,
				USERS: 114,
				AMOUNT: 0.04180380705
			},
			{
				DATE: '2022-07-15',
				EVENT_NAME: 'Approval',
				ACTIONS: 249,
				USERS: 82,
				AMOUNT: 2.18847048658528e67
			},
			{ DATE: '2022-07-15', EVENT_NAME: 'Unwrap', ACTIONS: 6, USERS: 4, AMOUNT: 0.00136538307 },
			{ DATE: '2022-07-16', EVENT_NAME: 'Mint', ACTIONS: 19, USERS: 1, AMOUNT: 0.002586701246 },
			{ DATE: '2022-07-16', EVENT_NAME: 'Unwrap', ACTIONS: 7, USERS: 3, AMOUNT: 0.004505724292 },
			{
				DATE: '2022-07-16',
				EVENT_NAME: 'Transfer',
				ACTIONS: 536,
				USERS: 142,
				AMOUNT: 0.02789339447
			},
			{
				DATE: '2022-07-16',
				EVENT_NAME: 'Approval',
				ACTIONS: 293,
				USERS: 85,
				AMOUNT: 2.59374279891588e67
			},
			{
				DATE: '2022-07-17',
				EVENT_NAME: 'Approval',
				ACTIONS: 296,
				USERS: 91,
				AMOUNT: 2.4895299186023e67
			},
			{ DATE: '2022-07-17', EVENT_NAME: 'Mint', ACTIONS: 12, USERS: 1, AMOUNT: 0.009108852065 },
			{
				DATE: '2022-07-17',
				EVENT_NAME: 'Transfer',
				ACTIONS: 524,
				USERS: 121,
				AMOUNT: 0.05394402279
			},
			{ DATE: '2022-07-17', EVENT_NAME: 'Unwrap', ACTIONS: 3, USERS: 3, AMOUNT: 0.002387753712 },
			{ DATE: '2022-07-18', EVENT_NAME: 'Mint', ACTIONS: 11, USERS: 1, AMOUNT: 0.03412386566 },
			{
				DATE: '2022-07-18',
				EVENT_NAME: 'Transfer',
				ACTIONS: 887,
				USERS: 187,
				AMOUNT: 0.07859883746
			},
			{
				DATE: '2022-07-18',
				EVENT_NAME: 'Approval',
				ACTIONS: 531,
				USERS: 134,
				AMOUNT: 4.42325780886548e67
			},
			{ DATE: '2022-07-18', EVENT_NAME: 'Unwrap', ACTIONS: 6, USERS: 5, AMOUNT: 0.001145720762 },
			{ DATE: '2022-07-19', EVENT_NAME: 'Unwrap', ACTIONS: 6, USERS: 5, AMOUNT: 0.004077367701 },
			{ DATE: '2022-07-19', EVENT_NAME: 'Mint', ACTIONS: 11, USERS: 1, AMOUNT: 0.001087417563 },
			{
				DATE: '2022-07-19',
				EVENT_NAME: 'Transfer',
				ACTIONS: 904,
				USERS: 200,
				AMOUNT: 0.08997247626
			},
			{
				DATE: '2022-07-19',
				EVENT_NAME: 'Approval',
				ACTIONS: 453,
				USERS: 122,
				AMOUNT: 3.83271815375517e67
			},
			{
				DATE: '2022-07-20',
				EVENT_NAME: 'Transfer',
				ACTIONS: 990,
				USERS: 168,
				AMOUNT: 0.02988818059
			},
			{
				DATE: '2022-07-20',
				EVENT_NAME: 'Approval',
				ACTIONS: 564,
				USERS: 119,
				AMOUNT: 4.7243172408825e67
			},
			{ DATE: '2022-07-20', EVENT_NAME: 'Unwrap', ACTIONS: 5, USERS: 5, AMOUNT: 0.001144859513 },
			{ DATE: '2022-07-20', EVENT_NAME: 'Mint', ACTIONS: 12, USERS: 1, AMOUNT: 0.001837386396 },
			{ DATE: '2022-07-21', EVENT_NAME: 'Unwrap', ACTIONS: 3, USERS: 3, AMOUNT: 0.001198991534 },
			{
				DATE: '2022-07-21',
				EVENT_NAME: 'Approval',
				ACTIONS: 345,
				USERS: 90,
				AMOUNT: 3.24217849864485e67
			},
			{
				DATE: '2022-07-21',
				EVENT_NAME: 'Transfer',
				ACTIONS: 589,
				USERS: 148,
				AMOUNT: 0.01711637855
			},
			{ DATE: '2022-07-21', EVENT_NAME: 'Mint', ACTIONS: 4, USERS: 1, AMOUNT: 0.000006057321 },
			{ DATE: '2022-07-22', EVENT_NAME: 'Mint', ACTIONS: 15, USERS: 1, AMOUNT: 0.000359571408 },
			{
				DATE: '2022-07-22',
				EVENT_NAME: 'Transfer',
				ACTIONS: 582,
				USERS: 109,
				AMOUNT: 0.01546500048
			},
			{
				DATE: '2022-07-22',
				EVENT_NAME: 'Approval',
				ACTIONS: 334,
				USERS: 88,
				AMOUNT: 3.04533194694142e67
			},
			{ DATE: '2022-07-22', EVENT_NAME: 'Unwrap', ACTIONS: 4, USERS: 4, AMOUNT: 0.000416607776 },
			{
				DATE: '2022-07-23',
				EVENT_NAME: 'Transfer',
				ACTIONS: 418,
				USERS: 99,
				AMOUNT: 0.01275455962
			},
			{
				DATE: '2022-07-23',
				EVENT_NAME: 'Approval',
				ACTIONS: 253,
				USERS: 70,
				AMOUNT: 2.0147823527293e67
			},
			{ DATE: '2022-07-23', EVENT_NAME: 'Mint', ACTIONS: 25, USERS: 1, AMOUNT: 0.000707984949 },
			{
				DATE: '2022-07-24',
				EVENT_NAME: 'Approval',
				ACTIONS: 273,
				USERS: 81,
				AMOUNT: 2.30426257582259e67
			},
			{
				DATE: '2022-07-24',
				EVENT_NAME: 'Transfer',
				ACTIONS: 428,
				USERS: 113,
				AMOUNT: 0.02606776476
			},
			{ DATE: '2022-07-24', EVENT_NAME: 'Mint', ACTIONS: 20, USERS: 1, AMOUNT: 0.0050699992 },
			{
				DATE: '2022-07-25',
				EVENT_NAME: 'Transfer',
				ACTIONS: 628,
				USERS: 131,
				AMOUNT: 0.01560290988
			},
			{ DATE: '2022-07-25', EVENT_NAME: 'Mint', ACTIONS: 10, USERS: 1, AMOUNT: 0.000044204313 },
			{
				DATE: '2022-07-25',
				EVENT_NAME: 'Approval',
				ACTIONS: 408,
				USERS: 97,
				AMOUNT: 3.02217352909395e67
			},
			{ DATE: '2022-07-25', EVENT_NAME: 'Unwrap', ACTIONS: 2, USERS: 2, AMOUNT: 0.000028184379 },
			{ DATE: '2022-07-26', EVENT_NAME: 'Unwrap', ACTIONS: 7, USERS: 6, AMOUNT: 0.003400170963 },
			{ DATE: '2022-07-26', EVENT_NAME: 'Mint', ACTIONS: 24, USERS: 1, AMOUNT: 0.000015767731 },
			{
				DATE: '2022-07-26',
				EVENT_NAME: 'Transfer',
				ACTIONS: 557,
				USERS: 146,
				AMOUNT: 0.01978871205
			},
			{
				DATE: '2022-07-26',
				EVENT_NAME: 'Approval',
				ACTIONS: 376,
				USERS: 110,
				AMOUNT: 2.58216358999215e67
			},
			{ DATE: '2022-07-27', EVENT_NAME: 'Unwrap', ACTIONS: 3, USERS: 2, AMOUNT: 0.00065077874 },
			{
				DATE: '2022-07-27',
				EVENT_NAME: 'Approval',
				ACTIONS: 332,
				USERS: 95,
				AMOUNT: 3.21902008079739e67
			},
			{
				DATE: '2022-07-27',
				EVENT_NAME: 'Transfer',
				ACTIONS: 625,
				USERS: 147,
				AMOUNT: 0.1696018057
			},
			{ DATE: '2022-07-27', EVENT_NAME: 'Mint', ACTIONS: 24, USERS: 1, AMOUNT: 0.03152998829 },
			{ DATE: '2022-07-28', EVENT_NAME: 'Mint', ACTIONS: 13, USERS: 1, AMOUNT: 0.000779839061 },
			{
				DATE: '2022-07-28',
				EVENT_NAME: 'Approval',
				ACTIONS: 243,
				USERS: 70,
				AMOUNT: 2.39689624721245e67
			},
			{
				DATE: '2022-07-28',
				EVENT_NAME: 'Transfer',
				ACTIONS: 504,
				USERS: 113,
				AMOUNT: 0.02773450843
			},
			{ DATE: '2022-07-28', EVENT_NAME: 'Unwrap', ACTIONS: 5, USERS: 2, AMOUNT: 0.000344971531 },
			{ DATE: '2022-07-29', EVENT_NAME: 'Unwrap', ACTIONS: 2, USERS: 2, AMOUNT: 0.000010303626 },
			{ DATE: '2022-07-29', EVENT_NAME: 'Mint', ACTIONS: 14, USERS: 1, AMOUNT: 0.000066882296 },
			{
				DATE: '2022-07-29',
				EVENT_NAME: 'Approval',
				ACTIONS: 401,
				USERS: 101,
				AMOUNT: 3.53165872173814e67
			},
			{
				DATE: '2022-07-29',
				EVENT_NAME: 'Transfer',
				ACTIONS: 718,
				USERS: 139,
				AMOUNT: 0.02180610134
			},
			{
				DATE: '2022-07-30',
				EVENT_NAME: 'Approval',
				ACTIONS: 311,
				USERS: 86,
				AMOUNT: 2.95269827555156e67
			},
			{
				DATE: '2022-07-30',
				EVENT_NAME: 'Transfer',
				ACTIONS: 525,
				USERS: 108,
				AMOUNT: 0.01855822276
			},
			{ DATE: '2022-07-30', EVENT_NAME: 'Mint', ACTIONS: 15, USERS: 1, AMOUNT: 0.000135473253 },
			{ DATE: '2022-07-31', EVENT_NAME: 'Mint', ACTIONS: 5, USERS: 1, AMOUNT: 0.00010184361 },
			{
				DATE: '2022-07-31',
				EVENT_NAME: 'Approval',
				ACTIONS: 235,
				USERS: 79,
				AMOUNT: 2.17689127766154e67
			},
			{ DATE: '2022-07-31', EVENT_NAME: 'Unwrap', ACTIONS: 1, USERS: 1, AMOUNT: 0.000027 },
			{
				DATE: '2022-07-31',
				EVENT_NAME: 'Transfer',
				ACTIONS: 436,
				USERS: 105,
				AMOUNT: 0.008692329291
			},
			{
				DATE: '2022-08-01',
				EVENT_NAME: 'Approval',
				ACTIONS: 280,
				USERS: 83,
				AMOUNT: 2.58216358999215e67
			},
			{
				DATE: '2022-08-01',
				EVENT_NAME: 'Transfer',
				ACTIONS: 480,
				USERS: 106,
				AMOUNT: 0.02431185023
			},
			{ DATE: '2022-08-01', EVENT_NAME: 'Unwrap', ACTIONS: 6, USERS: 3, AMOUNT: 0.000138135629 },
			{ DATE: '2022-08-01', EVENT_NAME: 'Mint', ACTIONS: 11, USERS: 1, AMOUNT: 0.001291535475 },
			{ DATE: '2022-08-02', EVENT_NAME: 'Mint', ACTIONS: 4, USERS: 1, AMOUNT: 0.00000903931 },
			{
				DATE: '2022-08-02',
				EVENT_NAME: 'Transfer',
				ACTIONS: 512,
				USERS: 135,
				AMOUNT: 0.01489628929
			},
			{
				DATE: '2022-08-02',
				EVENT_NAME: 'Approval',
				ACTIONS: 282,
				USERS: 89,
				AMOUNT: 2.43163387398364e67
			},
			{ DATE: '2022-08-02', EVENT_NAME: 'Unwrap', ACTIONS: 6, USERS: 6, AMOUNT: 0.000057151594 },
			{
				DATE: '2022-08-03',
				EVENT_NAME: 'Transfer',
				ACTIONS: 360,
				USERS: 100,
				AMOUNT: 0.08250412976
			},
			{ DATE: '2022-08-03', EVENT_NAME: 'Mint', ACTIONS: 7, USERS: 1, AMOUNT: 0.01506592467 },
			{ DATE: '2022-08-03', EVENT_NAME: 'Unwrap', ACTIONS: 2, USERS: 1, AMOUNT: 0.01310115459 },
			{
				DATE: '2022-08-03',
				EVENT_NAME: 'Approval',
				ACTIONS: 207,
				USERS: 72,
				AMOUNT: 1.84109421887333e67
			},
			{
				DATE: '2022-08-04',
				EVENT_NAME: 'Approval',
				ACTIONS: 253,
				USERS: 89,
				AMOUNT: 2.38531703828871e67
			},
			{
				DATE: '2022-08-04',
				EVENT_NAME: 'Transfer',
				ACTIONS: 421,
				USERS: 113,
				AMOUNT: 0.0789854623
			},
			{ DATE: '2022-08-04', EVENT_NAME: 'Mint', ACTIONS: 5, USERS: 1, AMOUNT: 0.00000630691 },
			{ DATE: '2022-08-04', EVENT_NAME: 'Unwrap', ACTIONS: 3, USERS: 2, AMOUNT: 0.00071790569 },
			{
				DATE: '2022-08-05',
				EVENT_NAME: 'Transfer',
				ACTIONS: 392,
				USERS: 146,
				AMOUNT: 0.02397782091
			},
			{ DATE: '2022-08-05', EVENT_NAME: 'Unwrap', ACTIONS: 3, USERS: 3, AMOUNT: 0.000006704716 },
			{ DATE: '2022-08-05', EVENT_NAME: 'Mint', ACTIONS: 6, USERS: 1, AMOUNT: 0.009061815584 },
			{
				DATE: '2022-08-05',
				EVENT_NAME: 'Approval',
				ACTIONS: 216,
				USERS: 87,
				AMOUNT: 1.94530709918691e67
			},
			{
				DATE: '2022-08-06',
				EVENT_NAME: 'Approval',
				ACTIONS: 218,
				USERS: 73,
				AMOUNT: 2.09583681519542e67
			},
			{
				DATE: '2022-08-06',
				EVENT_NAME: 'Transfer',
				ACTIONS: 492,
				USERS: 156,
				AMOUNT: 0.01349140071
			},
			{ DATE: '2022-08-06', EVENT_NAME: 'Unwrap', ACTIONS: 6, USERS: 5, AMOUNT: 0.000223988516 },
			{ DATE: '2022-08-06', EVENT_NAME: 'Mint', ACTIONS: 7, USERS: 1, AMOUNT: 0.000012780898 },
			{
				DATE: '2022-08-07',
				EVENT_NAME: 'Approval',
				ACTIONS: 261,
				USERS: 93,
				AMOUNT: 2.40847545613618e67
			},
			{
				DATE: '2022-08-07',
				EVENT_NAME: 'Transfer',
				ACTIONS: 513,
				USERS: 147,
				AMOUNT: 0.05857011136
			},
			{ DATE: '2022-08-07', EVENT_NAME: 'Mint', ACTIONS: 9, USERS: 1, AMOUNT: 0.000066505982 },
			{ DATE: '2022-08-08', EVENT_NAME: 'Mint', ACTIONS: 10, USERS: 1, AMOUNT: 0.000038079201 },
			{
				DATE: '2022-08-08',
				EVENT_NAME: 'Approval',
				ACTIONS: 365,
				USERS: 123,
				AMOUNT: 2.87164381308544e67
			},
			{
				DATE: '2022-08-08',
				EVENT_NAME: 'Transfer',
				ACTIONS: 710,
				USERS: 202,
				AMOUNT: 0.03957272662
			},
			{ DATE: '2022-08-08', EVENT_NAME: 'Unwrap', ACTIONS: 6, USERS: 5, AMOUNT: 0.005955957022 },
			{
				DATE: '2022-08-09',
				EVENT_NAME: 'Transfer',
				ACTIONS: 609,
				USERS: 127,
				AMOUNT: 0.03964053247
			},
			{ DATE: '2022-08-09', EVENT_NAME: 'Unwrap', ACTIONS: 2, USERS: 2, AMOUNT: 0.000012422201 },
			{ DATE: '2022-08-09', EVENT_NAME: 'Mint', ACTIONS: 11, USERS: 1, AMOUNT: 0.000089593593 },
			{
				DATE: '2022-08-09',
				EVENT_NAME: 'Approval',
				ACTIONS: 339,
				USERS: 84,
				AMOUNT: 3.23059928972112e67
			},
			{
				DATE: '2022-08-10',
				EVENT_NAME: 'Transfer',
				ACTIONS: 565,
				USERS: 156,
				AMOUNT: 0.008808864727
			},
			{ DATE: '2022-08-10', EVENT_NAME: 'Unwrap', ACTIONS: 6, USERS: 5, AMOUNT: 0.001710635941 },
			{
				DATE: '2022-08-10',
				EVENT_NAME: 'Approval',
				ACTIONS: 313,
				USERS: 98,
				AMOUNT: 2.69795567922947e67
			},
			{ DATE: '2022-08-10', EVENT_NAME: 'Mint', ACTIONS: 9, USERS: 1, AMOUNT: 0.000060643467 },
			{ DATE: '2022-08-11', EVENT_NAME: 'Unwrap', ACTIONS: 2, USERS: 2, AMOUNT: 4.92094e-7 },
			{ DATE: '2022-08-11', EVENT_NAME: 'Mint', ACTIONS: 11, USERS: 1, AMOUNT: 0.001220805593 },
			{
				DATE: '2022-08-11',
				EVENT_NAME: 'Transfer',
				ACTIONS: 541,
				USERS: 147,
				AMOUNT: 0.005585238286
			},
			{
				DATE: '2022-08-11',
				EVENT_NAME: 'Approval',
				ACTIONS: 293,
				USERS: 108,
				AMOUNT: 2.72111409707693e67
			},
			{
				DATE: '2022-08-12',
				EVENT_NAME: 'Transfer',
				ACTIONS: 431,
				USERS: 136,
				AMOUNT: 0.01152831292
			},
			{ DATE: '2022-08-12', EVENT_NAME: 'Unwrap', ACTIONS: 3, USERS: 3, AMOUNT: 0.001087542877 },
			{ DATE: '2022-08-12', EVENT_NAME: 'Mint', ACTIONS: 14, USERS: 1, AMOUNT: 0.000741058005 },
			{
				DATE: '2022-08-12',
				EVENT_NAME: 'Approval',
				ACTIONS: 232,
				USERS: 88,
				AMOUNT: 1.91056947241572e67
			},
			{
				DATE: '2022-08-13',
				EVENT_NAME: 'Transfer',
				ACTIONS: 452,
				USERS: 135,
				AMOUNT: 0.02396424502
			},
			{
				DATE: '2022-08-13',
				EVENT_NAME: 'Approval',
				ACTIONS: 277,
				USERS: 110,
				AMOUNT: 2.35057941151752e67
			},
			{ DATE: '2022-08-13', EVENT_NAME: 'Mint', ACTIONS: 7, USERS: 1, AMOUNT: 0.000072987567 },
			{
				DATE: '2022-08-14',
				EVENT_NAME: 'Approval',
				ACTIONS: 208,
				USERS: 79,
				AMOUNT: 1.5747724136275e67
			},
			{
				DATE: '2022-08-14',
				EVENT_NAME: 'Transfer',
				ACTIONS: 324,
				USERS: 101,
				AMOUNT: 0.009910360515
			},
			{ DATE: '2022-08-14', EVENT_NAME: 'Mint', ACTIONS: 2, USERS: 1, AMOUNT: 5.8686e-7 },
			{ DATE: '2022-08-15', EVENT_NAME: 'Mint', ACTIONS: 9, USERS: 1, AMOUNT: 0.000684898534 },
			{ DATE: '2022-08-15', EVENT_NAME: 'Unwrap', ACTIONS: 4, USERS: 3, AMOUNT: 0.00002889096 },
			{
				DATE: '2022-08-15',
				EVENT_NAME: 'Transfer',
				ACTIONS: 408,
				USERS: 106,
				AMOUNT: 0.005605696785
			},
			{
				DATE: '2022-08-15',
				EVENT_NAME: 'Approval',
				ACTIONS: 233,
				USERS: 81,
				AMOUNT: 1.99162393488184e67
			},
			{ DATE: '2022-08-16', EVENT_NAME: 'Mint', ACTIONS: 5, USERS: 1, AMOUNT: 0.000500982806 },
			{
				DATE: '2022-08-16',
				EVENT_NAME: 'Transfer',
				ACTIONS: 466,
				USERS: 117,
				AMOUNT: 0.01219315813
			},
			{
				DATE: '2022-08-16',
				EVENT_NAME: 'Approval',
				ACTIONS: 256,
				USERS: 74,
				AMOUNT: 1.88741105456825e67
			},
			{ DATE: '2022-08-16', EVENT_NAME: 'Unwrap', ACTIONS: 1, USERS: 1, AMOUNT: 5.20724e-7 },
			{
				DATE: '2022-08-17',
				EVENT_NAME: 'Transfer',
				ACTIONS: 430,
				USERS: 122,
				AMOUNT: 0.00810599523
			},
			{
				DATE: '2022-08-17',
				EVENT_NAME: 'Approval',
				ACTIONS: 248,
				USERS: 88,
				AMOUNT: 1.76003975640721e67
			},
			{ DATE: '2022-08-17', EVENT_NAME: 'Mint', ACTIONS: 5, USERS: 1, AMOUNT: 0.000023193889 },
			{ DATE: '2022-08-18', EVENT_NAME: 'Mint', ACTIONS: 5, USERS: 1, AMOUNT: 0.000011299257 },
			{
				DATE: '2022-08-18',
				EVENT_NAME: 'Approval',
				ACTIONS: 210,
				USERS: 79,
				AMOUNT: 1.41266348869526e67
			},
			{
				DATE: '2022-08-18',
				EVENT_NAME: 'Transfer',
				ACTIONS: 318,
				USERS: 104,
				AMOUNT: 0.005384688892
			},
			{ DATE: '2022-08-18', EVENT_NAME: 'Unwrap', ACTIONS: 5, USERS: 4, AMOUNT: 0.00017537882 },
			{
				DATE: '2022-08-19',
				EVENT_NAME: 'Transfer',
				ACTIONS: 791,
				USERS: 186,
				AMOUNT: 0.01082496846
			},
			{ DATE: '2022-08-19', EVENT_NAME: 'Mint', ACTIONS: 8, USERS: 1, AMOUNT: 0.000126141005 },
			{
				DATE: '2022-08-19',
				EVENT_NAME: 'Approval',
				ACTIONS: 426,
				USERS: 111,
				AMOUNT: 3.28849533433978e67
			},
			{ DATE: '2022-08-20', EVENT_NAME: 'Unwrap', ACTIONS: 3, USERS: 3, AMOUNT: 0.0141597261 },
			{
				DATE: '2022-08-20',
				EVENT_NAME: 'Approval',
				ACTIONS: 231,
				USERS: 72,
				AMOUNT: 2.17689127766154e67
			},
			{ DATE: '2022-08-20', EVENT_NAME: 'Mint', ACTIONS: 6, USERS: 1, AMOUNT: 0.000117447146 },
			{
				DATE: '2022-08-20',
				EVENT_NAME: 'Transfer',
				ACTIONS: 418,
				USERS: 95,
				AMOUNT: 0.0536222553
			},
			{ DATE: '2022-08-21', EVENT_NAME: 'Unwrap', ACTIONS: 1, USERS: 1, AMOUNT: 0.000211491229 },
			{
				DATE: '2022-08-21',
				EVENT_NAME: 'Transfer',
				ACTIONS: 352,
				USERS: 96,
				AMOUNT: 0.003723340372
			},
			{ DATE: '2022-08-21', EVENT_NAME: 'Mint', ACTIONS: 1, USERS: 1, AMOUNT: 0.000251273362 },
			{
				DATE: '2022-08-21',
				EVENT_NAME: 'Approval',
				ACTIONS: 214,
				USERS: 61,
				AMOUNT: 1.84109421887333e67
			},
			{
				DATE: '2022-08-22',
				EVENT_NAME: 'Transfer',
				ACTIONS: 401,
				USERS: 113,
				AMOUNT: 0.01338441398
			},
			{ DATE: '2022-08-22', EVENT_NAME: 'Mint', ACTIONS: 3, USERS: 1, AMOUNT: 0.00078030383 },
			{ DATE: '2022-08-22', EVENT_NAME: 'Unwrap', ACTIONS: 1, USERS: 1, AMOUNT: 0.000779036767 },
			{
				DATE: '2022-08-22',
				EVENT_NAME: 'Approval',
				ACTIONS: 207,
				USERS: 67,
				AMOUNT: 1.91056947241572e67
			},
			{ DATE: '2022-08-23', EVENT_NAME: 'Mint', ACTIONS: 6, USERS: 1, AMOUNT: 0.000272206943 },
			{
				DATE: '2022-08-23',
				EVENT_NAME: 'Approval',
				ACTIONS: 239,
				USERS: 74,
				AMOUNT: 1.96846551703438e67
			},
			{
				DATE: '2022-08-23',
				EVENT_NAME: 'Transfer',
				ACTIONS: 413,
				USERS: 109,
				AMOUNT: 0.02289283375
			},
			{ DATE: '2022-08-23', EVENT_NAME: 'Unwrap', ACTIONS: 1, USERS: 1, AMOUNT: 4.3692e-7 },
			{ DATE: '2022-08-24', EVENT_NAME: 'Mint', ACTIONS: 6, USERS: 1, AMOUNT: 0.000022848982 },
			{
				DATE: '2022-08-24',
				EVENT_NAME: 'Approval',
				ACTIONS: 189,
				USERS: 55,
				AMOUNT: 1.51687636900884e67
			},
			{
				DATE: '2022-08-24',
				EVENT_NAME: 'Transfer',
				ACTIONS: 304,
				USERS: 71,
				AMOUNT: 0.003141195959
			},
			{
				DATE: '2022-08-25',
				EVENT_NAME: 'Transfer',
				ACTIONS: 295,
				USERS: 83,
				AMOUNT: 0.02168762036
			},
			{ DATE: '2022-08-25', EVENT_NAME: 'Mint', ACTIONS: 9, USERS: 1, AMOUNT: 0.005821135976 },
			{ DATE: '2022-08-25', EVENT_NAME: 'Unwrap', ACTIONS: 1, USERS: 1, AMOUNT: 0.000001106534 },
			{
				DATE: '2022-08-25',
				EVENT_NAME: 'Approval',
				ACTIONS: 166,
				USERS: 64,
				AMOUNT: 1.50529716008511e67
			},
			{
				DATE: '2022-08-26',
				EVENT_NAME: 'Approval',
				ACTIONS: 319,
				USERS: 108,
				AMOUNT: 2.90638143985664e67
			},
			{ DATE: '2022-08-26', EVENT_NAME: 'Mint', ACTIONS: 7, USERS: 1, AMOUNT: 0.000511502185 },
			{
				DATE: '2022-08-26',
				EVENT_NAME: 'Transfer',
				ACTIONS: 631,
				USERS: 147,
				AMOUNT: 0.02535092523
			},
			{ DATE: '2022-08-26', EVENT_NAME: 'Unwrap', ACTIONS: 3, USERS: 3, AMOUNT: 0.000053130329 },
			{
				DATE: '2022-08-27',
				EVENT_NAME: 'Transfer',
				ACTIONS: 444,
				USERS: 116,
				AMOUNT: 0.01977580849
			},
			{ DATE: '2022-08-27', EVENT_NAME: 'Mint', ACTIONS: 5, USERS: 1, AMOUNT: 0.00010971504 },
			{ DATE: '2022-08-27', EVENT_NAME: 'Unwrap', ACTIONS: 4, USERS: 4, AMOUNT: 0.000093873522 },
			{
				DATE: '2022-08-27',
				EVENT_NAME: 'Approval',
				ACTIONS: 236,
				USERS: 86,
				AMOUNT: 2.15373285981408e67
			},
			{ DATE: '2022-08-28', EVENT_NAME: 'Unwrap', ACTIONS: 8, USERS: 5, AMOUNT: 0.000212055605 },
			{ DATE: '2022-08-28', EVENT_NAME: 'Mint', ACTIONS: 6, USERS: 1, AMOUNT: 0.01005105405 },
			{
				DATE: '2022-08-28',
				EVENT_NAME: 'Transfer',
				ACTIONS: 687,
				USERS: 138,
				AMOUNT: 0.03767892326
			},
			{
				DATE: '2022-08-28',
				EVENT_NAME: 'Approval',
				ACTIONS: 326,
				USERS: 92,
				AMOUNT: 3.09164878263634e67
			},
			{ DATE: '2022-08-29', EVENT_NAME: 'Mint', ACTIONS: 2, USERS: 1, AMOUNT: 0.000002714107 },
			{ DATE: '2022-08-29', EVENT_NAME: 'Unwrap', ACTIONS: 9, USERS: 7, AMOUNT: 0.007773729763 },
			{
				DATE: '2022-08-29',
				EVENT_NAME: 'Approval',
				ACTIONS: 361,
				USERS: 107,
				AMOUNT: 3.12638640940754e67
			},
			{
				DATE: '2022-08-29',
				EVENT_NAME: 'Transfer',
				ACTIONS: 696,
				USERS: 172,
				AMOUNT: 0.07740556008
			},
			{
				DATE: '2022-08-30',
				EVENT_NAME: 'Approval',
				ACTIONS: 346,
				USERS: 91,
				AMOUNT: 3.17270324510246e67
			},
			{
				DATE: '2022-08-30',
				EVENT_NAME: 'Transfer',
				ACTIONS: 690,
				USERS: 141,
				AMOUNT: 0.4032084062
			},
			{ DATE: '2022-08-30', EVENT_NAME: 'Unwrap', ACTIONS: 8, USERS: 4, AMOUNT: 0.0536610098 },
			{ DATE: '2022-08-30', EVENT_NAME: 'Mint', ACTIONS: 7, USERS: 1, AMOUNT: 0.000231106768 },
			{
				DATE: '2022-08-31',
				EVENT_NAME: 'Transfer',
				ACTIONS: 564,
				USERS: 139,
				AMOUNT: 0.1555659616
			},
			{ DATE: '2022-08-31', EVENT_NAME: 'Unwrap', ACTIONS: 6, USERS: 6, AMOUNT: 0.002838078304 },
			{
				DATE: '2022-08-31',
				EVENT_NAME: 'Approval',
				ACTIONS: 313,
				USERS: 101,
				AMOUNT: 2.38531703828871e67
			},
			{ DATE: '2022-08-31', EVENT_NAME: 'Mint', ACTIONS: 10, USERS: 1, AMOUNT: 0.007272282169 },
			{
				DATE: '2022-09-01',
				EVENT_NAME: 'Transfer',
				ACTIONS: 507,
				USERS: 111,
				AMOUNT: 0.07148171585
			},
			{
				DATE: '2022-09-01',
				EVENT_NAME: 'Approval',
				ACTIONS: 243,
				USERS: 77,
				AMOUNT: 2.31584178474632e67
			},
			{ DATE: '2022-09-01', EVENT_NAME: 'Mint', ACTIONS: 9, USERS: 1, AMOUNT: 0.01643313735 },
			{ DATE: '2022-09-01', EVENT_NAME: 'Unwrap', ACTIONS: 2, USERS: 2, AMOUNT: 0.000015202867 },
			{
				DATE: '2022-09-02',
				EVENT_NAME: 'Transfer',
				ACTIONS: 388,
				USERS: 120,
				AMOUNT: 0.06187879882
			},
			{
				DATE: '2022-09-02',
				EVENT_NAME: 'Approval',
				ACTIONS: 182,
				USERS: 80,
				AMOUNT: 1.66740608501735e67
			},
			{ DATE: '2022-09-02', EVENT_NAME: 'Unwrap', ACTIONS: 1, USERS: 1, AMOUNT: 0.0015 },
			{ DATE: '2022-09-02', EVENT_NAME: 'Mint', ACTIONS: 2, USERS: 1, AMOUNT: 0.000001924425 },
			{ DATE: '2022-09-03', EVENT_NAME: 'Mint', ACTIONS: 6, USERS: 1, AMOUNT: 0.004634534194 },
			{
				DATE: '2022-09-03',
				EVENT_NAME: 'Transfer',
				ACTIONS: 160,
				USERS: 57,
				AMOUNT: 0.02420138835
			},
			{
				DATE: '2022-09-03',
				EVENT_NAME: 'Approval',
				ACTIONS: 94,
				USERS: 43,
				AMOUNT: 8.22123833584945e66
			},
			{
				DATE: '2022-09-04',
				EVENT_NAME: 'Transfer',
				ACTIONS: 259,
				USERS: 88,
				AMOUNT: 0.01458255012
			},
			{ DATE: '2022-09-04', EVENT_NAME: 'Mint', ACTIONS: 1, USERS: 1, AMOUNT: 0.000999983089 },
			{
				DATE: '2022-09-04',
				EVENT_NAME: 'Approval',
				ACTIONS: 149,
				USERS: 65,
				AMOUNT: 1.26213377268675e67
			},
			{ DATE: '2022-09-04', EVENT_NAME: 'Unwrap', ACTIONS: 1, USERS: 1, AMOUNT: 4.82564e-7 },
			{ DATE: '2022-09-05', EVENT_NAME: 'Unwrap', ACTIONS: 8, USERS: 4, AMOUNT: 0.000222073433 },
			{
				DATE: '2022-09-05',
				EVENT_NAME: 'Approval',
				ACTIONS: 145,
				USERS: 57,
				AMOUNT: 1.29687139945794e67
			},
			{
				DATE: '2022-09-05',
				EVENT_NAME: 'Transfer',
				ACTIONS: 278,
				USERS: 84,
				AMOUNT: 0.03888117504
			},
			{ DATE: '2022-09-05', EVENT_NAME: 'Mint', ACTIONS: 2, USERS: 1, AMOUNT: 0.000881962853 },
			{
				DATE: '2022-09-06',
				EVENT_NAME: 'Transfer',
				ACTIONS: 656,
				USERS: 161,
				AMOUNT: 0.02654393404
			},
			{
				DATE: '2022-09-06',
				EVENT_NAME: 'Approval',
				ACTIONS: 256,
				USERS: 91,
				AMOUNT: 1.99162393488184e67
			},
			{ DATE: '2022-09-06', EVENT_NAME: 'Mint', ACTIONS: 3, USERS: 1, AMOUNT: 0.000003108117 },
			{
				DATE: '2022-09-07',
				EVENT_NAME: 'Transfer',
				ACTIONS: 434,
				USERS: 122,
				AMOUNT: 0.006790853583
			},
			{
				DATE: '2022-09-07',
				EVENT_NAME: 'Approval',
				ACTIONS: 212,
				USERS: 84,
				AMOUNT: 1.7947773831784e67
			},
			{ DATE: '2022-09-07', EVENT_NAME: 'Unwrap', ACTIONS: 4, USERS: 3, AMOUNT: 0.000220609754 },
			{ DATE: '2022-09-07', EVENT_NAME: 'Mint', ACTIONS: 4, USERS: 1, AMOUNT: 0.000006986568 },
			{
				DATE: '2022-09-08',
				EVENT_NAME: 'Approval',
				ACTIONS: 205,
				USERS: 80,
				AMOUNT: 1.67898529394108e67
			},
			{ DATE: '2022-09-08', EVENT_NAME: 'Unwrap', ACTIONS: 2, USERS: 2, AMOUNT: 0.03005060853 },
			{
				DATE: '2022-09-08',
				EVENT_NAME: 'Transfer',
				ACTIONS: 509,
				USERS: 119,
				AMOUNT: 0.1377170773
			},
			{ DATE: '2022-09-08', EVENT_NAME: 'Mint', ACTIONS: 7, USERS: 1, AMOUNT: 0.000460269257 },
			{
				DATE: '2022-09-09',
				EVENT_NAME: 'Approval',
				ACTIONS: 264,
				USERS: 92,
				AMOUNT: 2.37373782936498e67
			},
			{ DATE: '2022-09-09', EVENT_NAME: 'Mint', ACTIONS: 7, USERS: 1, AMOUNT: 0.000187255942 },
			{
				DATE: '2022-09-09',
				EVENT_NAME: 'Transfer',
				ACTIONS: 718,
				USERS: 143,
				AMOUNT: 0.08095617525
			},
			{ DATE: '2022-09-09', EVENT_NAME: 'Unwrap', ACTIONS: 8, USERS: 6, AMOUNT: 0.008533304143 },
			{
				DATE: '2022-09-10',
				EVENT_NAME: 'Transfer',
				ACTIONS: 510,
				USERS: 100,
				AMOUNT: 0.004564200914
			},
			{ DATE: '2022-09-10', EVENT_NAME: 'Mint', ACTIONS: 7, USERS: 1, AMOUNT: 0.000059144939 },
			{ DATE: '2022-09-10', EVENT_NAME: 'Unwrap', ACTIONS: 2, USERS: 2, AMOUNT: 0.000402352982 },
			{
				DATE: '2022-09-10',
				EVENT_NAME: 'Approval',
				ACTIONS: 179,
				USERS: 64,
				AMOUNT: 1.64424766716989e67
			},
			{ DATE: '2022-09-11', EVENT_NAME: 'Mint', ACTIONS: 7, USERS: 1, AMOUNT: 0.000556559331 },
			{
				DATE: '2022-09-11',
				EVENT_NAME: 'Approval',
				ACTIONS: 185,
				USERS: 72,
				AMOUNT: 1.50529716008511e67
			},
			{
				DATE: '2022-09-11',
				EVENT_NAME: 'Transfer',
				ACTIONS: 571,
				USERS: 102,
				AMOUNT: 0.0175235418
			},
			{ DATE: '2022-09-11', EVENT_NAME: 'Unwrap', ACTIONS: 5, USERS: 3, AMOUNT: 0.000136138903 },
			{ DATE: '2022-09-12', EVENT_NAME: 'Unwrap', ACTIONS: 4, USERS: 3, AMOUNT: 0.000714699407 },
			{
				DATE: '2022-09-12',
				EVENT_NAME: 'Approval',
				ACTIONS: 235,
				USERS: 84,
				AMOUNT: 1.86425263672079e67
			},
			{
				DATE: '2022-09-12',
				EVENT_NAME: 'Transfer',
				ACTIONS: 895,
				USERS: 139,
				AMOUNT: 0.01381251256
			},
			{ DATE: '2022-09-12', EVENT_NAME: 'Mint', ACTIONS: 4, USERS: 1, AMOUNT: 0.000230132573 },
			{
				DATE: '2022-09-13',
				EVENT_NAME: 'Approval',
				ACTIONS: 326,
				USERS: 88,
				AMOUNT: 2.94111906662783e67
			},
			{ DATE: '2022-09-13', EVENT_NAME: 'Unwrap', ACTIONS: 2, USERS: 2, AMOUNT: 0.002090614482 },
			{ DATE: '2022-09-13', EVENT_NAME: 'Mint', ACTIONS: 7, USERS: 1, AMOUNT: 0.000669575906 },
			{
				DATE: '2022-09-13',
				EVENT_NAME: 'Transfer',
				ACTIONS: 960,
				USERS: 142,
				AMOUNT: 0.02642510048
			},
			{
				DATE: '2022-09-14',
				EVENT_NAME: 'Approval',
				ACTIONS: 207,
				USERS: 64,
				AMOUNT: 1.8295150099496e67
			},
			{ DATE: '2022-09-14', EVENT_NAME: 'Mint', ACTIONS: 5, USERS: 1, AMOUNT: 0.000374717122 },
			{
				DATE: '2022-09-14',
				EVENT_NAME: 'Transfer',
				ACTIONS: 491,
				USERS: 92,
				AMOUNT: 0.0373845858
			},
			{ DATE: '2022-09-14', EVENT_NAME: 'Unwrap', ACTIONS: 2, USERS: 2, AMOUNT: 0.001451436532 },
			{
				DATE: '2022-09-15',
				EVENT_NAME: 'Transfer',
				ACTIONS: 570,
				USERS: 124,
				AMOUNT: 0.04285964821
			},
			{ DATE: '2022-09-15', EVENT_NAME: 'Unwrap', ACTIONS: 3, USERS: 3, AMOUNT: 0.00002793042 },
			{
				DATE: '2022-09-15',
				EVENT_NAME: 'Approval',
				ACTIONS: 222,
				USERS: 79,
				AMOUNT: 1.77161896533094e67
			},
			{ DATE: '2022-09-15', EVENT_NAME: 'Mint', ACTIONS: 5, USERS: 1, AMOUNT: 0.006292029642 },
			{ DATE: '2022-09-16', EVENT_NAME: 'Unwrap', ACTIONS: 2, USERS: 2, AMOUNT: 0.000472245786 },
			{
				DATE: '2022-09-16',
				EVENT_NAME: 'Transfer',
				ACTIONS: 487,
				USERS: 100,
				AMOUNT: 0.007518059803
			},
			{ DATE: '2022-09-16', EVENT_NAME: 'Mint', ACTIONS: 8, USERS: 1, AMOUNT: 0.000342796055 },
			{
				DATE: '2022-09-16',
				EVENT_NAME: 'Approval',
				ACTIONS: 186,
				USERS: 65,
				AMOUNT: 1.45898032439018e67
			},
			{
				DATE: '2022-09-17',
				EVENT_NAME: 'Transfer',
				ACTIONS: 926,
				USERS: 145,
				AMOUNT: 0.01075478572
			},
			{ DATE: '2022-09-17', EVENT_NAME: 'Mint', ACTIONS: 8, USERS: 1, AMOUNT: 0.000377522556 },
			{
				DATE: '2022-09-17',
				EVENT_NAME: 'Approval',
				ACTIONS: 531,
				USERS: 93,
				AMOUNT: 5.75486683509462e67
			},
			{ DATE: '2022-09-18', EVENT_NAME: 'Mint', ACTIONS: 4, USERS: 1, AMOUNT: 0.001086553575 },
			{
				DATE: '2022-09-18',
				EVENT_NAME: 'Approval',
				ACTIONS: 402,
				USERS: 104,
				AMOUNT: 3.48534188604322e67
			},
			{ DATE: '2022-09-18', EVENT_NAME: 'Unwrap', ACTIONS: 1, USERS: 1, AMOUNT: 0.00107971736 },
			{
				DATE: '2022-09-18',
				EVENT_NAME: 'Transfer',
				ACTIONS: 911,
				USERS: 163,
				AMOUNT: 0.01600253586
			},
			{ DATE: '2022-09-19', EVENT_NAME: 'Mint', ACTIONS: 7, USERS: 1, AMOUNT: 0.000271900269 },
			{
				DATE: '2022-09-19',
				EVENT_NAME: 'Approval',
				ACTIONS: 306,
				USERS: 93,
				AMOUNT: 2.82532697739051e67
			},
			{
				DATE: '2022-09-19',
				EVENT_NAME: 'Transfer',
				ACTIONS: 940,
				USERS: 153,
				AMOUNT: 0.01652607998
			},
			{ DATE: '2022-09-19', EVENT_NAME: 'Unwrap', ACTIONS: 2, USERS: 2, AMOUNT: 0.001190315722 },
			{
				DATE: '2022-09-20',
				EVENT_NAME: 'Transfer',
				ACTIONS: 433,
				USERS: 101,
				AMOUNT: 0.03005046022
			},
			{ DATE: '2022-09-20', EVENT_NAME: 'Mint', ACTIONS: 5, USERS: 1, AMOUNT: 0.000030532662 },
			{ DATE: '2022-09-20', EVENT_NAME: 'Unwrap', ACTIONS: 3, USERS: 3, AMOUNT: 0.000007983741 },
			{
				DATE: '2022-09-20',
				EVENT_NAME: 'Approval',
				ACTIONS: 171,
				USERS: 61,
				AMOUNT: 1.67898529394108e67
			},
			{
				DATE: '2022-09-21',
				EVENT_NAME: 'Approval',
				ACTIONS: 373,
				USERS: 80,
				AMOUNT: 3.77482210913651e67
			},
			{ DATE: '2022-09-21', EVENT_NAME: 'Mint', ACTIONS: 7, USERS: 1, AMOUNT: 0.000078157817 },
			{
				DATE: '2022-09-21',
				EVENT_NAME: 'Transfer',
				ACTIONS: 855,
				USERS: 124,
				AMOUNT: 0.006224420656
			},
			{
				DATE: '2022-09-22',
				EVENT_NAME: 'Approval',
				ACTIONS: 339,
				USERS: 82,
				AMOUNT: 3.30007454326351e67
			},
			{ DATE: '2022-09-22', EVENT_NAME: 'Unwrap', ACTIONS: 2, USERS: 2, AMOUNT: 0.005451010454 },
			{ DATE: '2022-09-22', EVENT_NAME: 'Mint', ACTIONS: 5, USERS: 1, AMOUNT: 0.000079231263 },
			{
				DATE: '2022-09-22',
				EVENT_NAME: 'Transfer',
				ACTIONS: 610,
				USERS: 124,
				AMOUNT: 0.02415260079
			},
			{
				DATE: '2022-09-23',
				EVENT_NAME: 'Approval',
				ACTIONS: 223,
				USERS: 88,
				AMOUNT: 2.02636156165303e67
			},
			{ DATE: '2022-09-23', EVENT_NAME: 'Unwrap', ACTIONS: 4, USERS: 4, AMOUNT: 0.000003160729 },
			{
				DATE: '2022-09-23',
				EVENT_NAME: 'Transfer',
				ACTIONS: 571,
				USERS: 133,
				AMOUNT: 0.008951434191
			},
			{ DATE: '2022-09-23', EVENT_NAME: 'Mint', ACTIONS: 12, USERS: 1, AMOUNT: 0.001090897935 },
			{
				DATE: '2022-09-24',
				EVENT_NAME: 'Approval',
				ACTIONS: 224,
				USERS: 64,
				AMOUNT: 2.06109918842423e67
			},
			{
				DATE: '2022-09-24',
				EVENT_NAME: 'Transfer',
				ACTIONS: 417,
				USERS: 92,
				AMOUNT: 0.01380207413
			},
			{ DATE: '2022-09-24', EVENT_NAME: 'Unwrap', ACTIONS: 1, USERS: 1, AMOUNT: 0.000177918647 },
			{ DATE: '2022-09-24', EVENT_NAME: 'Mint', ACTIONS: 4, USERS: 1, AMOUNT: 0.000283391355 },
			{
				DATE: '2022-09-25',
				EVENT_NAME: 'Approval',
				ACTIONS: 134,
				USERS: 43,
				AMOUNT: 1.22739614591555e67
			},
			{ DATE: '2022-09-25', EVENT_NAME: 'Mint', ACTIONS: 7, USERS: 1, AMOUNT: 0.00010185682 },
			{
				DATE: '2022-09-25',
				EVENT_NAME: 'Transfer',
				ACTIONS: 258,
				USERS: 67,
				AMOUNT: 0.001531304663
			},
			{
				DATE: '2022-09-26',
				EVENT_NAME: 'Approval',
				ACTIONS: 131,
				USERS: 62,
				AMOUNT: 1.28529219053421e67
			},
			{ DATE: '2022-09-26', EVENT_NAME: 'Mint', ACTIONS: 4, USERS: 1, AMOUNT: 0.000008973127 },
			{ DATE: '2022-09-26', EVENT_NAME: 'Unwrap', ACTIONS: 3, USERS: 3, AMOUNT: 0.000072896978 },
			{
				DATE: '2022-09-26',
				EVENT_NAME: 'Transfer',
				ACTIONS: 393,
				USERS: 102,
				AMOUNT: 0.01181586182
			},
			{
				DATE: '2022-09-27',
				EVENT_NAME: 'Approval',
				ACTIONS: 226,
				USERS: 77,
				AMOUNT: 2.16531206873781e67
			},
			{ DATE: '2022-09-27', EVENT_NAME: 'Mint', ACTIONS: 7, USERS: 1, AMOUNT: 0.001815434027 },
			{
				DATE: '2022-09-27',
				EVENT_NAME: 'Transfer',
				ACTIONS: 675,
				USERS: 116,
				AMOUNT: 0.02716651929
			},
			{ DATE: '2022-09-28', EVENT_NAME: 'Unwrap', ACTIONS: 5, USERS: 5, AMOUNT: 0.008401372406 },
			{
				DATE: '2022-09-28',
				EVENT_NAME: 'Transfer',
				ACTIONS: 1476,
				USERS: 230,
				AMOUNT: 0.7192575602
			},
			{
				DATE: '2022-09-28',
				EVENT_NAME: 'Approval',
				ACTIONS: 777,
				USERS: 196,
				AMOUNT: 7.00542139885763e67
			},
			{ DATE: '2022-09-28', EVENT_NAME: 'Mint', ACTIONS: 27, USERS: 1, AMOUNT: 0.1039801412 },
			{
				DATE: '2022-09-29',
				EVENT_NAME: 'Approval',
				ACTIONS: 390,
				USERS: 133,
				AMOUNT: 3.39270821465336e67
			},
			{ DATE: '2022-09-29', EVENT_NAME: 'Mint', ACTIONS: 22, USERS: 1, AMOUNT: 0.01637711666 },
			{
				DATE: '2022-09-29',
				EVENT_NAME: 'Transfer',
				ACTIONS: 747,
				USERS: 167,
				AMOUNT: 0.09682754636
			},
			{ DATE: '2022-09-29', EVENT_NAME: 'Unwrap', ACTIONS: 2, USERS: 2, AMOUNT: 0.000002729659 },
			{ DATE: '2022-09-30', EVENT_NAME: 'Unwrap', ACTIONS: 2, USERS: 2, AMOUNT: 0.000006926498 },
			{
				DATE: '2022-09-30',
				EVENT_NAME: 'Transfer',
				ACTIONS: 1064,
				USERS: 155,
				AMOUNT: 0.08708632522
			},
			{
				DATE: '2022-09-30',
				EVENT_NAME: 'Approval',
				ACTIONS: 524,
				USERS: 113,
				AMOUNT: 3.79798052698397e67
			},
			{ DATE: '2022-09-30', EVENT_NAME: 'Mint', ACTIONS: 14, USERS: 1, AMOUNT: 0.02206042748 },
			{ DATE: '2022-10-01', EVENT_NAME: 'Unwrap', ACTIONS: 1, USERS: 1, AMOUNT: 0.000007777569 },
			{
				DATE: '2022-10-01',
				EVENT_NAME: 'Approval',
				ACTIONS: 205,
				USERS: 70,
				AMOUNT: 1.37792586192406e67
			},
			{ DATE: '2022-10-01', EVENT_NAME: 'Mint', ACTIONS: 12, USERS: 1, AMOUNT: 0.002959689483 },
			{
				DATE: '2022-10-01',
				EVENT_NAME: 'Transfer',
				ACTIONS: 355,
				USERS: 94,
				AMOUNT: 0.02798175173
			},
			{
				DATE: '2022-10-02',
				EVENT_NAME: 'Approval',
				ACTIONS: 244,
				USERS: 84,
				AMOUNT: 2.14215365089035e67
			},
			{ DATE: '2022-10-02', EVENT_NAME: 'Unwrap', ACTIONS: 1, USERS: 1, AMOUNT: 0.000002619869 },
			{
				DATE: '2022-10-02',
				EVENT_NAME: 'Transfer',
				ACTIONS: 981,
				USERS: 144,
				AMOUNT: 0.06014257657
			},
			{ DATE: '2022-10-02', EVENT_NAME: 'Mint', ACTIONS: 11, USERS: 1, AMOUNT: 0.005413172377 },
			{
				DATE: '2022-10-03',
				EVENT_NAME: 'Transfer',
				ACTIONS: 1272,
				USERS: 155,
				AMOUNT: 0.01791606787
			},
			{ DATE: '2022-10-03', EVENT_NAME: 'Mint', ACTIONS: 11, USERS: 1, AMOUNT: 0.002413118226 },
			{
				DATE: '2022-10-03',
				EVENT_NAME: 'Approval',
				ACTIONS: 313,
				USERS: 107,
				AMOUNT: 2.28110415797513e67
			},
			{ DATE: '2022-10-03', EVENT_NAME: 'Unwrap', ACTIONS: 1, USERS: 1, AMOUNT: 0.00013609537 },
			{
				DATE: '2022-10-04',
				EVENT_NAME: 'Approval',
				ACTIONS: 255,
				USERS: 92,
				AMOUNT: 2.03794077057677e67
			},
			{ DATE: '2022-10-04', EVENT_NAME: 'Unwrap', ACTIONS: 5, USERS: 4, AMOUNT: 0.000778630599 },
			{ DATE: '2022-10-04', EVENT_NAME: 'Mint', ACTIONS: 11, USERS: 1, AMOUNT: 0.00621940143 },
			{
				DATE: '2022-10-04',
				EVENT_NAME: 'Transfer',
				ACTIONS: 666,
				USERS: 141,
				AMOUNT: 0.02814608317
			},
			{
				DATE: '2022-10-05',
				EVENT_NAME: 'Transfer',
				ACTIONS: 677,
				USERS: 128,
				AMOUNT: 0.16164782
			},
			{
				DATE: '2022-10-05',
				EVENT_NAME: 'Approval',
				ACTIONS: 254,
				USERS: 83,
				AMOUNT: 2.18847048658528e67
			},
			{ DATE: '2022-10-05', EVENT_NAME: 'Mint', ACTIONS: 6, USERS: 1, AMOUNT: 0.000161701604 },
			{ DATE: '2022-10-05', EVENT_NAME: 'Unwrap', ACTIONS: 1, USERS: 1, AMOUNT: 1.23849e-7 },
			{
				DATE: '2022-10-06',
				EVENT_NAME: 'Transfer',
				ACTIONS: 571,
				USERS: 126,
				AMOUNT: 0.04201020202
			},
			{
				DATE: '2022-10-06',
				EVENT_NAME: 'Approval',
				ACTIONS: 227,
				USERS: 74,
				AMOUNT: 1.87583184564452e67
			},
			{ DATE: '2022-10-06', EVENT_NAME: 'Mint', ACTIONS: 9, USERS: 1, AMOUNT: 0.000926244187 },
			{ DATE: '2022-10-06', EVENT_NAME: 'Unwrap', ACTIONS: 2, USERS: 2, AMOUNT: 0.000109762585 },
			{
				DATE: '2022-10-07',
				EVENT_NAME: 'Transfer',
				ACTIONS: 619,
				USERS: 125,
				AMOUNT: 0.0442513503
			},
			{ DATE: '2022-10-07', EVENT_NAME: 'Mint', ACTIONS: 18, USERS: 1, AMOUNT: 0.007407104001 },
			{ DATE: '2022-10-07', EVENT_NAME: 'Unwrap', ACTIONS: 4, USERS: 4, AMOUNT: 0.000159534319 },
			{
				DATE: '2022-10-07',
				EVENT_NAME: 'Approval',
				ACTIONS: 236,
				USERS: 85,
				AMOUNT: 1.98004472595811e67
			},
			{ DATE: '2022-10-08', EVENT_NAME: 'Unwrap', ACTIONS: 2, USERS: 2, AMOUNT: 0.000088254594 },
			{
				DATE: '2022-10-08',
				EVENT_NAME: 'Approval',
				ACTIONS: 227,
				USERS: 72,
				AMOUNT: 1.76003975640721e67
			},
			{
				DATE: '2022-10-08',
				EVENT_NAME: 'Transfer',
				ACTIONS: 389,
				USERS: 107,
				AMOUNT: 0.00723887455
			},
			{ DATE: '2022-10-08', EVENT_NAME: 'Mint', ACTIONS: 5, USERS: 1, AMOUNT: 0.001559212641 },
			{ DATE: '2022-10-09', EVENT_NAME: 'Mint', ACTIONS: 7, USERS: 1, AMOUNT: 0.00105472238 },
			{
				DATE: '2022-10-09',
				EVENT_NAME: 'Transfer',
				ACTIONS: 515,
				USERS: 119,
				AMOUNT: 0.01142547181
			},
			{
				DATE: '2022-10-09',
				EVENT_NAME: 'Approval',
				ACTIONS: 216,
				USERS: 81,
				AMOUNT: 1.73688133855974e67
			},
			{ DATE: '2022-10-09', EVENT_NAME: 'Unwrap', ACTIONS: 1, USERS: 1, AMOUNT: 1.84117e-7 },
			{ DATE: '2022-10-10', EVENT_NAME: 'Unwrap', ACTIONS: 4, USERS: 3, AMOUNT: 0.000010342171 },
			{
				DATE: '2022-10-10',
				EVENT_NAME: 'Transfer',
				ACTIONS: 678,
				USERS: 124,
				AMOUNT: 0.01156908551
			},
			{
				DATE: '2022-10-10',
				EVENT_NAME: 'Approval',
				ACTIONS: 346,
				USERS: 85,
				AMOUNT: 2.76743093277186e67
			},
			{ DATE: '2022-10-10', EVENT_NAME: 'Mint', ACTIONS: 8, USERS: 1, AMOUNT: 0.00076504656 },
			{ DATE: '2022-10-11', EVENT_NAME: 'Unwrap', ACTIONS: 4, USERS: 3, AMOUNT: 0.000028974501 },
			{
				DATE: '2022-10-11',
				EVENT_NAME: 'Approval',
				ACTIONS: 306,
				USERS: 99,
				AMOUNT: 2.4895299186023e67
			},
			{ DATE: '2022-10-11', EVENT_NAME: 'Mint', ACTIONS: 16, USERS: 1, AMOUNT: 0.0119437851 },
			{
				DATE: '2022-10-11',
				EVENT_NAME: 'Transfer',
				ACTIONS: 715,
				USERS: 150,
				AMOUNT: 0.04610608273
			},
			{ DATE: '2022-10-12', EVENT_NAME: 'Mint', ACTIONS: 8, USERS: 1, AMOUNT: 0.001140486531 },
			{
				DATE: '2022-10-12',
				EVENT_NAME: 'Transfer',
				ACTIONS: 731,
				USERS: 136,
				AMOUNT: 0.01543185352
			},
			{
				DATE: '2022-10-12',
				EVENT_NAME: 'Approval',
				ACTIONS: 290,
				USERS: 83,
				AMOUNT: 2.30426257582259e67
			},
			{ DATE: '2022-10-12', EVENT_NAME: 'Unwrap', ACTIONS: 3, USERS: 2, AMOUNT: 0.000882384439 },
			{
				DATE: '2022-10-13',
				EVENT_NAME: 'Transfer',
				ACTIONS: 1254,
				USERS: 221,
				AMOUNT: 0.02981184304
			},
			{ DATE: '2022-10-13', EVENT_NAME: 'Mint', ACTIONS: 11, USERS: 1, AMOUNT: 0.002016839791 },
			{ DATE: '2022-10-13', EVENT_NAME: 'Unwrap', ACTIONS: 1, USERS: 1, AMOUNT: 0.000002561833 },
			{
				DATE: '2022-10-13',
				EVENT_NAME: 'Approval',
				ACTIONS: 570,
				USERS: 154,
				AMOUNT: 4.67800040518757e67
			},
			{
				DATE: '2022-10-14',
				EVENT_NAME: 'Approval',
				ACTIONS: 197,
				USERS: 83,
				AMOUNT: 1.72530212963601e67
			},
			{
				DATE: '2022-10-14',
				EVENT_NAME: 'Transfer',
				ACTIONS: 525,
				USERS: 126,
				AMOUNT: 0.0287507504
			},
			{ DATE: '2022-10-14', EVENT_NAME: 'Unwrap', ACTIONS: 2, USERS: 1, AMOUNT: 0.000154562536 },
			{ DATE: '2022-10-14', EVENT_NAME: 'Mint', ACTIONS: 10, USERS: 1, AMOUNT: 0.001694363565 },
			{
				DATE: '2022-10-15',
				EVENT_NAME: 'Approval',
				ACTIONS: 225,
				USERS: 76,
				AMOUNT: 1.6095100403987e67
			},
			{ DATE: '2022-10-15', EVENT_NAME: 'Unwrap', ACTIONS: 2, USERS: 2, AMOUNT: 0.001006998725 },
			{ DATE: '2022-10-15', EVENT_NAME: 'Mint', ACTIONS: 5, USERS: 1, AMOUNT: 0.002726960448 },
			{
				DATE: '2022-10-15',
				EVENT_NAME: 'Transfer',
				ACTIONS: 403,
				USERS: 109,
				AMOUNT: 0.1863636517
			},
			{
				DATE: '2022-10-16',
				EVENT_NAME: 'Approval',
				ACTIONS: 182,
				USERS: 70,
				AMOUNT: 1.52845557793257e67
			},
			{ DATE: '2022-10-16', EVENT_NAME: 'Mint', ACTIONS: 12, USERS: 1, AMOUNT: 0.000367831137 },
			{
				DATE: '2022-10-16',
				EVENT_NAME: 'Transfer',
				ACTIONS: 722,
				USERS: 133,
				AMOUNT: 0.004318412028
			},
			{
				DATE: '2022-10-17',
				EVENT_NAME: 'Transfer',
				ACTIONS: 637,
				USERS: 122,
				AMOUNT: 0.008541674698
			},
			{ DATE: '2022-10-17', EVENT_NAME: 'Mint', ACTIONS: 7, USERS: 1, AMOUNT: 0.000451487507 },
			{
				DATE: '2022-10-17',
				EVENT_NAME: 'Approval',
				ACTIONS: 252,
				USERS: 82,
				AMOUNT: 2.07267839734796e67
			},
			{ DATE: '2022-10-17', EVENT_NAME: 'Unwrap', ACTIONS: 2, USERS: 2, AMOUNT: 0.000034219653 },
			{ DATE: '2022-10-18', EVENT_NAME: 'Mint', ACTIONS: 10, USERS: 1, AMOUNT: 0.001787970048 },
			{
				DATE: '2022-10-18',
				EVENT_NAME: 'Transfer',
				ACTIONS: 663,
				USERS: 111,
				AMOUNT: 0.01982033838
			},
			{
				DATE: '2022-10-18',
				EVENT_NAME: 'Approval',
				ACTIONS: 203,
				USERS: 68,
				AMOUNT: 1.48213874223765e67
			},
			{ DATE: '2022-10-18', EVENT_NAME: 'Unwrap', ACTIONS: 1, USERS: 1, AMOUNT: 0.000049527546 },
			{
				DATE: '2022-10-19',
				EVENT_NAME: 'Transfer',
				ACTIONS: 667,
				USERS: 130,
				AMOUNT: 0.0929621378
			},
			{ DATE: '2022-10-19', EVENT_NAME: 'Unwrap', ACTIONS: 1, USERS: 1, AMOUNT: 0.000951066034 },
			{ DATE: '2022-10-19', EVENT_NAME: 'Mint', ACTIONS: 13, USERS: 1, AMOUNT: 0.01943647975 },
			{
				DATE: '2022-10-19',
				EVENT_NAME: 'Approval',
				ACTIONS: 303,
				USERS: 89,
				AMOUNT: 2.10741602411915e67
			},
			{ DATE: '2022-10-20', EVENT_NAME: 'Mint', ACTIONS: 7, USERS: 1, AMOUNT: 0.02215802166 },
			{
				DATE: '2022-10-20',
				EVENT_NAME: 'Transfer',
				ACTIONS: 887,
				USERS: 121,
				AMOUNT: 0.1429809918
			},
			{ DATE: '2022-10-20', EVENT_NAME: 'Unwrap', ACTIONS: 2, USERS: 2, AMOUNT: 0.000178564851 },
			{
				DATE: '2022-10-20',
				EVENT_NAME: 'Approval',
				ACTIONS: 273,
				USERS: 84,
				AMOUNT: 2.43163387398364e67
			},
			{ DATE: '2022-10-21', EVENT_NAME: 'Mint', ACTIONS: 13, USERS: 1, AMOUNT: 0.001407722151 },
			{
				DATE: '2022-10-21',
				EVENT_NAME: 'Approval',
				ACTIONS: 316,
				USERS: 97,
				AMOUNT: 2.7095348881532e67
			},
			{
				DATE: '2022-10-21',
				EVENT_NAME: 'Transfer',
				ACTIONS: 1108,
				USERS: 141,
				AMOUNT: 0.03678430982
			},
			{ DATE: '2022-10-21', EVENT_NAME: 'Unwrap', ACTIONS: 1, USERS: 1, AMOUNT: 0.00001034928 },
			{ DATE: '2022-10-22', EVENT_NAME: 'Unwrap', ACTIONS: 1, USERS: 1, AMOUNT: 0.000015493832 },
			{
				DATE: '2022-10-22',
				EVENT_NAME: 'Transfer',
				ACTIONS: 598,
				USERS: 117,
				AMOUNT: 0.02855763054
			},
			{ DATE: '2022-10-22', EVENT_NAME: 'Mint', ACTIONS: 7, USERS: 1, AMOUNT: 0.001487114466 },
			{
				DATE: '2022-10-22',
				EVENT_NAME: 'Approval',
				ACTIONS: 251,
				USERS: 84,
				AMOUNT: 2.02636156165303e67
			},
			{
				DATE: '2022-10-23',
				EVENT_NAME: 'Transfer',
				ACTIONS: 1169,
				USERS: 156,
				AMOUNT: 0.015311645
			},
			{ DATE: '2022-10-23', EVENT_NAME: 'Mint', ACTIONS: 10, USERS: 1, AMOUNT: 0.001050780302 },
			{
				DATE: '2022-10-23',
				EVENT_NAME: 'Approval',
				ACTIONS: 313,
				USERS: 103,
				AMOUNT: 2.66321805245827e67
			},
			{ DATE: '2022-10-23', EVENT_NAME: 'Unwrap', ACTIONS: 3, USERS: 2, AMOUNT: 0.000073979146 },
			{ DATE: '2022-10-24', EVENT_NAME: 'Mint', ACTIONS: 9, USERS: 1, AMOUNT: 0.000242965939 },
			{
				DATE: '2022-10-24',
				EVENT_NAME: 'Approval',
				ACTIONS: 319,
				USERS: 103,
				AMOUNT: 2.22320811335647e67
			},
			{ DATE: '2022-10-24', EVENT_NAME: 'Unwrap', ACTIONS: 2, USERS: 2, AMOUNT: 0.000001138508 },
			{
				DATE: '2022-10-24',
				EVENT_NAME: 'Transfer',
				ACTIONS: 623,
				USERS: 144,
				AMOUNT: 0.02148361138
			},
			{ DATE: '2022-10-25', EVENT_NAME: 'Unwrap', ACTIONS: 5, USERS: 4, AMOUNT: 0.005506490382 },
			{ DATE: '2022-10-25', EVENT_NAME: 'Mint', ACTIONS: 5, USERS: 1, AMOUNT: 0.000558774952 },
			{
				DATE: '2022-10-25',
				EVENT_NAME: 'Approval',
				ACTIONS: 490,
				USERS: 153,
				AMOUNT: 4.23799046608577e67
			},
			{
				DATE: '2022-10-25',
				EVENT_NAME: 'Transfer',
				ACTIONS: 1200,
				USERS: 202,
				AMOUNT: 0.05205316124
			},
			{ DATE: '2022-10-26', EVENT_NAME: 'Unwrap', ACTIONS: 1, USERS: 1, AMOUNT: 0.000005959606 },
			{ DATE: '2022-10-26', EVENT_NAME: 'Mint', ACTIONS: 3, USERS: 1, AMOUNT: 0.000651127754 },
			{
				DATE: '2022-10-26',
				EVENT_NAME: 'Approval',
				ACTIONS: 444,
				USERS: 116,
				AMOUNT: 3.25375770756859e67
			},
			{
				DATE: '2022-10-26',
				EVENT_NAME: 'Transfer',
				ACTIONS: 1059,
				USERS: 170,
				AMOUNT: 0.1270618929
			},
			{ DATE: '2022-10-27', EVENT_NAME: 'Unwrap', ACTIONS: 2, USERS: 2, AMOUNT: 0.002010963861 },
			{
				DATE: '2022-10-27',
				EVENT_NAME: 'Approval',
				ACTIONS: 526,
				USERS: 124,
				AMOUNT: 4.34220334639936e67
			},
			{ DATE: '2022-10-27', EVENT_NAME: 'Mint', ACTIONS: 14, USERS: 1, AMOUNT: 0.000463261347 },
			{
				DATE: '2022-10-27',
				EVENT_NAME: 'Transfer',
				ACTIONS: 1404,
				USERS: 192,
				AMOUNT: 0.0575738272
			},
			{
				DATE: '2022-10-28',
				EVENT_NAME: 'Approval',
				ACTIONS: 332,
				USERS: 107,
				AMOUNT: 2.84848539523798e67
			},
			{ DATE: '2022-10-28', EVENT_NAME: 'Mint', ACTIONS: 14, USERS: 1, AMOUNT: 0.02164627309 },
			{ DATE: '2022-10-28', EVENT_NAME: 'Unwrap', ACTIONS: 1, USERS: 1, AMOUNT: 0.000099900017 },
			{
				DATE: '2022-10-28',
				EVENT_NAME: 'Transfer',
				ACTIONS: 923,
				USERS: 159,
				AMOUNT: 0.08261640394
			},
			{
				DATE: '2022-10-29',
				EVENT_NAME: 'Transfer',
				ACTIONS: 1308,
				USERS: 144,
				AMOUNT: 0.03666478528
			},
			{
				DATE: '2022-10-29',
				EVENT_NAME: 'Approval',
				ACTIONS: 351,
				USERS: 98,
				AMOUNT: 2.64005963461081e67
			},
			{ DATE: '2022-10-29', EVENT_NAME: 'Unwrap', ACTIONS: 2, USERS: 2, AMOUNT: 0.000039196515 },
			{ DATE: '2022-10-29', EVENT_NAME: 'Mint', ACTIONS: 11, USERS: 1, AMOUNT: 0.009890387799 },
			{
				DATE: '2022-10-30',
				EVENT_NAME: 'Transfer',
				ACTIONS: 847,
				USERS: 115,
				AMOUNT: 0.007237722831
			},
			{ DATE: '2022-10-30', EVENT_NAME: 'Unwrap', ACTIONS: 1, USERS: 1, AMOUNT: 0.000160213605 },
			{ DATE: '2022-10-30', EVENT_NAME: 'Mint', ACTIONS: 18, USERS: 1, AMOUNT: 0.000485300162 },
			{
				DATE: '2022-10-30',
				EVENT_NAME: 'Approval',
				ACTIONS: 315,
				USERS: 87,
				AMOUNT: 1.87583184564452e67
			},
			{
				DATE: '2022-10-31',
				EVENT_NAME: 'Transfer',
				ACTIONS: 1177,
				USERS: 187,
				AMOUNT: 0.01760089586
			},
			{ DATE: '2022-10-31', EVENT_NAME: 'Unwrap', ACTIONS: 1, USERS: 1, AMOUNT: 0.000001323401 },
			{ DATE: '2022-10-31', EVENT_NAME: 'Mint', ACTIONS: 45, USERS: 1, AMOUNT: 0.001703251081 },
			{
				DATE: '2022-10-31',
				EVENT_NAME: 'Approval',
				ACTIONS: 455,
				USERS: 126,
				AMOUNT: 3.63587160205173e67
			},
			{
				DATE: '2022-11-01',
				EVENT_NAME: 'Transfer',
				ACTIONS: 1137,
				USERS: 153,
				AMOUNT: 0.04735493991
			},
			{
				DATE: '2022-11-01',
				EVENT_NAME: 'Approval',
				ACTIONS: 400,
				USERS: 104,
				AMOUNT: 2.97585669339903e67
			},
			{ DATE: '2022-11-01', EVENT_NAME: 'Mint', ACTIONS: 29, USERS: 1, AMOUNT: 0.001284460049 },
			{ DATE: '2022-11-01', EVENT_NAME: 'Unwrap', ACTIONS: 2, USERS: 1, AMOUNT: 7.01668e-7 },
			{
				DATE: '2022-11-02',
				EVENT_NAME: 'Approval',
				ACTIONS: 414,
				USERS: 114,
				AMOUNT: 3.49692109496695e67
			},
			{ DATE: '2022-11-02', EVENT_NAME: 'Unwrap', ACTIONS: 2, USERS: 2, AMOUNT: 0.000049820992 },
			{
				DATE: '2022-11-02',
				EVENT_NAME: 'Transfer',
				ACTIONS: 1108,
				USERS: 168,
				AMOUNT: 0.1842428692
			},
			{ DATE: '2022-11-02', EVENT_NAME: 'Mint', ACTIONS: 11, USERS: 1, AMOUNT: 0.001286165401 },
			{ DATE: '2022-11-03', EVENT_NAME: 'Mint', ACTIONS: 17, USERS: 1, AMOUNT: 0.002959870282 },
			{
				DATE: '2022-11-03',
				EVENT_NAME: 'Approval',
				ACTIONS: 294,
				USERS: 92,
				AMOUNT: 2.75585172384813e67
			},
			{
				DATE: '2022-11-03',
				EVENT_NAME: 'Transfer',
				ACTIONS: 1190,
				USERS: 155,
				AMOUNT: 0.01358637272
			},
			{ DATE: '2022-11-03', EVENT_NAME: 'Unwrap', ACTIONS: 2, USERS: 2, AMOUNT: 0.000031511177 },
			{
				DATE: '2022-11-04',
				EVENT_NAME: 'Approval',
				ACTIONS: 536,
				USERS: 133,
				AMOUNT: 3.85587657160263e67
			},
			{ DATE: '2022-11-04', EVENT_NAME: 'Mint', ACTIONS: 5, USERS: 1, AMOUNT: 0.001622274549 },
			{
				DATE: '2022-11-04',
				EVENT_NAME: 'Transfer',
				ACTIONS: 1209,
				USERS: 169,
				AMOUNT: 0.0147179538
			},
			{ DATE: '2022-11-04', EVENT_NAME: 'Unwrap', ACTIONS: 1, USERS: 1, AMOUNT: 0.000190394393 },
			{
				DATE: '2022-11-05',
				EVENT_NAME: 'Approval',
				ACTIONS: 428,
				USERS: 117,
				AMOUNT: 3.149544827255e67
			},
			{
				DATE: '2022-11-05',
				EVENT_NAME: 'Transfer',
				ACTIONS: 1201,
				USERS: 180,
				AMOUNT: 0.02202536858
			},
			{ DATE: '2022-11-05', EVENT_NAME: 'Mint', ACTIONS: 12, USERS: 1, AMOUNT: 0.002397908503 },
			{ DATE: '2022-11-06', EVENT_NAME: 'Unwrap', ACTIONS: 3, USERS: 3, AMOUNT: 0.000111974076 },
			{ DATE: '2022-11-06', EVENT_NAME: 'Mint', ACTIONS: 6, USERS: 1, AMOUNT: 0.01190188858 },
			{
				DATE: '2022-11-06',
				EVENT_NAME: 'Approval',
				ACTIONS: 265,
				USERS: 84,
				AMOUNT: 1.85267342779706e67
			},
			{
				DATE: '2022-11-06',
				EVENT_NAME: 'Transfer',
				ACTIONS: 782,
				USERS: 127,
				AMOUNT: 0.03212923854
			},
			{ DATE: '2022-11-07', EVENT_NAME: 'Unwrap', ACTIONS: 2, USERS: 2, AMOUNT: 7.63566e-7 },
			{
				DATE: '2022-11-07',
				EVENT_NAME: 'Approval',
				ACTIONS: 343,
				USERS: 97,
				AMOUNT: 2.72111409707693e67
			},
			{ DATE: '2022-11-07', EVENT_NAME: 'Mint', ACTIONS: 9, USERS: 1, AMOUNT: 0.005854924459 },
			{
				DATE: '2022-11-07',
				EVENT_NAME: 'Transfer',
				ACTIONS: 1055,
				USERS: 139,
				AMOUNT: 0.03264564842
			},
			{ DATE: '2022-11-08', EVENT_NAME: 'Mint', ACTIONS: 26, USERS: 1, AMOUNT: 0.001991744775 },
			{ DATE: '2022-11-08', EVENT_NAME: 'Unwrap', ACTIONS: 2, USERS: 2, AMOUNT: 0.000088234466 },
			{
				DATE: '2022-11-08',
				EVENT_NAME: 'Transfer',
				ACTIONS: 3068,
				USERS: 370,
				AMOUNT: 0.05339831327
			},
			{
				DATE: '2022-11-08',
				EVENT_NAME: 'Approval',
				ACTIONS: 1013,
				USERS: 234,
				AMOUNT: 7.09805507024748e67
			},
			{ DATE: '2022-11-09', EVENT_NAME: 'Mint', ACTIONS: 24, USERS: 1, AMOUNT: 0.001379169806 },
			{
				DATE: '2022-11-09',
				EVENT_NAME: 'Transfer',
				ACTIONS: 3822,
				USERS: 542,
				AMOUNT: 0.09486581237
			},
			{ DATE: '2022-11-09', EVENT_NAME: 'Unwrap', ACTIONS: 7, USERS: 7, AMOUNT: 0.009586078608 },
			{
				DATE: '2022-11-09',
				EVENT_NAME: 'Approval',
				ACTIONS: 1449,
				USERS: 343,
				AMOUNT: 9.50653052638366e67
			},
			{
				DATE: '2022-11-10',
				EVENT_NAME: 'Transfer',
				ACTIONS: 3315,
				USERS: 413,
				AMOUNT: 0.4050443919
			},
			{ DATE: '2022-11-10', EVENT_NAME: 'Mint', ACTIONS: 26, USERS: 1, AMOUNT: 0.003934058746 },
			{ DATE: '2022-11-10', EVENT_NAME: 'Unwrap', ACTIONS: 7, USERS: 6, AMOUNT: 0.06272540808 },
			{
				DATE: '2022-11-10',
				EVENT_NAME: 'Approval',
				ACTIONS: 1502,
				USERS: 278,
				AMOUNT: 9.2286295122141e67
			},
			{ DATE: '2022-11-11', EVENT_NAME: 'Mint', ACTIONS: 36, USERS: 1, AMOUNT: 0.02199286392 },
			{ DATE: '2022-11-11', EVENT_NAME: 'Unwrap', ACTIONS: 5, USERS: 5, AMOUNT: 0.05013746354 },
			{
				DATE: '2022-11-11',
				EVENT_NAME: 'Transfer',
				ACTIONS: 1711,
				USERS: 255,
				AMOUNT: 0.2297766345
			},
			{
				DATE: '2022-11-11',
				EVENT_NAME: 'Approval',
				ACTIONS: 817,
				USERS: 186,
				AMOUNT: 4.41167859994175e67
			},
			{ DATE: '2022-11-12', EVENT_NAME: 'Unwrap', ACTIONS: 14, USERS: 11, AMOUNT: 0.0032036768 },
			{
				DATE: '2022-11-12',
				EVENT_NAME: 'Approval',
				ACTIONS: 458,
				USERS: 116,
				AMOUNT: 2.68637647030574e67
			},
			{ DATE: '2022-11-12', EVENT_NAME: 'Mint', ACTIONS: 15, USERS: 1, AMOUNT: 0.005191913463 },
			{
				DATE: '2022-11-12',
				EVENT_NAME: 'Transfer',
				ACTIONS: 1101,
				USERS: 202,
				AMOUNT: 0.09996965623
			},
			{
				DATE: '2022-11-13',
				EVENT_NAME: 'Transfer',
				ACTIONS: 1155,
				USERS: 201,
				AMOUNT: 0.1533279506
			},
			{ DATE: '2022-11-13', EVENT_NAME: 'Mint', ACTIONS: 4, USERS: 1, AMOUNT: 0.002007502103 },
			{
				DATE: '2022-11-13',
				EVENT_NAME: 'Approval',
				ACTIONS: 515,
				USERS: 119,
				AMOUNT: 2.4895299186023e67
			},
			{ DATE: '2022-11-13', EVENT_NAME: 'Unwrap', ACTIONS: 14, USERS: 11, AMOUNT: 0.00366353679 },
			{
				DATE: '2022-11-14',
				EVENT_NAME: 'Approval',
				ACTIONS: 863,
				USERS: 193,
				AMOUNT: 4.35378255532309e67
			},
			{ DATE: '2022-11-14', EVENT_NAME: 'Unwrap', ACTIONS: 16, USERS: 11, AMOUNT: 0.07259774216 },
			{
				DATE: '2022-11-14',
				EVENT_NAME: 'Transfer',
				ACTIONS: 1945,
				USERS: 303,
				AMOUNT: 0.4461976066
			},
			{ DATE: '2022-11-14', EVENT_NAME: 'Mint', ACTIONS: 24, USERS: 1, AMOUNT: 0.003739980486 },
			{ DATE: '2022-11-15', EVENT_NAME: 'Mint', ACTIONS: 18, USERS: 1, AMOUNT: 0.002443988822 },
			{ DATE: '2022-11-15', EVENT_NAME: 'Unwrap', ACTIONS: 9, USERS: 5, AMOUNT: 0.002752508015 },
			{
				DATE: '2022-11-15',
				EVENT_NAME: 'Transfer',
				ACTIONS: 1470,
				USERS: 215,
				AMOUNT: 0.02907508949
			},
			{
				DATE: '2022-11-15',
				EVENT_NAME: 'Approval',
				ACTIONS: 646,
				USERS: 150,
				AMOUNT: 3.53165872173814e67
			},
			{ DATE: '2022-11-16', EVENT_NAME: 'Unwrap', ACTIONS: 3, USERS: 3, AMOUNT: 0.00050851031 },
			{ DATE: '2022-11-16', EVENT_NAME: 'Mint', ACTIONS: 20, USERS: 1, AMOUNT: 0.002382617419 },
			{
				DATE: '2022-11-16',
				EVENT_NAME: 'Approval',
				ACTIONS: 886,
				USERS: 141,
				AMOUNT: 3.48534188604322e67
			},
			{
				DATE: '2022-11-16',
				EVENT_NAME: 'Transfer',
				ACTIONS: 1637,
				USERS: 196,
				AMOUNT: 0.04570146393
			},
			{ DATE: '2022-11-17', EVENT_NAME: 'Mint', ACTIONS: 17, USERS: 1, AMOUNT: 0.000282158213 },
			{
				DATE: '2022-11-17',
				EVENT_NAME: 'Transfer',
				ACTIONS: 1637,
				USERS: 229,
				AMOUNT: 0.02575856936
			},
			{
				DATE: '2022-11-17',
				EVENT_NAME: 'Approval',
				ACTIONS: 898,
				USERS: 167,
				AMOUNT: 4.23799046608577e67
			},
			{ DATE: '2022-11-17', EVENT_NAME: 'Unwrap', ACTIONS: 5, USERS: 5, AMOUNT: 0.000143360956 },
			{
				DATE: '2022-11-18',
				EVENT_NAME: 'Approval',
				ACTIONS: 687,
				USERS: 171,
				AMOUNT: 3.94851024299248e67
			},
			{ DATE: '2022-11-18', EVENT_NAME: 'Mint', ACTIONS: 23, USERS: 1, AMOUNT: 0.002635459818 },
			{
				DATE: '2022-11-18',
				EVENT_NAME: 'Transfer',
				ACTIONS: 1324,
				USERS: 243,
				AMOUNT: 0.03331585544
			},
			{ DATE: '2022-11-18', EVENT_NAME: 'Unwrap', ACTIONS: 5, USERS: 5, AMOUNT: 0.000113226605 },
			{
				DATE: '2022-11-19',
				EVENT_NAME: 'Transfer',
				ACTIONS: 1064,
				USERS: 198,
				AMOUNT: 0.02099648058
			},
			{ DATE: '2022-11-19', EVENT_NAME: 'Mint', ACTIONS: 14, USERS: 1, AMOUNT: 0.001571375994 },
			{
				DATE: '2022-11-19',
				EVENT_NAME: 'Approval',
				ACTIONS: 634,
				USERS: 158,
				AMOUNT: 3.79798052698397e67
			},
			{ DATE: '2022-11-19', EVENT_NAME: 'Unwrap', ACTIONS: 2, USERS: 2, AMOUNT: 0.000215528717 },
			{ DATE: '2022-11-20', EVENT_NAME: 'Mint', ACTIONS: 14, USERS: 1, AMOUNT: 0.001152134484 },
			{
				DATE: '2022-11-20',
				EVENT_NAME: 'Approval',
				ACTIONS: 900,
				USERS: 197,
				AMOUNT: 6.05592626711164e67
			},
			{ DATE: '2022-11-20', EVENT_NAME: 'Unwrap', ACTIONS: 2, USERS: 2, AMOUNT: 0.000363724138 },
			{
				DATE: '2022-11-20',
				EVENT_NAME: 'Transfer',
				ACTIONS: 1514,
				USERS: 262,
				AMOUNT: 0.01228392889
			},
			{
				DATE: '2022-11-21',
				EVENT_NAME: 'Approval',
				ACTIONS: 932,
				USERS: 229,
				AMOUNT: 6.18329756527269e67
			},
			{ DATE: '2022-11-21', EVENT_NAME: 'Unwrap', ACTIONS: 6, USERS: 5, AMOUNT: 0.001061091652 },
			{
				DATE: '2022-11-21',
				EVENT_NAME: 'Transfer',
				ACTIONS: 1920,
				USERS: 309,
				AMOUNT: 0.02022350303
			},
			{ DATE: '2022-11-21', EVENT_NAME: 'Mint', ACTIONS: 23, USERS: 1, AMOUNT: 0.00107226076 },
			{ DATE: '2022-11-22', EVENT_NAME: 'Mint', ACTIONS: 18, USERS: 1, AMOUNT: 0.002633856562 },
			{
				DATE: '2022-11-22',
				EVENT_NAME: 'Transfer',
				ACTIONS: 1673,
				USERS: 355,
				AMOUNT: 0.03246466804
			},
			{
				DATE: '2022-11-22',
				EVENT_NAME: 'Approval',
				ACTIONS: 994,
				USERS: 271,
				AMOUNT: 7.27174320410346e67
			},
			{ DATE: '2022-11-22', EVENT_NAME: 'Unwrap', ACTIONS: 3, USERS: 3, AMOUNT: 0.000018125765 },
			{ DATE: '2022-11-23', EVENT_NAME: 'Mint', ACTIONS: 37, USERS: 1, AMOUNT: 0.00096186078 },
			{ DATE: '2022-11-23', EVENT_NAME: 'Unwrap', ACTIONS: 10, USERS: 8, AMOUNT: 0.000166121282 },
			{
				DATE: '2022-11-23',
				EVENT_NAME: 'Transfer',
				ACTIONS: 2658,
				USERS: 573,
				AMOUNT: 0.01863878961
			},
			{
				DATE: '2022-11-23',
				EVENT_NAME: 'Approval',
				ACTIONS: 1557,
				USERS: 445,
				AMOUNT: 1.12549910738671e68
			},
			{
				DATE: '2022-11-24',
				EVENT_NAME: 'Approval',
				ACTIONS: 1417,
				USERS: 341,
				AMOUNT: 9.81916916732441e67
			},
			{
				DATE: '2022-11-24',
				EVENT_NAME: 'Transfer',
				ACTIONS: 2136,
				USERS: 440,
				AMOUNT: 0.06034694175
			},
			{ DATE: '2022-11-24', EVENT_NAME: 'Mint', ACTIONS: 20, USERS: 1, AMOUNT: 0.003407529581 },
			{ DATE: '2022-11-24', EVENT_NAME: 'Unwrap', ACTIONS: 6, USERS: 5, AMOUNT: 0.001025359132 },
			{ DATE: '2022-11-25', EVENT_NAME: 'Mint', ACTIONS: 69, USERS: 1, AMOUNT: 0.03776944981 },
			{
				DATE: '2022-11-25',
				EVENT_NAME: 'Transfer',
				ACTIONS: 3335,
				USERS: 553,
				AMOUNT: 0.1458967511
			},
			{ DATE: '2022-11-25', EVENT_NAME: 'Unwrap', ACTIONS: 10, USERS: 6, AMOUNT: 0.002365299991 },
			{
				DATE: '2022-11-25',
				EVENT_NAME: 'Approval',
				ACTIONS: 2117,
				USERS: 416,
				AMOUNT: 1.30845060838167e68
			},
			{ DATE: '2022-11-26', EVENT_NAME: 'Mint', ACTIONS: 36, USERS: 1, AMOUNT: 0.02027811336 },
			{
				DATE: '2022-11-26',
				EVENT_NAME: 'Approval',
				ACTIONS: 1267,
				USERS: 256,
				AMOUNT: 8.92757008019708e67
			},
			{ DATE: '2022-11-26', EVENT_NAME: 'Unwrap', ACTIONS: 7, USERS: 6, AMOUNT: 0.000194555034 },
			{
				DATE: '2022-11-26',
				EVENT_NAME: 'Transfer',
				ACTIONS: 2052,
				USERS: 343,
				AMOUNT: 0.09284528604
			},
			{
				DATE: '2022-11-27',
				EVENT_NAME: 'Approval',
				ACTIONS: 906,
				USERS: 228,
				AMOUNT: 5.46538661200132e67
			},
			{
				DATE: '2022-11-27',
				EVENT_NAME: 'Transfer',
				ACTIONS: 1446,
				USERS: 297,
				AMOUNT: 0.0226914349
			},
			{ DATE: '2022-11-27', EVENT_NAME: 'Unwrap', ACTIONS: 4, USERS: 3, AMOUNT: 0.000035842502 },
			{ DATE: '2022-11-27', EVENT_NAME: 'Mint', ACTIONS: 14, USERS: 1, AMOUNT: 0.001848714445 },
			{
				DATE: '2022-11-28',
				EVENT_NAME: 'Transfer',
				ACTIONS: 1530,
				USERS: 303,
				AMOUNT: 0.02780731512
			},
			{ DATE: '2022-11-28', EVENT_NAME: 'Unwrap', ACTIONS: 11, USERS: 8, AMOUNT: 0.002746527711 },
			{
				DATE: '2022-11-28',
				EVENT_NAME: 'Approval',
				ACTIONS: 1001,
				USERS: 229,
				AMOUNT: 5.61591632800984e67
			},
			{ DATE: '2022-11-28', EVENT_NAME: 'Mint', ACTIONS: 18, USERS: 1, AMOUNT: 0.002287005794 },
			{
				DATE: '2022-11-29',
				EVENT_NAME: 'Approval',
				ACTIONS: 832,
				USERS: 203,
				AMOUNT: 5.52328265661998e67
			},
			{
				DATE: '2022-11-29',
				EVENT_NAME: 'Unwrap',
				ACTIONS: 12,
				USERS: 10,
				AMOUNT: 0.003168823828
			},
			{
				DATE: '2022-11-29',
				EVENT_NAME: 'Transfer',
				ACTIONS: 1292,
				USERS: 260,
				AMOUNT: 0.2920168824
			},
			{ DATE: '2022-11-29', EVENT_NAME: 'Mint', ACTIONS: 18, USERS: 1, AMOUNT: 0.01195078942 },
			{
				DATE: '2022-11-30',
				EVENT_NAME: 'Approval',
				ACTIONS: 1075,
				USERS: 268,
				AMOUNT: 6.5190946240609e67
			},
			{ DATE: '2022-11-30', EVENT_NAME: 'Mint', ACTIONS: 24, USERS: 1, AMOUNT: 0.002451776811 },
			{ DATE: '2022-11-30', EVENT_NAME: 'Unwrap', ACTIONS: 3, USERS: 3, AMOUNT: 0.000299176466 },
			{
				DATE: '2022-11-30',
				EVENT_NAME: 'Transfer',
				ACTIONS: 1795,
				USERS: 344,
				AMOUNT: 0.08085305286
			},
			{ DATE: '2022-12-01', EVENT_NAME: 'Mint', ACTIONS: 14, USERS: 1, AMOUNT: 0.001378486232 },
			{
				DATE: '2022-12-01',
				EVENT_NAME: 'Transfer',
				ACTIONS: 1448,
				USERS: 298,
				AMOUNT: 0.05568011361
			},
			{ DATE: '2022-12-01', EVENT_NAME: 'Unwrap', ACTIONS: 6, USERS: 5, AMOUNT: 0.002056702942 },
			{
				DATE: '2022-12-01',
				EVENT_NAME: 'Approval',
				ACTIONS: 873,
				USERS: 229,
				AMOUNT: 6.47277778836598e67
			},
			{
				DATE: '2022-12-02',
				EVENT_NAME: 'Transfer',
				ACTIONS: 1633,
				USERS: 313,
				AMOUNT: 0.05956552663
			},
			{ DATE: '2022-12-02', EVENT_NAME: 'Mint', ACTIONS: 21, USERS: 1, AMOUNT: 0.000600153829 },
			{
				DATE: '2022-12-02',
				EVENT_NAME: 'Approval',
				ACTIONS: 986,
				USERS: 258,
				AMOUNT: 7.98965415737482e67
			},
			{ DATE: '2022-12-02', EVENT_NAME: 'Unwrap', ACTIONS: 4, USERS: 4, AMOUNT: 0.000190083522 },
			{
				DATE: '2022-12-03',
				EVENT_NAME: 'Approval',
				ACTIONS: 737,
				USERS: 242,
				AMOUNT: 6.42646095267105e67
			},
			{
				DATE: '2022-12-03',
				EVENT_NAME: 'Transfer',
				ACTIONS: 1280,
				USERS: 292,
				AMOUNT: 0.0239164815
			},
			{ DATE: '2022-12-03', EVENT_NAME: 'Mint', ACTIONS: 16, USERS: 1, AMOUNT: 0.000765963443 },
			{ DATE: '2022-12-03', EVENT_NAME: 'Unwrap', ACTIONS: 2, USERS: 2, AMOUNT: 0.000236086455 },
			{
				DATE: '2022-12-04',
				EVENT_NAME: 'Approval',
				ACTIONS: 585,
				USERS: 181,
				AMOUNT: 4.43483701778921e67
			},
			{
				DATE: '2022-12-04',
				EVENT_NAME: 'Transfer',
				ACTIONS: 1077,
				USERS: 226,
				AMOUNT: 0.1497553391
			},
			{ DATE: '2022-12-04', EVENT_NAME: 'Mint', ACTIONS: 12, USERS: 1, AMOUNT: 0.01348950395 },
			{ DATE: '2022-12-04', EVENT_NAME: 'Unwrap', ACTIONS: 6, USERS: 5, AMOUNT: 0.000663111146 },
			{
				DATE: '2022-12-05',
				EVENT_NAME: 'Approval',
				ACTIONS: 616,
				USERS: 176,
				AMOUNT: 4.15693600361965e67
			},
			{
				DATE: '2022-12-05',
				EVENT_NAME: 'Transfer',
				ACTIONS: 1232,
				USERS: 234,
				AMOUNT: 0.02193294596
			},
			{ DATE: '2022-12-05', EVENT_NAME: 'Unwrap', ACTIONS: 7, USERS: 4, AMOUNT: 0.000752562589 },
			{ DATE: '2022-12-05', EVENT_NAME: 'Mint', ACTIONS: 16, USERS: 1, AMOUNT: 0.002113955099 },
			{
				DATE: '2022-12-06',
				EVENT_NAME: 'Approval',
				ACTIONS: 523,
				USERS: 167,
				AMOUNT: 3.76324290021278e67
			},
			{ DATE: '2022-12-06', EVENT_NAME: 'Unwrap', ACTIONS: 7, USERS: 6, AMOUNT: 0.00300797387 },
			{
				DATE: '2022-12-06',
				EVENT_NAME: 'Transfer',
				ACTIONS: 851,
				USERS: 200,
				AMOUNT: 0.03169631754
			},
			{ DATE: '2022-12-06', EVENT_NAME: 'Mint', ACTIONS: 16, USERS: 1, AMOUNT: 0.001586095063 },
			{
				DATE: '2022-12-07',
				EVENT_NAME: 'Transfer',
				ACTIONS: 1375,
				USERS: 353,
				AMOUNT: 0.02173864742
			},
			{ DATE: '2022-12-07', EVENT_NAME: 'Mint', ACTIONS: 22, USERS: 1, AMOUNT: 0.001155533353 },
			{ DATE: '2022-12-07', EVENT_NAME: 'Unwrap', ACTIONS: 6, USERS: 6, AMOUNT: 0.001119155738 },
			{
				DATE: '2022-12-07',
				EVENT_NAME: 'Approval',
				ACTIONS: 667,
				USERS: 282,
				AMOUNT: 6.10224310280656e67
			},
			{
				DATE: '2022-12-08',
				EVENT_NAME: 'Unwrap',
				ACTIONS: 14,
				USERS: 11,
				AMOUNT: 0.000891001663
			},
			{
				DATE: '2022-12-08',
				EVENT_NAME: 'Transfer',
				ACTIONS: 1849,
				USERS: 587,
				AMOUNT: 0.04319196214
			},
			{
				DATE: '2022-12-08',
				EVENT_NAME: 'Approval',
				ACTIONS: 1416,
				USERS: 530,
				AMOUNT: 1.3547674440766e68
			},
			{ DATE: '2022-12-08', EVENT_NAME: 'Mint', ACTIONS: 22, USERS: 1, AMOUNT: 0.005520296262 },
			{ DATE: '2022-12-09', EVENT_NAME: 'Mint', ACTIONS: 22, USERS: 1, AMOUNT: 0.0085699239 },
			{ DATE: '2022-12-09', EVENT_NAME: 'Unwrap', ACTIONS: 5, USERS: 5, AMOUNT: 0.000901866659 },
			{
				DATE: '2022-12-09',
				EVENT_NAME: 'Transfer',
				ACTIONS: 2185,
				USERS: 629,
				AMOUNT: 0.06593789557
			},
			{
				DATE: '2022-12-09',
				EVENT_NAME: 'Approval',
				ACTIONS: 1652,
				USERS: 562,
				AMOUNT: 1.76814520265382e68
			},
			{
				DATE: '2022-12-10',
				EVENT_NAME: 'Approval',
				ACTIONS: 1474,
				USERS: 530,
				AMOUNT: 1.48445458402239e68
			},
			{
				DATE: '2022-12-10',
				EVENT_NAME: 'Transfer',
				ACTIONS: 1866,
				USERS: 597,
				AMOUNT: 0.01219994546
			},
			{
				DATE: '2022-12-10',
				EVENT_NAME: 'Unwrap',
				ACTIONS: 12,
				USERS: 11,
				AMOUNT: 0.000748926293
			},
			{ DATE: '2022-12-10', EVENT_NAME: 'Mint', ACTIONS: 14, USERS: 1, AMOUNT: 0.000035251708 },
			{ DATE: '2022-12-11', EVENT_NAME: 'Mint', ACTIONS: 15, USERS: 1, AMOUNT: 0.003311189855 },
			{
				DATE: '2022-12-11',
				EVENT_NAME: 'Approval',
				ACTIONS: 1286,
				USERS: 471,
				AMOUNT: 1.337398630691e68
			},
			{
				DATE: '2022-12-11',
				EVENT_NAME: 'Transfer',
				ACTIONS: 1744,
				USERS: 535,
				AMOUNT: 0.02726096422
			},
			{ DATE: '2022-12-11', EVENT_NAME: 'Unwrap', ACTIONS: 8, USERS: 7, AMOUNT: 0.000315053772 },
			{
				DATE: '2022-12-12',
				EVENT_NAME: 'Transfer',
				ACTIONS: 2127,
				USERS: 570,
				AMOUNT: 0.1362102912
			},
			{
				DATE: '2022-12-12',
				EVENT_NAME: 'Approval',
				ACTIONS: 1533,
				USERS: 500,
				AMOUNT: 1.39182091263254e68
			},
			{ DATE: '2022-12-12', EVENT_NAME: 'Mint', ACTIONS: 25, USERS: 1, AMOUNT: 0.008306016873 },
			{ DATE: '2022-12-12', EVENT_NAME: 'Unwrap', ACTIONS: 10, USERS: 6, AMOUNT: 0.02503404232 },
			{
				DATE: '2022-12-13',
				EVENT_NAME: 'Approval',
				ACTIONS: 1279,
				USERS: 376,
				AMOUNT: 1.04560256581297e68
			},
			{ DATE: '2022-12-13', EVENT_NAME: 'Mint', ACTIONS: 24, USERS: 1, AMOUNT: 0.005164832413 },
			{ DATE: '2022-12-13', EVENT_NAME: 'Unwrap', ACTIONS: 2, USERS: 2, AMOUNT: 0.000284249563 },
			{
				DATE: '2022-12-13',
				EVENT_NAME: 'Transfer',
				ACTIONS: 2364,
				USERS: 464,
				AMOUNT: 0.1799701227
			},
			{
				DATE: '2022-12-14',
				EVENT_NAME: 'Transfer',
				ACTIONS: 2893,
				USERS: 614,
				AMOUNT: 0.07627174923
			},
			{ DATE: '2022-12-14', EVENT_NAME: 'Mint', ACTIONS: 46, USERS: 1, AMOUNT: 0.0147291681 },
			{ DATE: '2022-12-14', EVENT_NAME: 'Unwrap', ACTIONS: 5, USERS: 5, AMOUNT: 0.000378922171 },
			{
				DATE: '2022-12-14',
				EVENT_NAME: 'Approval',
				ACTIONS: 1640,
				USERS: 510,
				AMOUNT: 1.46013824528256e68
			},
			{ DATE: '2022-12-15', EVENT_NAME: 'Unwrap', ACTIONS: 8, USERS: 7, AMOUNT: 0.003988487002 },
			{ DATE: '2022-12-15', EVENT_NAME: 'Mint', ACTIONS: 22, USERS: 1, AMOUNT: 0.01074938704 },
			{
				DATE: '2022-12-15',
				EVENT_NAME: 'Transfer',
				ACTIONS: 2708,
				USERS: 622,
				AMOUNT: 0.08207347372
			},
			{
				DATE: '2022-12-15',
				EVENT_NAME: 'Approval',
				ACTIONS: 1801,
				USERS: 541,
				AMOUNT: 1.78782985782416e68
			},
			{
				DATE: '2022-12-16',
				EVENT_NAME: 'Transfer',
				ACTIONS: 2581,
				USERS: 553,
				AMOUNT: 0.07173904761
			},
			{ DATE: '2022-12-16', EVENT_NAME: 'Mint', ACTIONS: 17, USERS: 1, AMOUNT: 0.009922762903 },
			{ DATE: '2022-12-16', EVENT_NAME: 'Unwrap', ACTIONS: 3, USERS: 3, AMOUNT: 0.000303643371 },
			{
				DATE: '2022-12-16',
				EVENT_NAME: 'Approval',
				ACTIONS: 1569,
				USERS: 475,
				AMOUNT: 1.45203279903595e68
			},
			{ DATE: '2022-12-17', EVENT_NAME: 'Mint', ACTIONS: 23, USERS: 1, AMOUNT: 0.001342831031 },
			{
				DATE: '2022-12-17',
				EVENT_NAME: 'Transfer',
				ACTIONS: 2002,
				USERS: 500,
				AMOUNT: 0.02496297025
			},
			{
				DATE: '2022-12-17',
				EVENT_NAME: 'Approval',
				ACTIONS: 1379,
				USERS: 439,
				AMOUNT: 1.31076645016642e68
			},
			{ DATE: '2022-12-17', EVENT_NAME: 'Unwrap', ACTIONS: 4, USERS: 4, AMOUNT: 0.002382255111 },
			{
				DATE: '2022-12-18',
				EVENT_NAME: 'Transfer',
				ACTIONS: 1167,
				USERS: 317,
				AMOUNT: 0.02646818631
			},
			{
				DATE: '2022-12-18',
				EVENT_NAME: 'Approval',
				ACTIONS: 863,
				USERS: 276,
				AMOUNT: 7.4685897558069e67
			},
			{ DATE: '2022-12-18', EVENT_NAME: 'Mint', ACTIONS: 9, USERS: 1, AMOUNT: 0.00507464887 },
			{ DATE: '2022-12-18', EVENT_NAME: 'Unwrap', ACTIONS: 2, USERS: 2, AMOUNT: 0.000032079335 },
			{
				DATE: '2022-12-19',
				EVENT_NAME: 'Approval',
				ACTIONS: 1009,
				USERS: 326,
				AMOUNT: 9.08967900512932e67
			},
			{
				DATE: '2022-12-19',
				EVENT_NAME: 'Transfer',
				ACTIONS: 1884,
				USERS: 398,
				AMOUNT: 0.06530999835
			},
			{ DATE: '2022-12-19', EVENT_NAME: 'Mint', ACTIONS: 19, USERS: 1, AMOUNT: 0.01209634904 },
			{ DATE: '2022-12-19', EVENT_NAME: 'Unwrap', ACTIONS: 13, USERS: 9, AMOUNT: 0.002575518248 },
			{ DATE: '2022-12-20', EVENT_NAME: 'Mint', ACTIONS: 17, USERS: 1, AMOUNT: 0.01102596307 },
			{
				DATE: '2022-12-20',
				EVENT_NAME: 'Approval',
				ACTIONS: 1128,
				USERS: 330,
				AMOUNT: 9.64548103346844e67
			},
			{
				DATE: '2022-12-20',
				EVENT_NAME: 'Transfer',
				ACTIONS: 1956,
				USERS: 381,
				AMOUNT: 0.07295873343
			},
			{ DATE: '2022-12-20', EVENT_NAME: 'Unwrap', ACTIONS: 8, USERS: 4, AMOUNT: 0.002716497507 },
			{
				DATE: '2022-12-21',
				EVENT_NAME: 'Approval',
				ACTIONS: 1192,
				USERS: 423,
				AMOUNT: 1.16371049683503e68
			},
			{ DATE: '2022-12-21', EVENT_NAME: 'Mint', ACTIONS: 16, USERS: 1, AMOUNT: 0.01484529769 },
			{
				DATE: '2022-12-21',
				EVENT_NAME: 'Transfer',
				ACTIONS: 1889,
				USERS: 493,
				AMOUNT: 0.06894663077
			},
			{ DATE: '2022-12-21', EVENT_NAME: 'Unwrap', ACTIONS: 12, USERS: 9, AMOUNT: 0.006011924372 },
			{ DATE: '2022-12-22', EVENT_NAME: 'Unwrap', ACTIONS: 9, USERS: 7, AMOUNT: 0.003317901116 },
			{
				DATE: '2022-12-22',
				EVENT_NAME: 'Approval',
				ACTIONS: 1031,
				USERS: 341,
				AMOUNT: 9.07809979620559e67
			},
			{
				DATE: '2022-12-22',
				EVENT_NAME: 'Transfer',
				ACTIONS: 1530,
				USERS: 400,
				AMOUNT: 0.1776602621
			},
			{ DATE: '2022-12-22', EVENT_NAME: 'Mint', ACTIONS: 20, USERS: 1, AMOUNT: 0.006585736519 },
			{
				DATE: '2022-12-23',
				EVENT_NAME: 'Approval',
				ACTIONS: 1025,
				USERS: 289,
				AMOUNT: 9.34442160145142e67
			},
			{ DATE: '2022-12-23', EVENT_NAME: 'Mint', ACTIONS: 44, USERS: 1, AMOUNT: 0.001261422242 },
			{
				DATE: '2022-12-23',
				EVENT_NAME: 'Transfer',
				ACTIONS: 1642,
				USERS: 359,
				AMOUNT: 0.02845427921
			},
			{ DATE: '2022-12-23', EVENT_NAME: 'Unwrap', ACTIONS: 4, USERS: 3, AMOUNT: 0.001003993069 },
			{
				DATE: '2022-12-24',
				EVENT_NAME: 'Transfer',
				ACTIONS: 1279,
				USERS: 264,
				AMOUNT: 0.4954643562
			},
			{ DATE: '2022-12-24', EVENT_NAME: 'Unwrap', ACTIONS: 2, USERS: 2, AMOUNT: 0.005453958472 },
			{
				DATE: '2022-12-24',
				EVENT_NAME: 'Approval',
				ACTIONS: 835,
				USERS: 241,
				AMOUNT: 6.84331247392539e67
			},
			{ DATE: '2022-12-24', EVENT_NAME: 'Mint', ACTIONS: 15, USERS: 1, AMOUNT: 0.01105456208 },
			{
				DATE: '2022-12-25',
				EVENT_NAME: 'Approval',
				ACTIONS: 747,
				USERS: 231,
				AMOUNT: 6.41488174374732e67
			},
			{ DATE: '2022-12-25', EVENT_NAME: 'Unwrap', ACTIONS: 5, USERS: 5, AMOUNT: 0.007415579993 },
			{
				DATE: '2022-12-25',
				EVENT_NAME: 'Transfer',
				ACTIONS: 1437,
				USERS: 279,
				AMOUNT: 0.1022495132
			},
			{ DATE: '2022-12-25', EVENT_NAME: 'Mint', ACTIONS: 21, USERS: 1, AMOUNT: 0.010541195 },
			{ DATE: '2022-12-26', EVENT_NAME: 'Mint', ACTIONS: 24, USERS: 1, AMOUNT: 0.001338581623 },
			{
				DATE: '2022-12-26',
				EVENT_NAME: 'Transfer',
				ACTIONS: 1433,
				USERS: 347,
				AMOUNT: 0.03086094203
			},
			{
				DATE: '2022-12-26',
				EVENT_NAME: 'Approval',
				ACTIONS: 981,
				USERS: 311,
				AMOUNT: 8.5686146035614e67
			},
			{ DATE: '2022-12-26', EVENT_NAME: 'Unwrap', ACTIONS: 5, USERS: 3, AMOUNT: 0.005925860529 },
			{ DATE: '2022-12-27', EVENT_NAME: 'Unwrap', ACTIONS: 5, USERS: 4, AMOUNT: 0.001510395579 },
			{
				DATE: '2022-12-27',
				EVENT_NAME: 'Transfer',
				ACTIONS: 1815,
				USERS: 346,
				AMOUNT: 0.05752703193
			},
			{
				DATE: '2022-12-27',
				EVENT_NAME: 'Approval',
				ACTIONS: 1054,
				USERS: 302,
				AMOUNT: 9.10125821405305e67
			},
			{ DATE: '2022-12-27', EVENT_NAME: 'Mint', ACTIONS: 27, USERS: 1, AMOUNT: 0.005905456559 },
			{
				DATE: '2022-12-28',
				EVENT_NAME: 'Approval',
				ACTIONS: 995,
				USERS: 289,
				AMOUNT: 8.36018884293423e67
			},
			{
				DATE: '2022-12-28',
				EVENT_NAME: 'Transfer',
				ACTIONS: 1796,
				USERS: 352,
				AMOUNT: 0.07777564458
			},
			{ DATE: '2022-12-28', EVENT_NAME: 'Unwrap', ACTIONS: 8, USERS: 7, AMOUNT: 0.00792641982 },
			{ DATE: '2022-12-28', EVENT_NAME: 'Mint', ACTIONS: 16, USERS: 1, AMOUNT: 0.006602065788 },
			{
				DATE: '2022-12-29',
				EVENT_NAME: 'Approval',
				ACTIONS: 996,
				USERS: 312,
				AMOUNT: 7.79280760567138e67
			},
			{ DATE: '2022-12-29', EVENT_NAME: 'Unwrap', ACTIONS: 11, USERS: 9, AMOUNT: 0.0157183454 },
			{
				DATE: '2022-12-29',
				EVENT_NAME: 'Transfer',
				ACTIONS: 1945,
				USERS: 346,
				AMOUNT: 0.1151036667
			},
			{ DATE: '2022-12-29', EVENT_NAME: 'Mint', ACTIONS: 16, USERS: 1, AMOUNT: 0.0109041286 },
			{
				DATE: '2022-12-30',
				EVENT_NAME: 'Approval',
				ACTIONS: 593,
				USERS: 197,
				AMOUNT: 4.27272809285697e67
			},
			{
				DATE: '2022-12-30',
				EVENT_NAME: 'Transfer',
				ACTIONS: 1344,
				USERS: 252,
				AMOUNT: 0.08614318898
			},
			{ DATE: '2022-12-30', EVENT_NAME: 'Mint', ACTIONS: 14, USERS: 1, AMOUNT: 0.005688429308 },
			{ DATE: '2022-12-30', EVENT_NAME: 'Unwrap', ACTIONS: 5, USERS: 4, AMOUNT: 0.01265466376 },
			{ DATE: '2022-12-31', EVENT_NAME: 'Unwrap', ACTIONS: 5, USERS: 4, AMOUNT: 0.001184248879 },
			{
				DATE: '2022-12-31',
				EVENT_NAME: 'Approval',
				ACTIONS: 545,
				USERS: 172,
				AMOUNT: 4.09903995900099e67
			},
			{
				DATE: '2022-12-31',
				EVENT_NAME: 'Transfer',
				ACTIONS: 919,
				USERS: 214,
				AMOUNT: 0.01819501261
			},
			{ DATE: '2022-12-31', EVENT_NAME: 'Mint', ACTIONS: 6, USERS: 1, AMOUNT: 0.000014621664 },
			{
				DATE: '2023-01-01',
				EVENT_NAME: 'Transfer',
				ACTIONS: 854,
				USERS: 195,
				AMOUNT: 0.04334034561
			},
			{ DATE: '2023-01-01', EVENT_NAME: 'Mint', ACTIONS: 11, USERS: 1, AMOUNT: 0.001401657796 },
			{
				DATE: '2023-01-01',
				EVENT_NAME: 'Approval',
				ACTIONS: 464,
				USERS: 150,
				AMOUNT: 3.02217352909395e67
			},
			{
				DATE: '2023-01-02',
				EVENT_NAME: 'Transfer',
				ACTIONS: 1172,
				USERS: 247,
				AMOUNT: 0.01586127258
			},
			{ DATE: '2023-01-02', EVENT_NAME: 'Unwrap', ACTIONS: 3, USERS: 3, AMOUNT: 0.000087122654 },
			{
				DATE: '2023-01-02',
				EVENT_NAME: 'Approval',
				ACTIONS: 611,
				USERS: 191,
				AMOUNT: 3.05691115586515e67
			},
			{ DATE: '2023-01-02', EVENT_NAME: 'Mint', ACTIONS: 11, USERS: 1, AMOUNT: 0.001266933979 },
			{
				DATE: '2023-01-03',
				EVENT_NAME: 'Approval',
				ACTIONS: 674,
				USERS: 206,
				AMOUNT: 3.96008945191621e67
			},
			{ DATE: '2023-01-03', EVENT_NAME: 'Unwrap', ACTIONS: 6, USERS: 4, AMOUNT: 0.001470592424 },
			{ DATE: '2023-01-03', EVENT_NAME: 'Mint', ACTIONS: 11, USERS: 1, AMOUNT: 0.001379641992 },
			{
				DATE: '2023-01-03',
				EVENT_NAME: 'Transfer',
				ACTIONS: 1230,
				USERS: 266,
				AMOUNT: 0.01858073578
			},
			{
				DATE: '2023-01-04',
				EVENT_NAME: 'Transfer',
				ACTIONS: 2645,
				USERS: 362,
				AMOUNT: 0.06192607865
			},
			{ DATE: '2023-01-04', EVENT_NAME: 'Unwrap', ACTIONS: 8, USERS: 7, AMOUNT: 0.005038200121 },
			{
				DATE: '2023-01-04',
				EVENT_NAME: 'Approval',
				ACTIONS: 1467,
				USERS: 284,
				AMOUNT: 6.98226298101017e67
			},
			{ DATE: '2023-01-04', EVENT_NAME: 'Mint', ACTIONS: 17, USERS: 1, AMOUNT: 0.001920387798 },
			{
				DATE: '2023-01-05',
				EVENT_NAME: 'Approval',
				ACTIONS: 1632,
				USERS: 271,
				AMOUNT: 5.90539655110313e67
			},
			{ DATE: '2023-01-05', EVENT_NAME: 'Mint', ACTIONS: 17, USERS: 1, AMOUNT: 0.009198503709 },
			{ DATE: '2023-01-05', EVENT_NAME: 'Unwrap', ACTIONS: 6, USERS: 6, AMOUNT: 0.000286055966 },
			{
				DATE: '2023-01-05',
				EVENT_NAME: 'Transfer',
				ACTIONS: 2220,
				USERS: 327,
				AMOUNT: 0.05811400565
			},
			{
				DATE: '2023-01-06',
				EVENT_NAME: 'Approval',
				ACTIONS: 980,
				USERS: 324,
				AMOUNT: 5.67381237262849e67
			},
			{
				DATE: '2023-01-06',
				EVENT_NAME: 'Transfer',
				ACTIONS: 1462,
				USERS: 380,
				AMOUNT: 0.04156609439
			},
			{ DATE: '2023-01-06', EVENT_NAME: 'Unwrap', ACTIONS: 5, USERS: 4, AMOUNT: 0.00103209156 },
			{ DATE: '2023-01-06', EVENT_NAME: 'Mint', ACTIONS: 17, USERS: 1, AMOUNT: 0.002543918427 },
			{
				DATE: '2023-01-07',
				EVENT_NAME: 'Approval',
				ACTIONS: 879,
				USERS: 271,
				AMOUNT: 4.64326277841638e67
			},
			{ DATE: '2023-01-07', EVENT_NAME: 'Mint', ACTIONS: 7, USERS: 1, AMOUNT: 0.006776603852 },
			{ DATE: '2023-01-07', EVENT_NAME: 'Unwrap', ACTIONS: 3, USERS: 3, AMOUNT: 0.002805833808 },
			{
				DATE: '2023-01-07',
				EVENT_NAME: 'Transfer',
				ACTIONS: 1065,
				USERS: 304,
				AMOUNT: 0.038134418
			},
			{ DATE: '2023-01-08', EVENT_NAME: 'Mint', ACTIONS: 10, USERS: 1, AMOUNT: 0.006262303344 },
			{ DATE: '2023-01-08', EVENT_NAME: 'Unwrap', ACTIONS: 10, USERS: 5, AMOUNT: 0.00584629969 },
			{
				DATE: '2023-01-08',
				EVENT_NAME: 'Approval',
				ACTIONS: 802,
				USERS: 206,
				AMOUNT: 4.13377758577219e67
			},
			{
				DATE: '2023-01-08',
				EVENT_NAME: 'Transfer',
				ACTIONS: 1454,
				USERS: 265,
				AMOUNT: 0.06396702115
			},
			{ DATE: '2023-01-09', EVENT_NAME: 'Unwrap', ACTIONS: 4, USERS: 4, AMOUNT: 0.000308918461 },
			{ DATE: '2023-01-09', EVENT_NAME: 'Mint', ACTIONS: 13, USERS: 1, AMOUNT: 0.009599393862 },
			{
				DATE: '2023-01-09',
				EVENT_NAME: 'Approval',
				ACTIONS: 1009,
				USERS: 238,
				AMOUNT: 5.54644107446745e67
			},
			{
				DATE: '2023-01-09',
				EVENT_NAME: 'Transfer',
				ACTIONS: 2440,
				USERS: 346,
				AMOUNT: 0.06752608085
			},
			{ DATE: '2023-01-10', EVENT_NAME: 'Unwrap', ACTIONS: 3, USERS: 3, AMOUNT: 0.004826977945 },
			{ DATE: '2023-01-10', EVENT_NAME: 'Mint', ACTIONS: 11, USERS: 1, AMOUNT: 0.006837642083 },
			{
				DATE: '2023-01-10',
				EVENT_NAME: 'Transfer',
				ACTIONS: 1672,
				USERS: 294,
				AMOUNT: 0.06512738858
			},
			{
				DATE: '2023-01-10',
				EVENT_NAME: 'Approval',
				ACTIONS: 690,
				USERS: 228,
				AMOUNT: 3.75166369128904e67
			},
			{
				DATE: '2023-01-11',
				EVENT_NAME: 'Approval',
				ACTIONS: 957,
				USERS: 274,
				AMOUNT: 5.824342088637e67
			},
			{ DATE: '2023-01-11', EVENT_NAME: 'Mint', ACTIONS: 20, USERS: 1, AMOUNT: 0.003918227005 },
			{
				DATE: '2023-01-11',
				EVENT_NAME: 'Transfer',
				ACTIONS: 2377,
				USERS: 390,
				AMOUNT: 0.05300134061
			},
			{ DATE: '2023-01-11', EVENT_NAME: 'Unwrap', ACTIONS: 4, USERS: 4, AMOUNT: 0.00036620277 },
			{ DATE: '2023-01-12', EVENT_NAME: 'Unwrap', ACTIONS: 15, USERS: 9, AMOUNT: 0.008472297795 },
			{ DATE: '2023-01-12', EVENT_NAME: 'Mint', ACTIONS: 20, USERS: 1, AMOUNT: 0.0101565739 },
			{
				DATE: '2023-01-12',
				EVENT_NAME: 'Approval',
				ACTIONS: 1397,
				USERS: 316,
				AMOUNT: 9.29810476575649e67
			},
			{
				DATE: '2023-01-12',
				EVENT_NAME: 'Transfer',
				ACTIONS: 3912,
				USERS: 541,
				AMOUNT: 0.1001587759
			},
			{
				DATE: '2023-01-13',
				EVENT_NAME: 'Approval',
				ACTIONS: 1818,
				USERS: 369,
				AMOUNT: 1.40108427977153e68
			},
			{ DATE: '2023-01-13', EVENT_NAME: 'Mint', ACTIONS: 33, USERS: 1, AMOUNT: 0.07415294366 },
			{
				DATE: '2023-01-13',
				EVENT_NAME: 'Transfer',
				ACTIONS: 4086,
				USERS: 491,
				AMOUNT: 0.3246878053
			},
			{ DATE: '2023-01-13', EVENT_NAME: 'Unwrap', ACTIONS: 13, USERS: 10, AMOUNT: 0.01801367796 },
			{ DATE: '2023-01-14', EVENT_NAME: 'Mint', ACTIONS: 28, USERS: 1, AMOUNT: 0.03605268239 },
			{
				DATE: '2023-01-14',
				EVENT_NAME: 'Approval',
				ACTIONS: 1240,
				USERS: 351,
				AMOUNT: 9.49495131745993e67
			},
			{ DATE: '2023-01-14', EVENT_NAME: 'Unwrap', ACTIONS: 12, USERS: 10, AMOUNT: 0.0172371554 },
			{
				DATE: '2023-01-14',
				EVENT_NAME: 'Transfer',
				ACTIONS: 3110,
				USERS: 478,
				AMOUNT: 0.2112843417
			},
			{
				DATE: '2023-01-15',
				EVENT_NAME: 'Transfer',
				ACTIONS: 2205,
				USERS: 313,
				AMOUNT: 0.09790316172
			},
			{ DATE: '2023-01-15', EVENT_NAME: 'Mint', ACTIONS: 15, USERS: 1, AMOUNT: 0.009053473428 },
			{ DATE: '2023-01-15', EVENT_NAME: 'Unwrap', ACTIONS: 7, USERS: 6, AMOUNT: 0.008999696253 },
			{
				DATE: '2023-01-15',
				EVENT_NAME: 'Approval',
				ACTIONS: 689,
				USERS: 207,
				AMOUNT: 4.71273803195877e67
			},
			{
				DATE: '2023-01-16',
				EVENT_NAME: 'Approval',
				ACTIONS: 839,
				USERS: 271,
				AMOUNT: 6.49593620621344e67
			},
			{
				DATE: '2023-01-16',
				EVENT_NAME: 'Transfer',
				ACTIONS: 2265,
				USERS: 353,
				AMOUNT: 0.1844114319
			},
			{ DATE: '2023-01-16', EVENT_NAME: 'Unwrap', ACTIONS: 12, USERS: 9, AMOUNT: 0.01180966338 },
			{ DATE: '2023-01-16', EVENT_NAME: 'Mint', ACTIONS: 19, USERS: 1, AMOUNT: 0.04530117228 },
			{
				DATE: '2023-01-17',
				EVENT_NAME: 'Unwrap',
				ACTIONS: 12,
				USERS: 10,
				AMOUNT: 0.001714729169
			},
			{
				DATE: '2023-01-17',
				EVENT_NAME: 'Transfer',
				ACTIONS: 2476,
				USERS: 347,
				AMOUNT: 0.07702706819
			},
			{ DATE: '2023-01-17', EVENT_NAME: 'Mint', ACTIONS: 22, USERS: 1, AMOUNT: 0.006869002418 },
			{
				DATE: '2023-01-17',
				EVENT_NAME: 'Approval',
				ACTIONS: 841,
				USERS: 248,
				AMOUNT: 5.53486186554371e67
			},
			{
				DATE: '2023-01-18',
				EVENT_NAME: 'Approval',
				ACTIONS: 1031,
				USERS: 257,
				AMOUNT: 5.94013417787432e67
			},
			{ DATE: '2023-01-18', EVENT_NAME: 'Mint', ACTIONS: 28, USERS: 1, AMOUNT: 0.000736692722 },
			{ DATE: '2023-01-18', EVENT_NAME: 'Unwrap', ACTIONS: 9, USERS: 8, AMOUNT: 0.002168866989 },
			{
				DATE: '2023-01-18',
				EVENT_NAME: 'Transfer',
				ACTIONS: 2562,
				USERS: 377,
				AMOUNT: 0.06564384328
			},
			{
				DATE: '2023-01-19',
				EVENT_NAME: 'Unwrap',
				ACTIONS: 12,
				USERS: 11,
				AMOUNT: 0.005861529897
			},
			{
				DATE: '2023-01-19',
				EVENT_NAME: 'Transfer',
				ACTIONS: 2088,
				USERS: 324,
				AMOUNT: 0.06152219997
			},
			{ DATE: '2023-01-19', EVENT_NAME: 'Mint', ACTIONS: 27, USERS: 1, AMOUNT: 0.002253894114 },
			{
				DATE: '2023-01-19',
				EVENT_NAME: 'Approval',
				ACTIONS: 1051,
				USERS: 227,
				AMOUNT: 6.0790846849591e67
			},
			{ DATE: '2023-01-20', EVENT_NAME: 'Mint', ACTIONS: 15, USERS: 1, AMOUNT: 0.001502820323 },
			{
				DATE: '2023-01-20',
				EVENT_NAME: 'Transfer',
				ACTIONS: 2695,
				USERS: 367,
				AMOUNT: 0.0736010016
			},
			{
				DATE: '2023-01-20',
				EVENT_NAME: 'Approval',
				ACTIONS: 1090,
				USERS: 273,
				AMOUNT: 6.42646095267105e67
			},
			{ DATE: '2023-01-20', EVENT_NAME: 'Unwrap', ACTIONS: 10, USERS: 7, AMOUNT: 0.00202424093 },
			{
				DATE: '2023-01-21',
				EVENT_NAME: 'Transfer',
				ACTIONS: 2518,
				USERS: 366,
				AMOUNT: 0.06952011802
			},
			{ DATE: '2023-01-21', EVENT_NAME: 'Unwrap', ACTIONS: 9, USERS: 7, AMOUNT: 0.004944747148 },
			{ DATE: '2023-01-21', EVENT_NAME: 'Mint', ACTIONS: 18, USERS: 1, AMOUNT: 0.001242681343 },
			{
				DATE: '2023-01-21',
				EVENT_NAME: 'Approval',
				ACTIONS: 1079,
				USERS: 294,
				AMOUNT: 6.13698072957776e67
			},
			{
				DATE: '2023-01-22',
				EVENT_NAME: 'Approval',
				ACTIONS: 930,
				USERS: 269,
				AMOUNT: 5.62749553693357e67
			},
			{ DATE: '2023-01-22', EVENT_NAME: 'Mint', ACTIONS: 14, USERS: 1, AMOUNT: 0.000743492097 },
			{
				DATE: '2023-01-22',
				EVENT_NAME: 'Transfer',
				ACTIONS: 2806,
				USERS: 352,
				AMOUNT: 0.1225720111
			},
			{ DATE: '2023-01-22', EVENT_NAME: 'Unwrap', ACTIONS: 4, USERS: 4, AMOUNT: 0.000262208802 },
			{
				DATE: '2023-01-23',
				EVENT_NAME: 'Approval',
				ACTIONS: 922,
				USERS: 277,
				AMOUNT: 5.1990648067555e67
			},
			{ DATE: '2023-01-23', EVENT_NAME: 'Unwrap', ACTIONS: 32, USERS: 16, AMOUNT: 0.073968264 },
			{
				DATE: '2023-01-23',
				EVENT_NAME: 'Transfer',
				ACTIONS: 2649,
				USERS: 371,
				AMOUNT: 0.3119405909
			},
			{ DATE: '2023-01-23', EVENT_NAME: 'Mint', ACTIONS: 40, USERS: 1, AMOUNT: 0.06204754035 },
			{ DATE: '2023-01-24', EVENT_NAME: 'Unwrap', ACTIONS: 10, USERS: 9, AMOUNT: 0.002486149507 },
			{ DATE: '2023-01-24', EVENT_NAME: 'Mint', ACTIONS: 18, USERS: 1, AMOUNT: 0.0111151349 },
			{
				DATE: '2023-01-24',
				EVENT_NAME: 'Transfer',
				ACTIONS: 2468,
				USERS: 373,
				AMOUNT: 0.1086093901
			},
			{
				DATE: '2023-01-24',
				EVENT_NAME: 'Approval',
				ACTIONS: 825,
				USERS: 266,
				AMOUNT: 5.01379746397579e67
			},
			{ DATE: '2023-01-25', EVENT_NAME: 'Unwrap', ACTIONS: 3, USERS: 3, AMOUNT: 0.000248318969 },
			{ DATE: '2023-01-25', EVENT_NAME: 'Mint', ACTIONS: 13, USERS: 1, AMOUNT: 0.00112005005 },
			{
				DATE: '2023-01-25',
				EVENT_NAME: 'Transfer',
				ACTIONS: 2370,
				USERS: 385,
				AMOUNT: 0.07105950831
			},
			{
				DATE: '2023-01-25',
				EVENT_NAME: 'Approval',
				ACTIONS: 878,
				USERS: 280,
				AMOUNT: 5.824342088637e67
			},
			{
				DATE: '2023-01-26',
				EVENT_NAME: 'Approval',
				ACTIONS: 1072,
				USERS: 293,
				AMOUNT: 5.96329259572178e67
			},
			{ DATE: '2023-01-26', EVENT_NAME: 'Mint', ACTIONS: 16, USERS: 1, AMOUNT: 0.001867043876 },
			{ DATE: '2023-01-26', EVENT_NAME: 'Unwrap', ACTIONS: 5, USERS: 4, AMOUNT: 0.001296516365 },
			{
				DATE: '2023-01-26',
				EVENT_NAME: 'Transfer',
				ACTIONS: 2626,
				USERS: 381,
				AMOUNT: 0.1226163479
			},
			{
				DATE: '2023-01-27',
				EVENT_NAME: 'Approval',
				ACTIONS: 920,
				USERS: 261,
				AMOUNT: 5.4190697763064e67
			},
			{ DATE: '2023-01-27', EVENT_NAME: 'Unwrap', ACTIONS: 21, USERS: 10, AMOUNT: 0.06584124715 },
			{
				DATE: '2023-01-27',
				EVENT_NAME: 'Transfer',
				ACTIONS: 3414,
				USERS: 417,
				AMOUNT: 0.2692825912
			},
			{ DATE: '2023-01-27', EVENT_NAME: 'Mint', ACTIONS: 36, USERS: 1, AMOUNT: 0.06115267216 },
			{
				DATE: '2023-01-28',
				EVENT_NAME: 'Transfer',
				ACTIONS: 3442,
				USERS: 344,
				AMOUNT: 0.2063593825
			},
			{
				DATE: '2023-01-28',
				EVENT_NAME: 'Approval',
				ACTIONS: 1045,
				USERS: 239,
				AMOUNT: 4.73589644980623e67
			},
			{ DATE: '2023-01-28', EVENT_NAME: 'Unwrap', ACTIONS: 11, USERS: 10, AMOUNT: 0.0009119405 },
			{ DATE: '2023-01-28', EVENT_NAME: 'Mint', ACTIONS: 15, USERS: 1, AMOUNT: 0.003402213641 },
			{ DATE: '2023-01-29', EVENT_NAME: 'Mint', ACTIONS: 9, USERS: 1, AMOUNT: 0.004920815681 },
			{ DATE: '2023-01-29', EVENT_NAME: 'Unwrap', ACTIONS: 11, USERS: 3, AMOUNT: 0.001487893119 },
			{
				DATE: '2023-01-29',
				EVENT_NAME: 'Approval',
				ACTIONS: 848,
				USERS: 255,
				AMOUNT: 4.95590141935713e67
			},
			{
				DATE: '2023-01-29',
				EVENT_NAME: 'Transfer',
				ACTIONS: 2369,
				USERS: 344,
				AMOUNT: 0.1031357778
			},
			{ DATE: '2023-01-30', EVENT_NAME: 'Unwrap', ACTIONS: 9, USERS: 5, AMOUNT: 0.009191029865 },
			{
				DATE: '2023-01-30',
				EVENT_NAME: 'Transfer',
				ACTIONS: 4461,
				USERS: 440,
				AMOUNT: 0.2125184969
			},
			{
				DATE: '2023-01-30',
				EVENT_NAME: 'Approval',
				ACTIONS: 1205,
				USERS: 302,
				AMOUNT: 7.29490162195092e67
			},
			{ DATE: '2023-01-30', EVENT_NAME: 'Mint', ACTIONS: 24, USERS: 1, AMOUNT: 0.01303467089 },
			{ DATE: '2023-01-31', EVENT_NAME: 'Unwrap', ACTIONS: 22, USERS: 21, AMOUNT: 0.01824131554 },
			{
				DATE: '2023-01-31',
				EVENT_NAME: 'Transfer',
				ACTIONS: 3097,
				USERS: 434,
				AMOUNT: 0.2083113249
			},
			{
				DATE: '2023-01-31',
				EVENT_NAME: 'Approval',
				ACTIONS: 1174,
				USERS: 283,
				AMOUNT: 5.75486683509462e67
			},
			{ DATE: '2023-01-31', EVENT_NAME: 'Mint', ACTIONS: 48, USERS: 1, AMOUNT: 0.03274491849 },
			{
				DATE: '2023-02-01',
				EVENT_NAME: 'Transfer',
				ACTIONS: 4210,
				USERS: 572,
				AMOUNT: 0.4288590012
			},
			{
				DATE: '2023-02-01',
				EVENT_NAME: 'Approval',
				ACTIONS: 1207,
				USERS: 355,
				AMOUNT: 7.06331744347629e67
			},
			{ DATE: '2023-02-01', EVENT_NAME: 'Unwrap', ACTIONS: 84, USERS: 48, AMOUNT: 0.09551911183 },
			{ DATE: '2023-02-01', EVENT_NAME: 'Mint', ACTIONS: 110, USERS: 1, AMOUNT: 0.1025989586 },
			{ DATE: '2023-02-02', EVENT_NAME: 'Unwrap', ACTIONS: 27, USERS: 18, AMOUNT: 0.0560507349 },
			{
				DATE: '2023-02-02',
				EVENT_NAME: 'Transfer',
				ACTIONS: 5455,
				USERS: 553,
				AMOUNT: 0.462648653
			},
			{ DATE: '2023-02-02', EVENT_NAME: 'Mint', ACTIONS: 49, USERS: 1, AMOUNT: 0.06625688867 },
			{
				DATE: '2023-02-02',
				EVENT_NAME: 'Approval',
				ACTIONS: 1800,
				USERS: 394,
				AMOUNT: 8.08228782876467e67
			},
			{ DATE: '2023-02-03', EVENT_NAME: 'Unwrap', ACTIONS: 29, USERS: 19, AMOUNT: 0.03414690063 },
			{
				DATE: '2023-02-03',
				EVENT_NAME: 'Approval',
				ACTIONS: 1545,
				USERS: 332,
				AMOUNT: 7.13279269701868e67
			},
			{
				DATE: '2023-02-03',
				EVENT_NAME: 'Transfer',
				ACTIONS: 4715,
				USERS: 557,
				AMOUNT: 0.4197659215
			},
			{ DATE: '2023-02-03', EVENT_NAME: 'Mint', ACTIONS: 34, USERS: 1, AMOUNT: 0.0254884371 },
			{ DATE: '2023-02-04', EVENT_NAME: 'Mint', ACTIONS: 31, USERS: 1, AMOUNT: 0.01188587066 },
			{ DATE: '2023-02-04', EVENT_NAME: 'Unwrap', ACTIONS: 4, USERS: 2, AMOUNT: 0.000147930279 },
			{
				DATE: '2023-02-04',
				EVENT_NAME: 'Approval',
				ACTIONS: 1175,
				USERS: 393,
				AMOUNT: 6.97068377208643e67
			},
			{
				DATE: '2023-02-04',
				EVENT_NAME: 'Transfer',
				ACTIONS: 2569,
				USERS: 513,
				AMOUNT: 0.1083408901
			},
			{
				DATE: '2023-02-05',
				EVENT_NAME: 'Approval',
				ACTIONS: 1477,
				USERS: 393,
				AMOUNT: 7.48016896473063e67
			},
			{
				DATE: '2023-02-05',
				EVENT_NAME: 'Transfer',
				ACTIONS: 2751,
				USERS: 526,
				AMOUNT: 0.1401091936
			},
			{ DATE: '2023-02-05', EVENT_NAME: 'Unwrap', ACTIONS: 6, USERS: 5, AMOUNT: 0.009463290151 },
			{ DATE: '2023-02-05', EVENT_NAME: 'Mint', ACTIONS: 14, USERS: 1, AMOUNT: 0.008026201133 },
			{ DATE: '2023-02-06', EVENT_NAME: 'Unwrap', ACTIONS: 11, USERS: 6, AMOUNT: 0.02477898288 },
			{
				DATE: '2023-02-06',
				EVENT_NAME: 'Approval',
				ACTIONS: 1074,
				USERS: 305,
				AMOUNT: 6.42646095267105e67
			},
			{
				DATE: '2023-02-06',
				EVENT_NAME: 'Transfer',
				ACTIONS: 2607,
				USERS: 433,
				AMOUNT: 0.299995131
			},
			{ DATE: '2023-02-06', EVENT_NAME: 'Mint', ACTIONS: 29, USERS: 1, AMOUNT: 0.02985971772 },
			{ DATE: '2023-02-07', EVENT_NAME: 'Unwrap', ACTIONS: 6, USERS: 6, AMOUNT: 0.004318137913 },
			{ DATE: '2023-02-07', EVENT_NAME: 'Mint', ACTIONS: 24, USERS: 1, AMOUNT: 0.01646632469 },
			{
				DATE: '2023-02-07',
				EVENT_NAME: 'Approval',
				ACTIONS: 1044,
				USERS: 304,
				AMOUNT: 6.60014908652702e67
			},
			{
				DATE: '2023-02-07',
				EVENT_NAME: 'Transfer',
				ACTIONS: 2537,
				USERS: 421,
				AMOUNT: 0.1615291502
			},
			{
				DATE: '2023-02-08',
				EVENT_NAME: 'Transfer',
				ACTIONS: 2592,
				USERS: 495,
				AMOUNT: 0.4127539101
			},
			{ DATE: '2023-02-08', EVENT_NAME: 'Mint', ACTIONS: 65, USERS: 1, AMOUNT: 0.09062774267 },
			{ DATE: '2023-02-08', EVENT_NAME: 'Unwrap', ACTIONS: 56, USERS: 37, AMOUNT: 0.09689416223 },
			{
				DATE: '2023-02-08',
				EVENT_NAME: 'Approval',
				ACTIONS: 987,
				USERS: 322,
				AMOUNT: 5.95171338679805e67
			},
			{ DATE: '2023-02-09', EVENT_NAME: 'Mint', ACTIONS: 32, USERS: 1, AMOUNT: 0.0383805056 },
			{
				DATE: '2023-02-09',
				EVENT_NAME: 'Approval',
				ACTIONS: 1201,
				USERS: 354,
				AMOUNT: 6.9591045631627e67
			},
			{
				DATE: '2023-02-09',
				EVENT_NAME: 'Transfer',
				ACTIONS: 3296,
				USERS: 503,
				AMOUNT: 0.2954088965
			},
			{ DATE: '2023-02-09', EVENT_NAME: 'Unwrap', ACTIONS: 13, USERS: 11, AMOUNT: 0.02921665897 },
			{ DATE: '2023-02-10', EVENT_NAME: 'Unwrap', ACTIONS: 21, USERS: 15, AMOUNT: 0.02397292493 },
			{
				DATE: '2023-02-10',
				EVENT_NAME: 'Approval',
				ACTIONS: 833,
				USERS: 261,
				AMOUNT: 4.55062910702653e67
			},
			{
				DATE: '2023-02-10',
				EVENT_NAME: 'Transfer',
				ACTIONS: 2085,
				USERS: 435,
				AMOUNT: 0.1500431299
			},
			{ DATE: '2023-02-10', EVENT_NAME: 'Mint', ACTIONS: 26, USERS: 1, AMOUNT: 0.01855184158 },
			{ DATE: '2023-02-11', EVENT_NAME: 'Unwrap', ACTIONS: 13, USERS: 13, AMOUNT: 0.02705420514 },
			{ DATE: '2023-02-11', EVENT_NAME: 'Mint', ACTIONS: 31, USERS: 1, AMOUNT: 0.0215804163 },
			{
				DATE: '2023-02-11',
				EVENT_NAME: 'Transfer',
				ACTIONS: 1676,
				USERS: 384,
				AMOUNT: 0.1404149674
			},
			{
				DATE: '2023-02-11',
				EVENT_NAME: 'Approval',
				ACTIONS: 675,
				USERS: 245,
				AMOUNT: 3.92535182514502e67
			},
			{
				DATE: '2023-02-12',
				EVENT_NAME: 'Transfer',
				ACTIONS: 1943,
				USERS: 404,
				AMOUNT: 0.1474141401
			},
			{ DATE: '2023-02-12', EVENT_NAME: 'Unwrap', ACTIONS: 5, USERS: 5, AMOUNT: 0.01227524913 },
			{ DATE: '2023-02-12', EVENT_NAME: 'Mint', ACTIONS: 20, USERS: 1, AMOUNT: 0.02051229367 },
			{
				DATE: '2023-02-12',
				EVENT_NAME: 'Approval',
				ACTIONS: 733,
				USERS: 255,
				AMOUNT: 5.17590638890803e67
			},
			{
				DATE: '2023-02-13',
				EVENT_NAME: 'Approval',
				ACTIONS: 1001,
				USERS: 310,
				AMOUNT: 7.07489665240002e67
			},
			{ DATE: '2023-02-13', EVENT_NAME: 'Unwrap', ACTIONS: 34, USERS: 25, AMOUNT: 0.04640316309 },
			{ DATE: '2023-02-13', EVENT_NAME: 'Mint', ACTIONS: 41, USERS: 1, AMOUNT: 0.05669838442 },
			{
				DATE: '2023-02-13',
				EVENT_NAME: 'Transfer',
				ACTIONS: 2942,
				USERS: 512,
				AMOUNT: 0.3429870177
			},
			{
				DATE: '2023-02-14',
				EVENT_NAME: 'Approval',
				ACTIONS: 1281,
				USERS: 283,
				AMOUNT: 6.21803519204388e67
			},
			{ DATE: '2023-02-14', EVENT_NAME: 'Unwrap', ACTIONS: 30, USERS: 22, AMOUNT: 0.05946741946 },
			{
				DATE: '2023-02-14',
				EVENT_NAME: 'Transfer',
				ACTIONS: 2957,
				USERS: 491,
				AMOUNT: 0.3721315029
			},
			{ DATE: '2023-02-14', EVENT_NAME: 'Mint', ACTIONS: 39, USERS: 1, AMOUNT: 0.06735950992 },
			{
				DATE: '2023-02-15',
				EVENT_NAME: 'Transfer',
				ACTIONS: 3709,
				USERS: 583,
				AMOUNT: 0.2539130391
			},
			{
				DATE: '2023-02-15',
				EVENT_NAME: 'Approval',
				ACTIONS: 1692,
				USERS: 396,
				AMOUNT: 7.86228285921377e67
			},
			{ DATE: '2023-02-15', EVENT_NAME: 'Mint', ACTIONS: 52, USERS: 1, AMOUNT: 0.03696197341 },
			{ DATE: '2023-02-15', EVENT_NAME: 'Unwrap', ACTIONS: 21, USERS: 12, AMOUNT: 0.03203046001 },
			{
				DATE: '2023-02-16',
				EVENT_NAME: 'Transfer',
				ACTIONS: 5323,
				USERS: 611,
				AMOUNT: 0.4762598721
			},
			{ DATE: '2023-02-16', EVENT_NAME: 'Mint', ACTIONS: 59, USERS: 1, AMOUNT: 0.06107959278 },
			{
				DATE: '2023-02-16',
				EVENT_NAME: 'Approval',
				ACTIONS: 2470,
				USERS: 391,
				AMOUNT: 8.23281754477318e67
			},
			{ DATE: '2023-02-16', EVENT_NAME: 'Unwrap', ACTIONS: 27, USERS: 14, AMOUNT: 0.06439643865 },
			{
				DATE: '2023-02-17',
				EVENT_NAME: 'Transfer',
				ACTIONS: 4038,
				USERS: 616,
				AMOUNT: 0.2799199545
			},
			{ DATE: '2023-02-17', EVENT_NAME: 'Unwrap', ACTIONS: 21, USERS: 17, AMOUNT: 0.03778760487 },
			{
				DATE: '2023-02-17',
				EVENT_NAME: 'Approval',
				ACTIONS: 1806,
				USERS: 399,
				AMOUNT: 9.37915922822261e67
			},
			{ DATE: '2023-02-17', EVENT_NAME: 'Mint', ACTIONS: 47, USERS: 1, AMOUNT: 0.03982902239 },
			{ DATE: '2023-02-18', EVENT_NAME: 'Mint', ACTIONS: 18, USERS: 1, AMOUNT: 0.04508175951 },
			{
				DATE: '2023-02-18',
				EVENT_NAME: 'Transfer',
				ACTIONS: 3223,
				USERS: 625,
				AMOUNT: 0.2395377752
			},
			{ DATE: '2023-02-18', EVENT_NAME: 'Unwrap', ACTIONS: 11, USERS: 7, AMOUNT: 0.0150010081 },
			{
				DATE: '2023-02-18',
				EVENT_NAME: 'Approval',
				ACTIONS: 1680,
				USERS: 477,
				AMOUNT: 1.01318078082652e68
			},
			{
				DATE: '2023-02-19',
				EVENT_NAME: 'Transfer',
				ACTIONS: 4169,
				USERS: 621,
				AMOUNT: 0.2200443352
			},
			{ DATE: '2023-02-19', EVENT_NAME: 'Mint', ACTIONS: 17, USERS: 1, AMOUNT: 0.03798422769 },
			{ DATE: '2023-02-19', EVENT_NAME: 'Unwrap', ACTIONS: 8, USERS: 4, AMOUNT: 0.0153390322 },
			{
				DATE: '2023-02-19',
				EVENT_NAME: 'Approval',
				ACTIONS: 2185,
				USERS: 440,
				AMOUNT: 9.39073843714634e67
			},
			{ DATE: '2023-02-20', EVENT_NAME: 'Unwrap', ACTIONS: 13, USERS: 9, AMOUNT: 0.02432527064 },
			{
				DATE: '2023-02-20',
				EVENT_NAME: 'Transfer',
				ACTIONS: 4844,
				USERS: 666,
				AMOUNT: 0.3229641241
			},
			{ DATE: '2023-02-20', EVENT_NAME: 'Mint', ACTIONS: 19, USERS: 1, AMOUNT: 0.01309047805 },
			{
				DATE: '2023-02-20',
				EVENT_NAME: 'Approval',
				ACTIONS: 2078,
				USERS: 488,
				AMOUNT: 9.923382047638e67
			},
			{ DATE: '2023-02-21', EVENT_NAME: 'Unwrap', ACTIONS: 13, USERS: 8, AMOUNT: 0.02683517634 },
			{ DATE: '2023-02-21', EVENT_NAME: 'Mint', ACTIONS: 28, USERS: 1, AMOUNT: 0.01420843288 },
			{
				DATE: '2023-02-21',
				EVENT_NAME: 'Transfer',
				ACTIONS: 6007,
				USERS: 619,
				AMOUNT: 0.2894747112
			},
			{
				DATE: '2023-02-21',
				EVENT_NAME: 'Approval',
				ACTIONS: 2482,
				USERS: 446,
				AMOUNT: 1.01433870171889e68
			},
			{ DATE: '2023-02-22', EVENT_NAME: 'Mint', ACTIONS: 24, USERS: 1, AMOUNT: 0.007991282681 },
			{
				DATE: '2023-02-22',
				EVENT_NAME: 'Transfer',
				ACTIONS: 4612,
				USERS: 591,
				AMOUNT: 0.2546799628
			},
			{ DATE: '2023-02-22', EVENT_NAME: 'Unwrap', ACTIONS: 6, USERS: 5, AMOUNT: 0.01160329696 },
			{
				DATE: '2023-02-22',
				EVENT_NAME: 'Approval',
				ACTIONS: 1458,
				USERS: 418,
				AMOUNT: 8.51071855894274e67
			},
			{ DATE: '2023-02-23', EVENT_NAME: 'Unwrap', ACTIONS: 15, USERS: 6, AMOUNT: 0.03834963763 },
			{ DATE: '2023-02-23', EVENT_NAME: 'Mint', ACTIONS: 31, USERS: 1, AMOUNT: 0.05425394147 },
			{
				DATE: '2023-02-23',
				EVENT_NAME: 'Approval',
				ACTIONS: 1518,
				USERS: 351,
				AMOUNT: 7.72333235212899e67
			},
			{
				DATE: '2023-02-23',
				EVENT_NAME: 'Transfer',
				ACTIONS: 3660,
				USERS: 512,
				AMOUNT: 0.3649483671
			},
			{ DATE: '2023-02-24', EVENT_NAME: 'Mint', ACTIONS: 14, USERS: 1, AMOUNT: 0.0116811349 },
			{ DATE: '2023-02-24', EVENT_NAME: 'Unwrap', ACTIONS: 11, USERS: 9, AMOUNT: 0.02868078977 },
			{
				DATE: '2023-02-24',
				EVENT_NAME: 'Approval',
				ACTIONS: 1062,
				USERS: 327,
				AMOUNT: 6.03276784926417e67
			},
			{
				DATE: '2023-02-24',
				EVENT_NAME: 'Transfer',
				ACTIONS: 2712,
				USERS: 498,
				AMOUNT: 0.2381455095
			},
			{
				DATE: '2023-02-25',
				EVENT_NAME: 'Approval',
				ACTIONS: 1173,
				USERS: 342,
				AMOUNT: 6.31066886343373e67
			},
			{
				DATE: '2023-02-25',
				EVENT_NAME: 'Transfer',
				ACTIONS: 2369,
				USERS: 512,
				AMOUNT: 0.1528602543
			},
			{ DATE: '2023-02-25', EVENT_NAME: 'Mint', ACTIONS: 23, USERS: 1, AMOUNT: 0.02819103659 },
			{ DATE: '2023-02-25', EVENT_NAME: 'Unwrap', ACTIONS: 6, USERS: 5, AMOUNT: 0.01764704553 },
			{
				DATE: '2023-02-26',
				EVENT_NAME: 'Approval',
				ACTIONS: 995,
				USERS: 330,
				AMOUNT: 6.13698072957776e67
			},
			{ DATE: '2023-02-26', EVENT_NAME: 'Unwrap', ACTIONS: 9, USERS: 4, AMOUNT: 0.03362052644 },
			{ DATE: '2023-02-26', EVENT_NAME: 'Mint', ACTIONS: 14, USERS: 1, AMOUNT: 0.03608079536 },
			{
				DATE: '2023-02-26',
				EVENT_NAME: 'Transfer',
				ACTIONS: 1825,
				USERS: 476,
				AMOUNT: 0.230904801
			},
			{ DATE: '2023-02-27', EVENT_NAME: 'Mint', ACTIONS: 10, USERS: 1, AMOUNT: 0.06700516753 },
			{
				DATE: '2023-02-27',
				EVENT_NAME: 'Transfer',
				ACTIONS: 2216,
				USERS: 508,
				AMOUNT: 0.4334341231
			},
			{
				DATE: '2023-02-27',
				EVENT_NAME: 'Approval',
				ACTIONS: 1106,
				USERS: 359,
				AMOUNT: 6.82015405607792e67
			},
			{ DATE: '2023-02-27', EVENT_NAME: 'Unwrap', ACTIONS: 12, USERS: 2, AMOUNT: 0.06089894407 },
			{ DATE: '2023-02-28', EVENT_NAME: 'Unwrap', ACTIONS: 18, USERS: 6, AMOUNT: 0.07253444377 },
			{ DATE: '2023-02-28', EVENT_NAME: 'Mint', ACTIONS: 15, USERS: 1, AMOUNT: 0.07099670532 },
			{
				DATE: '2023-02-28',
				EVENT_NAME: 'Transfer',
				ACTIONS: 2356,
				USERS: 485,
				AMOUNT: 0.4612575067
			},
			{
				DATE: '2023-02-28',
				EVENT_NAME: 'Approval',
				ACTIONS: 1109,
				USERS: 358,
				AMOUNT: 5.75486683509462e67
			},
			{ DATE: '2023-03-01', EVENT_NAME: 'Unwrap', ACTIONS: 16, USERS: 14, AMOUNT: 0.02577948484 },
			{
				DATE: '2023-03-01',
				EVENT_NAME: 'Transfer',
				ACTIONS: 2220,
				USERS: 501,
				AMOUNT: 0.1883906939
			},
			{ DATE: '2023-03-01', EVENT_NAME: 'Mint', ACTIONS: 27, USERS: 1, AMOUNT: 0.01031294844 },
			{
				DATE: '2023-03-01',
				EVENT_NAME: 'Approval',
				ACTIONS: 977,
				USERS: 336,
				AMOUNT: 6.3338272812812e67
			},
			{ DATE: '2023-03-02', EVENT_NAME: 'Unwrap', ACTIONS: 6, USERS: 6, AMOUNT: 0.007385817209 },
			{ DATE: '2023-03-02', EVENT_NAME: 'Mint', ACTIONS: 19, USERS: 1, AMOUNT: 0.2011182045 },
			{
				DATE: '2023-03-02',
				EVENT_NAME: 'Approval',
				ACTIONS: 1028,
				USERS: 353,
				AMOUNT: 6.39172332589985e67
			},
			{
				DATE: '2023-03-02',
				EVENT_NAME: 'Transfer',
				ACTIONS: 2181,
				USERS: 517,
				AMOUNT: 0.6751549596
			},
			{
				DATE: '2023-03-03',
				EVENT_NAME: 'Transfer',
				ACTIONS: 2835,
				USERS: 457,
				AMOUNT: 0.6905832921
			},
			{
				DATE: '2023-03-03',
				EVENT_NAME: 'Approval',
				ACTIONS: 992,
				USERS: 294,
				AMOUNT: 5.21064401567923e67
			},
			{ DATE: '2023-03-03', EVENT_NAME: 'Unwrap', ACTIONS: 13, USERS: 10, AMOUNT: 0.0576513273 },
			{ DATE: '2023-03-03', EVENT_NAME: 'Mint', ACTIONS: 23, USERS: 1, AMOUNT: 0.1620246643 },
			{
				DATE: '2023-03-04',
				EVENT_NAME: 'Transfer',
				ACTIONS: 2019,
				USERS: 506,
				AMOUNT: 0.100424364
			},
			{ DATE: '2023-03-04', EVENT_NAME: 'Unwrap', ACTIONS: 10, USERS: 8, AMOUNT: 0.03116770629 },
			{
				DATE: '2023-03-04',
				EVENT_NAME: 'Approval',
				ACTIONS: 1093,
				USERS: 353,
				AMOUNT: 6.68120354899314e67
			},
			{ DATE: '2023-03-04', EVENT_NAME: 'Mint', ACTIONS: 21, USERS: 1, AMOUNT: 0.000616891472 },
			{
				DATE: '2023-03-05',
				EVENT_NAME: 'Transfer',
				ACTIONS: 1529,
				USERS: 414,
				AMOUNT: 0.3620526358
			},
			{
				DATE: '2023-03-05',
				EVENT_NAME: 'Approval',
				ACTIONS: 695,
				USERS: 261,
				AMOUNT: 4.18009442146711e67
			},
			{ DATE: '2023-03-05', EVENT_NAME: 'Unwrap', ACTIONS: 13, USERS: 9, AMOUNT: 0.05101339787 },
			{ DATE: '2023-03-05', EVENT_NAME: 'Mint', ACTIONS: 16, USERS: 1, AMOUNT: 0.07347872548 },
			{
				DATE: '2023-03-06',
				EVENT_NAME: 'Transfer',
				ACTIONS: 2480,
				USERS: 461,
				AMOUNT: 0.4538560751
			},
			{
				DATE: '2023-03-06',
				EVENT_NAME: 'Approval',
				ACTIONS: 934,
				USERS: 305,
				AMOUNT: 5.77802525294208e67
			},
			{ DATE: '2023-03-06', EVENT_NAME: 'Unwrap', ACTIONS: 25, USERS: 16, AMOUNT: 0.06063278772 },
			{ DATE: '2023-03-06', EVENT_NAME: 'Mint', ACTIONS: 21, USERS: 1, AMOUNT: 0.08848393776 },
			{
				DATE: '2023-03-07',
				EVENT_NAME: 'Transfer',
				ACTIONS: 3394,
				USERS: 503,
				AMOUNT: 0.8262494497
			},
			{ DATE: '2023-03-07', EVENT_NAME: 'Unwrap', ACTIONS: 36, USERS: 18, AMOUNT: 0.1139020286 },
			{
				DATE: '2023-03-07',
				EVENT_NAME: 'Approval',
				ACTIONS: 1217,
				USERS: 322,
				AMOUNT: 6.32224807235746e67
			},
			{ DATE: '2023-03-07', EVENT_NAME: 'Mint', ACTIONS: 26, USERS: 1, AMOUNT: 0.1192265474 },
			{ DATE: '2023-03-08', EVENT_NAME: 'Unwrap', ACTIONS: 20, USERS: 11, AMOUNT: 0.1216248746 },
			{
				DATE: '2023-03-08',
				EVENT_NAME: 'Approval',
				ACTIONS: 1254,
				USERS: 363,
				AMOUNT: 7.6538570985866e67
			},
			{
				DATE: '2023-03-08',
				EVENT_NAME: 'Transfer',
				ACTIONS: 3199,
				USERS: 514,
				AMOUNT: 0.7172009612
			},
			{ DATE: '2023-03-08', EVENT_NAME: 'Mint', ACTIONS: 20, USERS: 1, AMOUNT: 0.1355687237 },
			{
				DATE: '2023-03-09',
				EVENT_NAME: 'Transfer',
				ACTIONS: 3440,
				USERS: 577,
				AMOUNT: 0.8080685784
			},
			{ DATE: '2023-03-09', EVENT_NAME: 'Mint', ACTIONS: 27, USERS: 1, AMOUNT: 0.08230506166 },
			{ DATE: '2023-03-09', EVENT_NAME: 'Unwrap', ACTIONS: 25, USERS: 15, AMOUNT: 0.1558403725 },
			{
				DATE: '2023-03-09',
				EVENT_NAME: 'Approval',
				ACTIONS: 1338,
				USERS: 368,
				AMOUNT: 7.2138471594848e67
			},
			{ DATE: '2023-03-10', EVENT_NAME: 'Unwrap', ACTIONS: 8, USERS: 8, AMOUNT: 0.01304082952 },
			{
				DATE: '2023-03-10',
				EVENT_NAME: 'Approval',
				ACTIONS: 2299,
				USERS: 468,
				AMOUNT: 9.34442160145142e67
			},
			{
				DATE: '2023-03-10',
				EVENT_NAME: 'Transfer',
				ACTIONS: 5108,
				USERS: 692,
				AMOUNT: 0.3045840665
			},
			{ DATE: '2023-03-10', EVENT_NAME: 'Mint', ACTIONS: 26, USERS: 1, AMOUNT: 0.000855756171 },
			{ DATE: '2023-03-11', EVENT_NAME: 'Unwrap', ACTIONS: 65, USERS: 43, AMOUNT: 0.01879121256 },
			{
				DATE: '2023-03-11',
				EVENT_NAME: 'Approval',
				ACTIONS: 2957,
				USERS: 608,
				AMOUNT: 1.57940409719699e68
			},
			{
				DATE: '2023-03-11',
				EVENT_NAME: 'Transfer',
				ACTIONS: 8415,
				USERS: 1028,
				AMOUNT: 0.3163342891
			},
			{ DATE: '2023-03-11', EVENT_NAME: 'Mint', ACTIONS: 20, USERS: 1, AMOUNT: 0.001148806946 },
			{ DATE: '2023-03-12', EVENT_NAME: 'Unwrap', ACTIONS: 20, USERS: 16, AMOUNT: 0.04117443521 },
			{
				DATE: '2023-03-12',
				EVENT_NAME: 'Approval',
				ACTIONS: 1847,
				USERS: 470,
				AMOUNT: 1.0293916767935e68
			},
			{ DATE: '2023-03-12', EVENT_NAME: 'Mint', ACTIONS: 21, USERS: 1, AMOUNT: 0.000558798104 },
			{
				DATE: '2023-03-12',
				EVENT_NAME: 'Transfer',
				ACTIONS: 4702,
				USERS: 674,
				AMOUNT: 0.2869819345
			},
			{
				DATE: '2023-03-13',
				EVENT_NAME: 'Transfer',
				ACTIONS: 5247,
				USERS: 746,
				AMOUNT: 0.6144924568
			},
			{ DATE: '2023-03-13', EVENT_NAME: 'Mint', ACTIONS: 22, USERS: 1, AMOUNT: 0.005508030279 },
			{ DATE: '2023-03-13', EVENT_NAME: 'Unwrap', ACTIONS: 24, USERS: 14, AMOUNT: 0.13562978 },
			{
				DATE: '2023-03-13',
				EVENT_NAME: 'Approval',
				ACTIONS: 1847,
				USERS: 530,
				AMOUNT: 1.09539316418501e68
			},
			{ DATE: '2023-03-14', EVENT_NAME: 'Unwrap', ACTIONS: 22, USERS: 14, AMOUNT: 0.02474711656 },
			{
				DATE: '2023-03-14',
				EVENT_NAME: 'Approval',
				ACTIONS: 1894,
				USERS: 495,
				AMOUNT: 1.08381395526128e68
			},
			{
				DATE: '2023-03-14',
				EVENT_NAME: 'Transfer',
				ACTIONS: 5448,
				USERS: 708,
				AMOUNT: 0.2634577856
			},
			{ DATE: '2023-03-14', EVENT_NAME: 'Mint', ACTIONS: 12, USERS: 1, AMOUNT: 0.013089182 },
			{ DATE: '2023-03-15', EVENT_NAME: 'Mint', ACTIONS: 1, USERS: 1, AMOUNT: 0.000004783263 },
			{ DATE: '2023-03-15', EVENT_NAME: 'Unwrap', ACTIONS: 3, USERS: 2, AMOUNT: 0.000020155332 },
			{
				DATE: '2023-03-15',
				EVENT_NAME: 'Transfer',
				ACTIONS: 446,
				USERS: 124,
				AMOUNT: 0.01548725767
			},
			{
				DATE: '2023-03-15',
				EVENT_NAME: 'Approval',
				ACTIONS: 151,
				USERS: 49,
				AMOUNT: 8.5686146035614e66
			}
		],
		TRANSACTIONS_HISTORY: [
			{
				DATE: '2021-01-14',
				Transactions: 1,
				Volume: 0,
				Fees: 0,
				'Cumulative Transactions': 1,
				'Cumulative Volume': 0,
				'Cumulative Fees': 0
			},
			{
				DATE: '2021-01-18',
				Transactions: 1,
				Volume: 0,
				Fees: 0,
				'Cumulative Transactions': 2,
				'Cumulative Volume': 0,
				'Cumulative Fees': 0
			},
			{
				DATE: '2021-01-24',
				Transactions: 1,
				Volume: 0,
				Fees: 0,
				'Cumulative Transactions': 3,
				'Cumulative Volume': 0,
				'Cumulative Fees': 0
			},
			{
				DATE: '2021-02-02',
				Transactions: 20,
				Volume: 6,
				Fees: 2,
				'Cumulative Transactions': 23,
				'Cumulative Volume': 6,
				'Cumulative Fees': 2
			},
			{
				DATE: '2021-02-03',
				Transactions: 1037,
				Volume: 54212,
				Fees: 73,
				'Cumulative Transactions': 1060,
				'Cumulative Volume': 54218,
				'Cumulative Fees': 75
			},
			{
				DATE: '2021-02-04',
				Transactions: 633,
				Volume: 60093,
				Fees: 43,
				'Cumulative Transactions': 1693,
				'Cumulative Volume': 114311,
				'Cumulative Fees': 118
			},
			{
				DATE: '2021-02-05',
				Transactions: 309,
				Volume: 29877,
				Fees: 22,
				'Cumulative Transactions': 2002,
				'Cumulative Volume': 144188,
				'Cumulative Fees': 140
			},
			{
				DATE: '2021-02-06',
				Transactions: 201,
				Volume: 22007,
				Fees: 14,
				'Cumulative Transactions': 2203,
				'Cumulative Volume': 166195,
				'Cumulative Fees': 154
			},
			{
				DATE: '2021-02-07',
				Transactions: 315,
				Volume: 33432,
				Fees: 24,
				'Cumulative Transactions': 2518,
				'Cumulative Volume': 199627,
				'Cumulative Fees': 178
			},
			{
				DATE: '2021-02-08',
				Transactions: 195,
				Volume: 20021,
				Fees: 20,
				'Cumulative Transactions': 2713,
				'Cumulative Volume': 219648,
				'Cumulative Fees': 198
			},
			{
				DATE: '2021-02-09',
				Transactions: 799,
				Volume: 29209,
				Fees: 49,
				'Cumulative Transactions': 3512,
				'Cumulative Volume': 248857,
				'Cumulative Fees': 247
			},
			{
				DATE: '2021-02-10',
				Transactions: 600,
				Volume: 39732,
				Fees: 30,
				'Cumulative Transactions': 4112,
				'Cumulative Volume': 288589,
				'Cumulative Fees': 277
			},
			{
				DATE: '2021-02-11',
				Transactions: 7,
				Volume: 63,
				Fees: 0,
				'Cumulative Transactions': 4119,
				'Cumulative Volume': 288652,
				'Cumulative Fees': 277
			},
			{
				DATE: '2021-02-12',
				Transactions: 299,
				Volume: 25448,
				Fees: 14,
				'Cumulative Transactions': 4418,
				'Cumulative Volume': 314100,
				'Cumulative Fees': 291
			},
			{
				DATE: '2021-02-13',
				Transactions: 177,
				Volume: 3678,
				Fees: 9,
				'Cumulative Transactions': 4595,
				'Cumulative Volume': 317778,
				'Cumulative Fees': 300
			},
			{
				DATE: '2021-02-14',
				Transactions: 457,
				Volume: 17989,
				Fees: 25,
				'Cumulative Transactions': 5052,
				'Cumulative Volume': 335767,
				'Cumulative Fees': 325
			},
			{
				DATE: '2021-02-15',
				Transactions: 649,
				Volume: 36890,
				Fees: 33,
				'Cumulative Transactions': 5701,
				'Cumulative Volume': 372657,
				'Cumulative Fees': 358
			},
			{
				DATE: '2021-02-16',
				Transactions: 479,
				Volume: 16637,
				Fees: 23,
				'Cumulative Transactions': 6180,
				'Cumulative Volume': 389294,
				'Cumulative Fees': 381
			},
			{
				DATE: '2021-02-17',
				Transactions: 707,
				Volume: 24323,
				Fees: 35,
				'Cumulative Transactions': 6887,
				'Cumulative Volume': 413617,
				'Cumulative Fees': 416
			},
			{
				DATE: '2021-02-18',
				Transactions: 737,
				Volume: 45793,
				Fees: 37,
				'Cumulative Transactions': 7624,
				'Cumulative Volume': 459410,
				'Cumulative Fees': 453
			},
			{
				DATE: '2021-02-19',
				Transactions: 636,
				Volume: 26096,
				Fees: 32,
				'Cumulative Transactions': 8260,
				'Cumulative Volume': 485506,
				'Cumulative Fees': 485
			},
			{
				DATE: '2021-02-20',
				Transactions: 486,
				Volume: 20523,
				Fees: 25,
				'Cumulative Transactions': 8746,
				'Cumulative Volume': 506029,
				'Cumulative Fees': 510
			},
			{
				DATE: '2021-02-21',
				Transactions: 413,
				Volume: 37549,
				Fees: 19,
				'Cumulative Transactions': 9159,
				'Cumulative Volume': 543578,
				'Cumulative Fees': 529
			},
			{
				DATE: '2021-02-22',
				Transactions: 456,
				Volume: 84101,
				Fees: 23,
				'Cumulative Transactions': 9615,
				'Cumulative Volume': 627679,
				'Cumulative Fees': 552
			},
			{
				DATE: '2021-02-23',
				Transactions: 392,
				Volume: 92791,
				Fees: 21,
				'Cumulative Transactions': 10007,
				'Cumulative Volume': 720470,
				'Cumulative Fees': 573
			},
			{
				DATE: '2021-02-24',
				Transactions: 275,
				Volume: 25623,
				Fees: 13,
				'Cumulative Transactions': 10282,
				'Cumulative Volume': 746093,
				'Cumulative Fees': 586
			},
			{
				DATE: '2021-02-25',
				Transactions: 557,
				Volume: 39549,
				Fees: 31,
				'Cumulative Transactions': 10839,
				'Cumulative Volume': 785642,
				'Cumulative Fees': 617
			},
			{
				DATE: '2021-02-26',
				Transactions: 425,
				Volume: 38351,
				Fees: 21,
				'Cumulative Transactions': 11264,
				'Cumulative Volume': 823993,
				'Cumulative Fees': 638
			},
			{
				DATE: '2021-02-27',
				Transactions: 349,
				Volume: 29754,
				Fees: 17,
				'Cumulative Transactions': 11613,
				'Cumulative Volume': 853747,
				'Cumulative Fees': 655
			},
			{
				DATE: '2021-02-28',
				Transactions: 555,
				Volume: 56494,
				Fees: 25,
				'Cumulative Transactions': 12168,
				'Cumulative Volume': 910241,
				'Cumulative Fees': 680
			},
			{
				DATE: '2021-03-01',
				Transactions: 541,
				Volume: 39437,
				Fees: 30,
				'Cumulative Transactions': 12709,
				'Cumulative Volume': 949678,
				'Cumulative Fees': 710
			},
			{
				DATE: '2021-03-02',
				Transactions: 550,
				Volume: 85217,
				Fees: 28,
				'Cumulative Transactions': 13259,
				'Cumulative Volume': 1034895,
				'Cumulative Fees': 738
			},
			{
				DATE: '2021-03-03',
				Transactions: 799,
				Volume: 21235,
				Fees: 46,
				'Cumulative Transactions': 14058,
				'Cumulative Volume': 1056130,
				'Cumulative Fees': 784
			},
			{
				DATE: '2021-03-04',
				Transactions: 863,
				Volume: 49724,
				Fees: 43,
				'Cumulative Transactions': 14921,
				'Cumulative Volume': 1105854,
				'Cumulative Fees': 827
			},
			{
				DATE: '2021-03-05',
				Transactions: 444,
				Volume: 41003,
				Fees: 31,
				'Cumulative Transactions': 15365,
				'Cumulative Volume': 1146857,
				'Cumulative Fees': 858
			},
			{
				DATE: '2021-03-06',
				Transactions: 354,
				Volume: 18677,
				Fees: 31,
				'Cumulative Transactions': 15719,
				'Cumulative Volume': 1165534,
				'Cumulative Fees': 889
			},
			{
				DATE: '2021-03-07',
				Transactions: 480,
				Volume: 46379,
				Fees: 24,
				'Cumulative Transactions': 16199,
				'Cumulative Volume': 1211913,
				'Cumulative Fees': 913
			},
			{
				DATE: '2021-03-08',
				Transactions: 605,
				Volume: 149935,
				Fees: 31,
				'Cumulative Transactions': 16804,
				'Cumulative Volume': 1361848,
				'Cumulative Fees': 944
			},
			{
				DATE: '2021-03-09',
				Transactions: 924,
				Volume: 158053,
				Fees: 48,
				'Cumulative Transactions': 17728,
				'Cumulative Volume': 1519901,
				'Cumulative Fees': 992
			},
			{
				DATE: '2021-03-10',
				Transactions: 693,
				Volume: 54376,
				Fees: 44,
				'Cumulative Transactions': 18421,
				'Cumulative Volume': 1574277,
				'Cumulative Fees': 1036
			},
			{
				DATE: '2021-03-11',
				Transactions: 731,
				Volume: 45873,
				Fees: 45,
				'Cumulative Transactions': 19152,
				'Cumulative Volume': 1620150,
				'Cumulative Fees': 1081
			},
			{
				DATE: '2021-03-12',
				Transactions: 870,
				Volume: 49720,
				Fees: 48,
				'Cumulative Transactions': 20022,
				'Cumulative Volume': 1669870,
				'Cumulative Fees': 1129
			},
			{
				DATE: '2021-03-13',
				Transactions: 628,
				Volume: 42023,
				Fees: 43,
				'Cumulative Transactions': 20650,
				'Cumulative Volume': 1711893,
				'Cumulative Fees': 1172
			},
			{
				DATE: '2021-03-14',
				Transactions: 1048,
				Volume: 52222,
				Fees: 56,
				'Cumulative Transactions': 21698,
				'Cumulative Volume': 1764115,
				'Cumulative Fees': 1228
			},
			{
				DATE: '2021-03-15',
				Transactions: 678,
				Volume: 42519,
				Fees: 38,
				'Cumulative Transactions': 22376,
				'Cumulative Volume': 1806634,
				'Cumulative Fees': 1266
			},
			{
				DATE: '2021-03-16',
				Transactions: 884,
				Volume: 61586,
				Fees: 48,
				'Cumulative Transactions': 23260,
				'Cumulative Volume': 1868220,
				'Cumulative Fees': 1314
			},
			{
				DATE: '2021-03-17',
				Transactions: 945,
				Volume: 39493,
				Fees: 49,
				'Cumulative Transactions': 24205,
				'Cumulative Volume': 1907713,
				'Cumulative Fees': 1363
			},
			{
				DATE: '2021-03-18',
				Transactions: 1223,
				Volume: 63103,
				Fees: 76,
				'Cumulative Transactions': 25428,
				'Cumulative Volume': 1970816,
				'Cumulative Fees': 1439
			},
			{
				DATE: '2021-03-19',
				Transactions: 1226,
				Volume: 53563,
				Fees: 67,
				'Cumulative Transactions': 26654,
				'Cumulative Volume': 2024379,
				'Cumulative Fees': 1506
			},
			{
				DATE: '2021-03-20',
				Transactions: 990,
				Volume: 75898,
				Fees: 57,
				'Cumulative Transactions': 27644,
				'Cumulative Volume': 2100277,
				'Cumulative Fees': 1563
			},
			{
				DATE: '2021-03-21',
				Transactions: 770,
				Volume: 27476,
				Fees: 58,
				'Cumulative Transactions': 28414,
				'Cumulative Volume': 2127753,
				'Cumulative Fees': 1621
			},
			{
				DATE: '2021-03-22',
				Transactions: 1234,
				Volume: 68224,
				Fees: 93,
				'Cumulative Transactions': 29648,
				'Cumulative Volume': 2195977,
				'Cumulative Fees': 1714
			},
			{
				DATE: '2021-03-23',
				Transactions: 762,
				Volume: 56325,
				Fees: 53,
				'Cumulative Transactions': 30410,
				'Cumulative Volume': 2252302,
				'Cumulative Fees': 1767
			},
			{
				DATE: '2021-03-24',
				Transactions: 541,
				Volume: 8048,
				Fees: 30,
				'Cumulative Transactions': 30951,
				'Cumulative Volume': 2260350,
				'Cumulative Fees': 1797
			},
			{
				DATE: '2021-03-25',
				Transactions: 543,
				Volume: 8670,
				Fees: 33,
				'Cumulative Transactions': 31494,
				'Cumulative Volume': 2269020,
				'Cumulative Fees': 1830
			},
			{
				DATE: '2021-03-26',
				Transactions: 497,
				Volume: 18666,
				Fees: 25,
				'Cumulative Transactions': 31991,
				'Cumulative Volume': 2287686,
				'Cumulative Fees': 1855
			},
			{
				DATE: '2021-03-27',
				Transactions: 530,
				Volume: 13719,
				Fees: 27,
				'Cumulative Transactions': 32521,
				'Cumulative Volume': 2301405,
				'Cumulative Fees': 1882
			},
			{
				DATE: '2021-03-28',
				Transactions: 4223,
				Volume: 124742,
				Fees: 257,
				'Cumulative Transactions': 36744,
				'Cumulative Volume': 2426147,
				'Cumulative Fees': 2139
			},
			{
				DATE: '2021-03-29',
				Transactions: 2035,
				Volume: 39462,
				Fees: 142,
				'Cumulative Transactions': 38779,
				'Cumulative Volume': 2465609,
				'Cumulative Fees': 2281
			},
			{
				DATE: '2021-03-30',
				Transactions: 1223,
				Volume: 42241,
				Fees: 77,
				'Cumulative Transactions': 40002,
				'Cumulative Volume': 2507850,
				'Cumulative Fees': 2358
			},
			{
				DATE: '2021-03-31',
				Transactions: 880,
				Volume: 32034,
				Fees: 50,
				'Cumulative Transactions': 40882,
				'Cumulative Volume': 2539884,
				'Cumulative Fees': 2408
			},
			{
				DATE: '2021-04-01',
				Transactions: 2617,
				Volume: 30484,
				Fees: 96,
				'Cumulative Transactions': 43499,
				'Cumulative Volume': 2570368,
				'Cumulative Fees': 2504
			},
			{
				DATE: '2021-04-02',
				Transactions: 1513,
				Volume: 37245,
				Fees: 54,
				'Cumulative Transactions': 45012,
				'Cumulative Volume': 2607613,
				'Cumulative Fees': 2558
			},
			{
				DATE: '2021-04-03',
				Transactions: 1445,
				Volume: 54915,
				Fees: 50,
				'Cumulative Transactions': 46457,
				'Cumulative Volume': 2662528,
				'Cumulative Fees': 2608
			},
			{
				DATE: '2021-04-04',
				Transactions: 1214,
				Volume: 20384,
				Fees: 40,
				'Cumulative Transactions': 47671,
				'Cumulative Volume': 2682912,
				'Cumulative Fees': 2648
			},
			{
				DATE: '2021-04-05',
				Transactions: 1771,
				Volume: 32431,
				Fees: 60,
				'Cumulative Transactions': 49442,
				'Cumulative Volume': 2715343,
				'Cumulative Fees': 2708
			},
			{
				DATE: '2021-04-06',
				Transactions: 1375,
				Volume: 41835,
				Fees: 62,
				'Cumulative Transactions': 50817,
				'Cumulative Volume': 2757178,
				'Cumulative Fees': 2770
			},
			{
				DATE: '2021-04-07',
				Transactions: 1053,
				Volume: 24307,
				Fees: 52,
				'Cumulative Transactions': 51870,
				'Cumulative Volume': 2781485,
				'Cumulative Fees': 2822
			},
			{
				DATE: '2021-04-08',
				Transactions: 989,
				Volume: 13400,
				Fees: 38,
				'Cumulative Transactions': 52859,
				'Cumulative Volume': 2794885,
				'Cumulative Fees': 2860
			},
			{
				DATE: '2021-04-09',
				Transactions: 887,
				Volume: 12733,
				Fees: 30,
				'Cumulative Transactions': 53746,
				'Cumulative Volume': 2807618,
				'Cumulative Fees': 2890
			},
			{
				DATE: '2021-04-10',
				Transactions: 626,
				Volume: 12023,
				Fees: 20,
				'Cumulative Transactions': 54372,
				'Cumulative Volume': 2819641,
				'Cumulative Fees': 2910
			},
			{
				DATE: '2021-04-11',
				Transactions: 520,
				Volume: 5612,
				Fees: 17,
				'Cumulative Transactions': 54892,
				'Cumulative Volume': 2825253,
				'Cumulative Fees': 2927
			},
			{
				DATE: '2021-04-12',
				Transactions: 740,
				Volume: 23737,
				Fees: 26,
				'Cumulative Transactions': 55632,
				'Cumulative Volume': 2848990,
				'Cumulative Fees': 2953
			},
			{
				DATE: '2021-04-13',
				Transactions: 494,
				Volume: 12021,
				Fees: 16,
				'Cumulative Transactions': 56126,
				'Cumulative Volume': 2861011,
				'Cumulative Fees': 2969
			},
			{
				DATE: '2021-04-14',
				Transactions: 829,
				Volume: 29984,
				Fees: 27,
				'Cumulative Transactions': 56955,
				'Cumulative Volume': 2890995,
				'Cumulative Fees': 2996
			},
			{
				DATE: '2021-04-15',
				Transactions: 564,
				Volume: 6251,
				Fees: 30,
				'Cumulative Transactions': 57519,
				'Cumulative Volume': 2897246,
				'Cumulative Fees': 3026
			},
			{
				DATE: '2021-04-16',
				Transactions: 445,
				Volume: 4317,
				Fees: 23,
				'Cumulative Transactions': 57964,
				'Cumulative Volume': 2901563,
				'Cumulative Fees': 3049
			},
			{
				DATE: '2021-04-17',
				Transactions: 471,
				Volume: 54550,
				Fees: 23,
				'Cumulative Transactions': 58435,
				'Cumulative Volume': 2956113,
				'Cumulative Fees': 3072
			},
			{
				DATE: '2021-04-18',
				Transactions: 483,
				Volume: 14838,
				Fees: 17,
				'Cumulative Transactions': 58918,
				'Cumulative Volume': 2970951,
				'Cumulative Fees': 3089
			},
			{
				DATE: '2021-04-19',
				Transactions: 1148,
				Volume: 18945,
				Fees: 95,
				'Cumulative Transactions': 60066,
				'Cumulative Volume': 2989896,
				'Cumulative Fees': 3184
			},
			{
				DATE: '2021-04-20',
				Transactions: 1834,
				Volume: 30330,
				Fees: 68,
				'Cumulative Transactions': 61900,
				'Cumulative Volume': 3020226,
				'Cumulative Fees': 3252
			},
			{
				DATE: '2021-04-21',
				Transactions: 1822,
				Volume: 19906,
				Fees: 58,
				'Cumulative Transactions': 63722,
				'Cumulative Volume': 3040132,
				'Cumulative Fees': 3310
			},
			{
				DATE: '2021-04-22',
				Transactions: 1285,
				Volume: 20466,
				Fees: 50,
				'Cumulative Transactions': 65007,
				'Cumulative Volume': 3060598,
				'Cumulative Fees': 3360
			},
			{
				DATE: '2021-04-23',
				Transactions: 970,
				Volume: 12696,
				Fees: 44,
				'Cumulative Transactions': 65977,
				'Cumulative Volume': 3073294,
				'Cumulative Fees': 3404
			},
			{
				DATE: '2021-04-24',
				Transactions: 798,
				Volume: 14729,
				Fees: 29,
				'Cumulative Transactions': 66775,
				'Cumulative Volume': 3088023,
				'Cumulative Fees': 3433
			},
			{
				DATE: '2021-04-25',
				Transactions: 624,
				Volume: 5127,
				Fees: 22,
				'Cumulative Transactions': 67399,
				'Cumulative Volume': 3093150,
				'Cumulative Fees': 3455
			},
			{
				DATE: '2021-04-26',
				Transactions: 630,
				Volume: 64161,
				Fees: 21,
				'Cumulative Transactions': 68029,
				'Cumulative Volume': 3157311,
				'Cumulative Fees': 3476
			},
			{
				DATE: '2021-04-27',
				Transactions: 587,
				Volume: 11641,
				Fees: 20,
				'Cumulative Transactions': 68616,
				'Cumulative Volume': 3168952,
				'Cumulative Fees': 3496
			},
			{
				DATE: '2021-04-28',
				Transactions: 912,
				Volume: 17552,
				Fees: 30,
				'Cumulative Transactions': 69528,
				'Cumulative Volume': 3186504,
				'Cumulative Fees': 3526
			},
			{
				DATE: '2021-04-29',
				Transactions: 838,
				Volume: 19237,
				Fees: 29,
				'Cumulative Transactions': 70366,
				'Cumulative Volume': 3205741,
				'Cumulative Fees': 3555
			},
			{
				DATE: '2021-04-30',
				Transactions: 1653,
				Volume: 46899,
				Fees: 53,
				'Cumulative Transactions': 72019,
				'Cumulative Volume': 3252640,
				'Cumulative Fees': 3608
			},
			{
				DATE: '2021-05-01',
				Transactions: 2663,
				Volume: 56789,
				Fees: 86,
				'Cumulative Transactions': 74682,
				'Cumulative Volume': 3309429,
				'Cumulative Fees': 3694
			},
			{
				DATE: '2021-05-02',
				Transactions: 1874,
				Volume: 26930,
				Fees: 70,
				'Cumulative Transactions': 76556,
				'Cumulative Volume': 3336359,
				'Cumulative Fees': 3764
			},
			{
				DATE: '2021-05-03',
				Transactions: 3139,
				Volume: 54988,
				Fees: 97,
				'Cumulative Transactions': 79695,
				'Cumulative Volume': 3391347,
				'Cumulative Fees': 3861
			},
			{
				DATE: '2021-05-04',
				Transactions: 2134,
				Volume: 62080,
				Fees: 72,
				'Cumulative Transactions': 81829,
				'Cumulative Volume': 3453427,
				'Cumulative Fees': 3933
			},
			{
				DATE: '2021-05-05',
				Transactions: 1748,
				Volume: 11928,
				Fees: 58,
				'Cumulative Transactions': 83577,
				'Cumulative Volume': 3465355,
				'Cumulative Fees': 3991
			},
			{
				DATE: '2021-05-06',
				Transactions: 2131,
				Volume: 29208,
				Fees: 81,
				'Cumulative Transactions': 85708,
				'Cumulative Volume': 3494563,
				'Cumulative Fees': 4072
			},
			{
				DATE: '2021-05-07',
				Transactions: 1805,
				Volume: 58177,
				Fees: 62,
				'Cumulative Transactions': 87513,
				'Cumulative Volume': 3552740,
				'Cumulative Fees': 4134
			},
			{
				DATE: '2021-05-08',
				Transactions: 1724,
				Volume: 29618,
				Fees: 60,
				'Cumulative Transactions': 89237,
				'Cumulative Volume': 3582358,
				'Cumulative Fees': 4194
			},
			{
				DATE: '2021-05-09',
				Transactions: 1502,
				Volume: 13036,
				Fees: 54,
				'Cumulative Transactions': 90739,
				'Cumulative Volume': 3595394,
				'Cumulative Fees': 4248
			},
			{
				DATE: '2021-05-10',
				Transactions: 1425,
				Volume: 16811,
				Fees: 51,
				'Cumulative Transactions': 92164,
				'Cumulative Volume': 3612205,
				'Cumulative Fees': 4299
			},
			{
				DATE: '2021-05-11',
				Transactions: 1588,
				Volume: 15784,
				Fees: 57,
				'Cumulative Transactions': 93752,
				'Cumulative Volume': 3627989,
				'Cumulative Fees': 4356
			},
			{
				DATE: '2021-05-12',
				Transactions: 1499,
				Volume: 33609,
				Fees: 57,
				'Cumulative Transactions': 95251,
				'Cumulative Volume': 3661598,
				'Cumulative Fees': 4413
			},
			{
				DATE: '2021-05-13',
				Transactions: 1476,
				Volume: 27026,
				Fees: 47,
				'Cumulative Transactions': 96727,
				'Cumulative Volume': 3688624,
				'Cumulative Fees': 4460
			},
			{
				DATE: '2021-05-14',
				Transactions: 2335,
				Volume: 71028,
				Fees: 72,
				'Cumulative Transactions': 99062,
				'Cumulative Volume': 3759652,
				'Cumulative Fees': 4532
			},
			{
				DATE: '2021-05-15',
				Transactions: 1380,
				Volume: 34266,
				Fees: 53,
				'Cumulative Transactions': 100442,
				'Cumulative Volume': 3793918,
				'Cumulative Fees': 4585
			},
			{
				DATE: '2021-05-16',
				Transactions: 1271,
				Volume: 21704,
				Fees: 42,
				'Cumulative Transactions': 101713,
				'Cumulative Volume': 3815622,
				'Cumulative Fees': 4627
			},
			{
				DATE: '2021-05-17',
				Transactions: 1364,
				Volume: 18567,
				Fees: 46,
				'Cumulative Transactions': 103077,
				'Cumulative Volume': 3834189,
				'Cumulative Fees': 4673
			},
			{
				DATE: '2021-05-18',
				Transactions: 1247,
				Volume: 16738,
				Fees: 43,
				'Cumulative Transactions': 104324,
				'Cumulative Volume': 3850927,
				'Cumulative Fees': 4716
			},
			{
				DATE: '2021-05-19',
				Transactions: 1010,
				Volume: 24986,
				Fees: 33,
				'Cumulative Transactions': 105334,
				'Cumulative Volume': 3875913,
				'Cumulative Fees': 4749
			},
			{
				DATE: '2021-05-20',
				Transactions: 940,
				Volume: 16943,
				Fees: 32,
				'Cumulative Transactions': 106274,
				'Cumulative Volume': 3892856,
				'Cumulative Fees': 4781
			},
			{
				DATE: '2021-05-21',
				Transactions: 940,
				Volume: 30844,
				Fees: 31,
				'Cumulative Transactions': 107214,
				'Cumulative Volume': 3923700,
				'Cumulative Fees': 4812
			},
			{
				DATE: '2021-05-22',
				Transactions: 669,
				Volume: 7023,
				Fees: 23,
				'Cumulative Transactions': 107883,
				'Cumulative Volume': 3930723,
				'Cumulative Fees': 4835
			},
			{
				DATE: '2021-05-23',
				Transactions: 1205,
				Volume: 32584,
				Fees: 44,
				'Cumulative Transactions': 109088,
				'Cumulative Volume': 3963307,
				'Cumulative Fees': 4879
			},
			{
				DATE: '2021-05-24',
				Transactions: 846,
				Volume: 13136,
				Fees: 30,
				'Cumulative Transactions': 109934,
				'Cumulative Volume': 3976443,
				'Cumulative Fees': 4909
			},
			{
				DATE: '2021-05-25',
				Transactions: 766,
				Volume: 16215,
				Fees: 27,
				'Cumulative Transactions': 110700,
				'Cumulative Volume': 3992658,
				'Cumulative Fees': 4936
			},
			{
				DATE: '2021-05-26',
				Transactions: 741,
				Volume: 6552,
				Fees: 24,
				'Cumulative Transactions': 111441,
				'Cumulative Volume': 3999210,
				'Cumulative Fees': 4960
			},
			{
				DATE: '2021-05-27',
				Transactions: 636,
				Volume: 28752,
				Fees: 23,
				'Cumulative Transactions': 112077,
				'Cumulative Volume': 4027962,
				'Cumulative Fees': 4983
			},
			{
				DATE: '2021-05-28',
				Transactions: 658,
				Volume: 17655,
				Fees: 23,
				'Cumulative Transactions': 112735,
				'Cumulative Volume': 4045617,
				'Cumulative Fees': 5006
			},
			{
				DATE: '2021-05-29',
				Transactions: 820,
				Volume: 28414,
				Fees: 27,
				'Cumulative Transactions': 113555,
				'Cumulative Volume': 4074031,
				'Cumulative Fees': 5033
			},
			{
				DATE: '2021-05-30',
				Transactions: 660,
				Volume: 5132,
				Fees: 23,
				'Cumulative Transactions': 114215,
				'Cumulative Volume': 4079163,
				'Cumulative Fees': 5056
			},
			{
				DATE: '2021-05-31',
				Transactions: 997,
				Volume: 12464,
				Fees: 37,
				'Cumulative Transactions': 115212,
				'Cumulative Volume': 4091627,
				'Cumulative Fees': 5093
			},
			{
				DATE: '2021-06-01',
				Transactions: 999,
				Volume: 10599,
				Fees: 28,
				'Cumulative Transactions': 116211,
				'Cumulative Volume': 4102226,
				'Cumulative Fees': 5121
			},
			{
				DATE: '2021-06-02',
				Transactions: 892,
				Volume: 16898,
				Fees: 27,
				'Cumulative Transactions': 117103,
				'Cumulative Volume': 4119124,
				'Cumulative Fees': 5148
			},
			{
				DATE: '2021-06-03',
				Transactions: 1001,
				Volume: 12472,
				Fees: 31,
				'Cumulative Transactions': 118104,
				'Cumulative Volume': 4131596,
				'Cumulative Fees': 5179
			},
			{
				DATE: '2021-06-04',
				Transactions: 488,
				Volume: 4047,
				Fees: 17,
				'Cumulative Transactions': 118592,
				'Cumulative Volume': 4135643,
				'Cumulative Fees': 5196
			},
			{
				DATE: '2021-06-05',
				Transactions: 539,
				Volume: 16375,
				Fees: 17,
				'Cumulative Transactions': 119131,
				'Cumulative Volume': 4152018,
				'Cumulative Fees': 5213
			},
			{
				DATE: '2021-06-06',
				Transactions: 411,
				Volume: 4978,
				Fees: 13,
				'Cumulative Transactions': 119542,
				'Cumulative Volume': 4156996,
				'Cumulative Fees': 5226
			},
			{
				DATE: '2021-06-07',
				Transactions: 729,
				Volume: 175229,
				Fees: 25,
				'Cumulative Transactions': 120271,
				'Cumulative Volume': 4332225,
				'Cumulative Fees': 5251
			},
			{
				DATE: '2021-06-08',
				Transactions: 730,
				Volume: 11592,
				Fees: 22,
				'Cumulative Transactions': 121001,
				'Cumulative Volume': 4343817,
				'Cumulative Fees': 5273
			},
			{
				DATE: '2021-06-09',
				Transactions: 692,
				Volume: 6771,
				Fees: 25,
				'Cumulative Transactions': 121693,
				'Cumulative Volume': 4350588,
				'Cumulative Fees': 5298
			},
			{
				DATE: '2021-06-10',
				Transactions: 465,
				Volume: 3405,
				Fees: 19,
				'Cumulative Transactions': 122158,
				'Cumulative Volume': 4353993,
				'Cumulative Fees': 5317
			},
			{
				DATE: '2021-06-11',
				Transactions: 615,
				Volume: 15265,
				Fees: 21,
				'Cumulative Transactions': 122773,
				'Cumulative Volume': 4369258,
				'Cumulative Fees': 5338
			},
			{
				DATE: '2021-06-12',
				Transactions: 523,
				Volume: 3702,
				Fees: 17,
				'Cumulative Transactions': 123296,
				'Cumulative Volume': 4372960,
				'Cumulative Fees': 5355
			},
			{
				DATE: '2021-06-13',
				Transactions: 707,
				Volume: 44479,
				Fees: 23,
				'Cumulative Transactions': 124003,
				'Cumulative Volume': 4417439,
				'Cumulative Fees': 5378
			},
			{
				DATE: '2021-06-14',
				Transactions: 775,
				Volume: 20663,
				Fees: 24,
				'Cumulative Transactions': 124778,
				'Cumulative Volume': 4438102,
				'Cumulative Fees': 5402
			},
			{
				DATE: '2021-06-15',
				Transactions: 735,
				Volume: 40332,
				Fees: 21,
				'Cumulative Transactions': 125513,
				'Cumulative Volume': 4478434,
				'Cumulative Fees': 5423
			},
			{
				DATE: '2021-06-16',
				Transactions: 741,
				Volume: 13795,
				Fees: 29,
				'Cumulative Transactions': 126254,
				'Cumulative Volume': 4492229,
				'Cumulative Fees': 5452
			},
			{
				DATE: '2021-06-17',
				Transactions: 657,
				Volume: 36044,
				Fees: 27,
				'Cumulative Transactions': 126911,
				'Cumulative Volume': 4528273,
				'Cumulative Fees': 5479
			},
			{
				DATE: '2021-06-18',
				Transactions: 459,
				Volume: 8637,
				Fees: 16,
				'Cumulative Transactions': 127370,
				'Cumulative Volume': 4536910,
				'Cumulative Fees': 5495
			},
			{
				DATE: '2021-06-19',
				Transactions: 502,
				Volume: 4580,
				Fees: 19,
				'Cumulative Transactions': 127872,
				'Cumulative Volume': 4541490,
				'Cumulative Fees': 5514
			},
			{
				DATE: '2021-06-20',
				Transactions: 650,
				Volume: 5300,
				Fees: 22,
				'Cumulative Transactions': 128522,
				'Cumulative Volume': 4546790,
				'Cumulative Fees': 5536
			},
			{
				DATE: '2021-06-21',
				Transactions: 670,
				Volume: 19780,
				Fees: 22,
				'Cumulative Transactions': 129192,
				'Cumulative Volume': 4566570,
				'Cumulative Fees': 5558
			},
			{
				DATE: '2021-06-22',
				Transactions: 661,
				Volume: 18439,
				Fees: 21,
				'Cumulative Transactions': 129853,
				'Cumulative Volume': 4585009,
				'Cumulative Fees': 5579
			},
			{
				DATE: '2021-06-23',
				Transactions: 502,
				Volume: 5767,
				Fees: 17,
				'Cumulative Transactions': 130355,
				'Cumulative Volume': 4590776,
				'Cumulative Fees': 5596
			},
			{
				DATE: '2021-06-24',
				Transactions: 534,
				Volume: 10357,
				Fees: 17,
				'Cumulative Transactions': 130889,
				'Cumulative Volume': 4601133,
				'Cumulative Fees': 5613
			},
			{
				DATE: '2021-06-25',
				Transactions: 569,
				Volume: 10621,
				Fees: 19,
				'Cumulative Transactions': 131458,
				'Cumulative Volume': 4611754,
				'Cumulative Fees': 5632
			},
			{
				DATE: '2021-06-26',
				Transactions: 521,
				Volume: 4083,
				Fees: 18,
				'Cumulative Transactions': 131979,
				'Cumulative Volume': 4615837,
				'Cumulative Fees': 5650
			},
			{
				DATE: '2021-06-27',
				Transactions: 465,
				Volume: 6190,
				Fees: 21,
				'Cumulative Transactions': 132444,
				'Cumulative Volume': 4622027,
				'Cumulative Fees': 5671
			},
			{
				DATE: '2021-06-28',
				Transactions: 712,
				Volume: 3988,
				Fees: 22,
				'Cumulative Transactions': 133156,
				'Cumulative Volume': 4626015,
				'Cumulative Fees': 5693
			},
			{
				DATE: '2021-06-29',
				Transactions: 744,
				Volume: 17200,
				Fees: 25,
				'Cumulative Transactions': 133900,
				'Cumulative Volume': 4643215,
				'Cumulative Fees': 5718
			},
			{
				DATE: '2021-06-30',
				Transactions: 624,
				Volume: 61513,
				Fees: 27,
				'Cumulative Transactions': 134524,
				'Cumulative Volume': 4704728,
				'Cumulative Fees': 5745
			},
			{
				DATE: '2021-07-01',
				Transactions: 429,
				Volume: 2928,
				Fees: 14,
				'Cumulative Transactions': 134953,
				'Cumulative Volume': 4707656,
				'Cumulative Fees': 5759
			},
			{
				DATE: '2021-07-02',
				Transactions: 756,
				Volume: 13311,
				Fees: 32,
				'Cumulative Transactions': 135709,
				'Cumulative Volume': 4720967,
				'Cumulative Fees': 5791
			},
			{
				DATE: '2021-07-03',
				Transactions: 2042,
				Volume: 95843,
				Fees: 67,
				'Cumulative Transactions': 137751,
				'Cumulative Volume': 4816810,
				'Cumulative Fees': 5858
			},
			{
				DATE: '2021-07-04',
				Transactions: 1362,
				Volume: 16578,
				Fees: 55,
				'Cumulative Transactions': 139113,
				'Cumulative Volume': 4833388,
				'Cumulative Fees': 5913
			},
			{
				DATE: '2021-07-05',
				Transactions: 1139,
				Volume: 22933,
				Fees: 40,
				'Cumulative Transactions': 140252,
				'Cumulative Volume': 4856321,
				'Cumulative Fees': 5953
			},
			{
				DATE: '2021-07-06',
				Transactions: 1015,
				Volume: 32682,
				Fees: 34,
				'Cumulative Transactions': 141267,
				'Cumulative Volume': 4889003,
				'Cumulative Fees': 5987
			},
			{
				DATE: '2021-07-07',
				Transactions: 1124,
				Volume: 27866,
				Fees: 37,
				'Cumulative Transactions': 142391,
				'Cumulative Volume': 4916869,
				'Cumulative Fees': 6024
			},
			{
				DATE: '2021-07-08',
				Transactions: 984,
				Volume: 11249,
				Fees: 33,
				'Cumulative Transactions': 143375,
				'Cumulative Volume': 4928118,
				'Cumulative Fees': 6057
			},
			{
				DATE: '2021-07-09',
				Transactions: 969,
				Volume: 11556,
				Fees: 33,
				'Cumulative Transactions': 144344,
				'Cumulative Volume': 4939674,
				'Cumulative Fees': 6090
			},
			{
				DATE: '2021-07-10',
				Transactions: 811,
				Volume: 9570,
				Fees: 34,
				'Cumulative Transactions': 145155,
				'Cumulative Volume': 4949244,
				'Cumulative Fees': 6124
			},
			{
				DATE: '2021-07-11',
				Transactions: 913,
				Volume: 7331,
				Fees: 31,
				'Cumulative Transactions': 146068,
				'Cumulative Volume': 4956575,
				'Cumulative Fees': 6155
			},
			{
				DATE: '2021-07-12',
				Transactions: 1074,
				Volume: 32008,
				Fees: 41,
				'Cumulative Transactions': 147142,
				'Cumulative Volume': 4988583,
				'Cumulative Fees': 6196
			},
			{
				DATE: '2021-07-13',
				Transactions: 806,
				Volume: 8966,
				Fees: 32,
				'Cumulative Transactions': 147948,
				'Cumulative Volume': 4997549,
				'Cumulative Fees': 6228
			},
			{
				DATE: '2021-07-14',
				Transactions: 831,
				Volume: 20573,
				Fees: 35,
				'Cumulative Transactions': 148779,
				'Cumulative Volume': 5018122,
				'Cumulative Fees': 6263
			},
			{
				DATE: '2021-07-15',
				Transactions: 609,
				Volume: 6503,
				Fees: 22,
				'Cumulative Transactions': 149388,
				'Cumulative Volume': 5024625,
				'Cumulative Fees': 6285
			},
			{
				DATE: '2021-07-16',
				Transactions: 727,
				Volume: 11897,
				Fees: 27,
				'Cumulative Transactions': 150115,
				'Cumulative Volume': 5036522,
				'Cumulative Fees': 6312
			},
			{
				DATE: '2021-07-17',
				Transactions: 613,
				Volume: 12529,
				Fees: 20,
				'Cumulative Transactions': 150728,
				'Cumulative Volume': 5049051,
				'Cumulative Fees': 6332
			},
			{
				DATE: '2021-07-18',
				Transactions: 660,
				Volume: 8268,
				Fees: 24,
				'Cumulative Transactions': 151388,
				'Cumulative Volume': 5057319,
				'Cumulative Fees': 6356
			},
			{
				DATE: '2021-07-19',
				Transactions: 661,
				Volume: 10633,
				Fees: 31,
				'Cumulative Transactions': 152049,
				'Cumulative Volume': 5067952,
				'Cumulative Fees': 6387
			},
			{
				DATE: '2021-07-20',
				Transactions: 612,
				Volume: 25973,
				Fees: 22,
				'Cumulative Transactions': 152661,
				'Cumulative Volume': 5093925,
				'Cumulative Fees': 6409
			},
			{
				DATE: '2021-07-21',
				Transactions: 584,
				Volume: 12953,
				Fees: 20,
				'Cumulative Transactions': 153245,
				'Cumulative Volume': 5106878,
				'Cumulative Fees': 6429
			},
			{
				DATE: '2021-07-22',
				Transactions: 474,
				Volume: 5425,
				Fees: 16,
				'Cumulative Transactions': 153719,
				'Cumulative Volume': 5112303,
				'Cumulative Fees': 6445
			},
			{
				DATE: '2021-07-23',
				Transactions: 688,
				Volume: 15022,
				Fees: 26,
				'Cumulative Transactions': 154407,
				'Cumulative Volume': 5127325,
				'Cumulative Fees': 6471
			},
			{
				DATE: '2021-07-24',
				Transactions: 622,
				Volume: 8212,
				Fees: 24,
				'Cumulative Transactions': 155029,
				'Cumulative Volume': 5135537,
				'Cumulative Fees': 6495
			},
			{
				DATE: '2021-07-25',
				Transactions: 537,
				Volume: 6597,
				Fees: 18,
				'Cumulative Transactions': 155566,
				'Cumulative Volume': 5142134,
				'Cumulative Fees': 6513
			},
			{
				DATE: '2021-07-26',
				Transactions: 902,
				Volume: 20331,
				Fees: 31,
				'Cumulative Transactions': 156468,
				'Cumulative Volume': 5162465,
				'Cumulative Fees': 6544
			},
			{
				DATE: '2021-07-27',
				Transactions: 619,
				Volume: 6146,
				Fees: 24,
				'Cumulative Transactions': 157087,
				'Cumulative Volume': 5168611,
				'Cumulative Fees': 6568
			},
			{
				DATE: '2021-07-28',
				Transactions: 716,
				Volume: 11284,
				Fees: 24,
				'Cumulative Transactions': 157803,
				'Cumulative Volume': 5179895,
				'Cumulative Fees': 6592
			},
			{
				DATE: '2021-07-29',
				Transactions: 1242,
				Volume: 16533,
				Fees: 39,
				'Cumulative Transactions': 159045,
				'Cumulative Volume': 5196428,
				'Cumulative Fees': 6631
			},
			{
				DATE: '2021-07-30',
				Transactions: 837,
				Volume: 9419,
				Fees: 27,
				'Cumulative Transactions': 159882,
				'Cumulative Volume': 5205847,
				'Cumulative Fees': 6658
			},
			{
				DATE: '2021-07-31',
				Transactions: 564,
				Volume: 27129,
				Fees: 18,
				'Cumulative Transactions': 160446,
				'Cumulative Volume': 5232976,
				'Cumulative Fees': 6676
			},
			{
				DATE: '2021-08-01',
				Transactions: 679,
				Volume: 14837,
				Fees: 23,
				'Cumulative Transactions': 161125,
				'Cumulative Volume': 5247813,
				'Cumulative Fees': 6699
			},
			{
				DATE: '2021-08-02',
				Transactions: 695,
				Volume: 4861,
				Fees: 23,
				'Cumulative Transactions': 161820,
				'Cumulative Volume': 5252674,
				'Cumulative Fees': 6722
			},
			{
				DATE: '2021-08-03',
				Transactions: 760,
				Volume: 11233,
				Fees: 24,
				'Cumulative Transactions': 162580,
				'Cumulative Volume': 5263907,
				'Cumulative Fees': 6746
			},
			{
				DATE: '2021-08-04',
				Transactions: 703,
				Volume: 30305,
				Fees: 24,
				'Cumulative Transactions': 163283,
				'Cumulative Volume': 5294212,
				'Cumulative Fees': 6770
			},
			{
				DATE: '2021-08-05',
				Transactions: 691,
				Volume: 51023,
				Fees: 22,
				'Cumulative Transactions': 163974,
				'Cumulative Volume': 5345235,
				'Cumulative Fees': 6792
			},
			{
				DATE: '2021-08-06',
				Transactions: 632,
				Volume: 25479,
				Fees: 22,
				'Cumulative Transactions': 164606,
				'Cumulative Volume': 5370714,
				'Cumulative Fees': 6814
			},
			{
				DATE: '2021-08-07',
				Transactions: 690,
				Volume: 7567,
				Fees: 24,
				'Cumulative Transactions': 165296,
				'Cumulative Volume': 5378281,
				'Cumulative Fees': 6838
			},
			{
				DATE: '2021-08-08',
				Transactions: 573,
				Volume: 9217,
				Fees: 19,
				'Cumulative Transactions': 165869,
				'Cumulative Volume': 5387498,
				'Cumulative Fees': 6857
			},
			{
				DATE: '2021-08-09',
				Transactions: 769,
				Volume: 16581,
				Fees: 28,
				'Cumulative Transactions': 166638,
				'Cumulative Volume': 5404079,
				'Cumulative Fees': 6885
			},
			{
				DATE: '2021-08-10',
				Transactions: 1764,
				Volume: 33246,
				Fees: 95,
				'Cumulative Transactions': 168402,
				'Cumulative Volume': 5437325,
				'Cumulative Fees': 6980
			},
			{
				DATE: '2021-08-11',
				Transactions: 1157,
				Volume: 16442,
				Fees: 43,
				'Cumulative Transactions': 169559,
				'Cumulative Volume': 5453767,
				'Cumulative Fees': 7023
			},
			{
				DATE: '2021-08-12',
				Transactions: 810,
				Volume: 14586,
				Fees: 28,
				'Cumulative Transactions': 170369,
				'Cumulative Volume': 5468353,
				'Cumulative Fees': 7051
			},
			{
				DATE: '2021-08-13',
				Transactions: 832,
				Volume: 15410,
				Fees: 30,
				'Cumulative Transactions': 171201,
				'Cumulative Volume': 5483763,
				'Cumulative Fees': 7081
			},
			{
				DATE: '2021-08-14',
				Transactions: 697,
				Volume: 12456,
				Fees: 24,
				'Cumulative Transactions': 171898,
				'Cumulative Volume': 5496219,
				'Cumulative Fees': 7105
			},
			{
				DATE: '2021-08-15',
				Transactions: 668,
				Volume: 13288,
				Fees: 24,
				'Cumulative Transactions': 172566,
				'Cumulative Volume': 5509507,
				'Cumulative Fees': 7129
			},
			{
				DATE: '2021-08-16',
				Transactions: 1624,
				Volume: 79096,
				Fees: 51,
				'Cumulative Transactions': 174190,
				'Cumulative Volume': 5588603,
				'Cumulative Fees': 7180
			},
			{
				DATE: '2021-08-17',
				Transactions: 1552,
				Volume: 29555,
				Fees: 61,
				'Cumulative Transactions': 175742,
				'Cumulative Volume': 5618158,
				'Cumulative Fees': 7241
			},
			{
				DATE: '2021-08-18',
				Transactions: 1185,
				Volume: 36260,
				Fees: 42,
				'Cumulative Transactions': 176927,
				'Cumulative Volume': 5654418,
				'Cumulative Fees': 7283
			},
			{
				DATE: '2021-08-19',
				Transactions: 4489,
				Volume: 489017,
				Fees: 166,
				'Cumulative Transactions': 181416,
				'Cumulative Volume': 6143435,
				'Cumulative Fees': 7449
			},
			{
				DATE: '2021-08-20',
				Transactions: 4249,
				Volume: 287846,
				Fees: 160,
				'Cumulative Transactions': 185665,
				'Cumulative Volume': 6431281,
				'Cumulative Fees': 7609
			},
			{
				DATE: '2021-08-21',
				Transactions: 5465,
				Volume: 414579,
				Fees: 210,
				'Cumulative Transactions': 191130,
				'Cumulative Volume': 6845860,
				'Cumulative Fees': 7819
			},
			{
				DATE: '2021-08-22',
				Transactions: 3417,
				Volume: 372006,
				Fees: 130,
				'Cumulative Transactions': 194547,
				'Cumulative Volume': 7217866,
				'Cumulative Fees': 7949
			},
			{
				DATE: '2021-08-23',
				Transactions: 4680,
				Volume: 110892,
				Fees: 187,
				'Cumulative Transactions': 199227,
				'Cumulative Volume': 7328758,
				'Cumulative Fees': 8136
			},
			{
				DATE: '2021-08-24',
				Transactions: 5447,
				Volume: 87317,
				Fees: 156,
				'Cumulative Transactions': 204674,
				'Cumulative Volume': 7416075,
				'Cumulative Fees': 8292
			},
			{
				DATE: '2021-08-25',
				Transactions: 6037,
				Volume: 281395,
				Fees: 123,
				'Cumulative Transactions': 210711,
				'Cumulative Volume': 7697470,
				'Cumulative Fees': 8415
			},
			{
				DATE: '2021-08-26',
				Transactions: 5538,
				Volume: 271483,
				Fees: 105,
				'Cumulative Transactions': 216249,
				'Cumulative Volume': 7968953,
				'Cumulative Fees': 8520
			},
			{
				DATE: '2021-08-27',
				Transactions: 7214,
				Volume: 1802037,
				Fees: 161,
				'Cumulative Transactions': 223463,
				'Cumulative Volume': 9770990,
				'Cumulative Fees': 8681
			},
			{
				DATE: '2021-08-28',
				Transactions: 5675,
				Volume: 104876,
				Fees: 121,
				'Cumulative Transactions': 229138,
				'Cumulative Volume': 9875866,
				'Cumulative Fees': 8802
			},
			{
				DATE: '2021-08-29',
				Transactions: 6557,
				Volume: 142984,
				Fees: 126,
				'Cumulative Transactions': 235695,
				'Cumulative Volume': 10018850,
				'Cumulative Fees': 8928
			},
			{
				DATE: '2021-08-30',
				Transactions: 6037,
				Volume: 92207,
				Fees: 111,
				'Cumulative Transactions': 241732,
				'Cumulative Volume': 10111057,
				'Cumulative Fees': 9039
			},
			{
				DATE: '2021-08-31',
				Transactions: 4152,
				Volume: 53810,
				Fees: 76,
				'Cumulative Transactions': 245884,
				'Cumulative Volume': 10164867,
				'Cumulative Fees': 9115
			},
			{
				DATE: '2021-09-01',
				Transactions: 3512,
				Volume: 56293,
				Fees: 54,
				'Cumulative Transactions': 249396,
				'Cumulative Volume': 10221160,
				'Cumulative Fees': 9169
			},
			{
				DATE: '2021-09-02',
				Transactions: 6015,
				Volume: 77522,
				Fees: 143,
				'Cumulative Transactions': 255411,
				'Cumulative Volume': 10298682,
				'Cumulative Fees': 9312
			},
			{
				DATE: '2021-09-03',
				Transactions: 4450,
				Volume: 71309,
				Fees: 75,
				'Cumulative Transactions': 259861,
				'Cumulative Volume': 10369991,
				'Cumulative Fees': 9387
			},
			{
				DATE: '2021-09-04',
				Transactions: 3250,
				Volume: 54829,
				Fees: 52,
				'Cumulative Transactions': 263111,
				'Cumulative Volume': 10424820,
				'Cumulative Fees': 9439
			},
			{
				DATE: '2021-09-05',
				Transactions: 3627,
				Volume: 83850,
				Fees: 61,
				'Cumulative Transactions': 266738,
				'Cumulative Volume': 10508670,
				'Cumulative Fees': 9500
			},
			{
				DATE: '2021-09-06',
				Transactions: 5776,
				Volume: 321931,
				Fees: 102,
				'Cumulative Transactions': 272514,
				'Cumulative Volume': 10830601,
				'Cumulative Fees': 9602
			},
			{
				DATE: '2021-09-07',
				Transactions: 5337,
				Volume: 107869,
				Fees: 169,
				'Cumulative Transactions': 277851,
				'Cumulative Volume': 10938470,
				'Cumulative Fees': 9771
			},
			{
				DATE: '2021-09-08',
				Transactions: 4968,
				Volume: 892111,
				Fees: 93,
				'Cumulative Transactions': 282819,
				'Cumulative Volume': 11830581,
				'Cumulative Fees': 9864
			},
			{
				DATE: '2021-09-09',
				Transactions: 4818,
				Volume: 93931,
				Fees: 116,
				'Cumulative Transactions': 287637,
				'Cumulative Volume': 11924512,
				'Cumulative Fees': 9980
			},
			{
				DATE: '2021-09-10',
				Transactions: 5200,
				Volume: 76768,
				Fees: 112,
				'Cumulative Transactions': 292837,
				'Cumulative Volume': 12001280,
				'Cumulative Fees': 10092
			},
			{
				DATE: '2021-09-11',
				Transactions: 6307,
				Volume: 198419,
				Fees: 134,
				'Cumulative Transactions': 299144,
				'Cumulative Volume': 12199699,
				'Cumulative Fees': 10226
			},
			{
				DATE: '2021-09-12',
				Transactions: 6901,
				Volume: 95432,
				Fees: 150,
				'Cumulative Transactions': 306045,
				'Cumulative Volume': 12295131,
				'Cumulative Fees': 10376
			},
			{
				DATE: '2021-09-13',
				Transactions: 5173,
				Volume: 38286,
				Fees: 102,
				'Cumulative Transactions': 311218,
				'Cumulative Volume': 12333417,
				'Cumulative Fees': 10478
			},
			{
				DATE: '2021-09-14',
				Transactions: 5094,
				Volume: 120301,
				Fees: 88,
				'Cumulative Transactions': 316312,
				'Cumulative Volume': 12453718,
				'Cumulative Fees': 10566
			},
			{
				DATE: '2021-09-15',
				Transactions: 7212,
				Volume: 105538,
				Fees: 180,
				'Cumulative Transactions': 323524,
				'Cumulative Volume': 12559256,
				'Cumulative Fees': 10746
			},
			{
				DATE: '2021-09-16',
				Transactions: 6915,
				Volume: 160430,
				Fees: 180,
				'Cumulative Transactions': 330439,
				'Cumulative Volume': 12719686,
				'Cumulative Fees': 10926
			},
			{
				DATE: '2021-09-17',
				Transactions: 5303,
				Volume: 118676,
				Fees: 106,
				'Cumulative Transactions': 335742,
				'Cumulative Volume': 12838362,
				'Cumulative Fees': 11032
			},
			{
				DATE: '2021-09-18',
				Transactions: 5648,
				Volume: 104991,
				Fees: 105,
				'Cumulative Transactions': 341390,
				'Cumulative Volume': 12943353,
				'Cumulative Fees': 11137
			},
			{
				DATE: '2021-09-19',
				Transactions: 5417,
				Volume: 842173,
				Fees: 84,
				'Cumulative Transactions': 346807,
				'Cumulative Volume': 13785526,
				'Cumulative Fees': 11221
			},
			{
				DATE: '2021-09-20',
				Transactions: 5223,
				Volume: 397908,
				Fees: 125,
				'Cumulative Transactions': 352030,
				'Cumulative Volume': 14183434,
				'Cumulative Fees': 11346
			},
			{
				DATE: '2021-09-21',
				Transactions: 5489,
				Volume: 449494,
				Fees: 105,
				'Cumulative Transactions': 357519,
				'Cumulative Volume': 14632928,
				'Cumulative Fees': 11451
			},
			{
				DATE: '2021-09-22',
				Transactions: 5304,
				Volume: 168081,
				Fees: 86,
				'Cumulative Transactions': 362823,
				'Cumulative Volume': 14801009,
				'Cumulative Fees': 11537
			},
			{
				DATE: '2021-09-23',
				Transactions: 7128,
				Volume: 78054,
				Fees: 40,
				'Cumulative Transactions': 369951,
				'Cumulative Volume': 14879063,
				'Cumulative Fees': 11577
			},
			{
				DATE: '2021-09-24',
				Transactions: 6334,
				Volume: 1486500,
				Fees: 36,
				'Cumulative Transactions': 376285,
				'Cumulative Volume': 16365563,
				'Cumulative Fees': 11613
			},
			{
				DATE: '2021-09-25',
				Transactions: 4907,
				Volume: 82424,
				Fees: 32,
				'Cumulative Transactions': 381192,
				'Cumulative Volume': 16447987,
				'Cumulative Fees': 11645
			},
			{
				DATE: '2021-09-26',
				Transactions: 4667,
				Volume: 101772,
				Fees: 25,
				'Cumulative Transactions': 385859,
				'Cumulative Volume': 16549759,
				'Cumulative Fees': 11670
			},
			{
				DATE: '2021-09-27',
				Transactions: 6085,
				Volume: 637875,
				Fees: 32,
				'Cumulative Transactions': 391944,
				'Cumulative Volume': 17187634,
				'Cumulative Fees': 11702
			},
			{
				DATE: '2021-09-28',
				Transactions: 6219,
				Volume: 110488,
				Fees: 35,
				'Cumulative Transactions': 398163,
				'Cumulative Volume': 17298122,
				'Cumulative Fees': 11737
			},
			{
				DATE: '2021-09-29',
				Transactions: 5337,
				Volume: 118739,
				Fees: 31,
				'Cumulative Transactions': 403500,
				'Cumulative Volume': 17416861,
				'Cumulative Fees': 11768
			},
			{
				DATE: '2021-09-30',
				Transactions: 5583,
				Volume: 203458,
				Fees: 29,
				'Cumulative Transactions': 409083,
				'Cumulative Volume': 17620319,
				'Cumulative Fees': 11797
			},
			{
				DATE: '2021-10-01',
				Transactions: 6448,
				Volume: 98540,
				Fees: 32,
				'Cumulative Transactions': 415531,
				'Cumulative Volume': 17718859,
				'Cumulative Fees': 11829
			},
			{
				DATE: '2021-10-02',
				Transactions: 4602,
				Volume: 79873,
				Fees: 25,
				'Cumulative Transactions': 420133,
				'Cumulative Volume': 17798732,
				'Cumulative Fees': 11854
			},
			{
				DATE: '2021-10-03',
				Transactions: 5211,
				Volume: 85103,
				Fees: 69,
				'Cumulative Transactions': 425344,
				'Cumulative Volume': 17883835,
				'Cumulative Fees': 11923
			},
			{
				DATE: '2021-10-04',
				Transactions: 10228,
				Volume: 864367,
				Fees: 91,
				'Cumulative Transactions': 435572,
				'Cumulative Volume': 18748202,
				'Cumulative Fees': 12014
			},
			{
				DATE: '2021-10-05',
				Transactions: 9840,
				Volume: 1193579,
				Fees: 225,
				'Cumulative Transactions': 445412,
				'Cumulative Volume': 19941781,
				'Cumulative Fees': 12239
			},
			{
				DATE: '2021-10-06',
				Transactions: 7909,
				Volume: 301193,
				Fees: 45,
				'Cumulative Transactions': 453321,
				'Cumulative Volume': 20242974,
				'Cumulative Fees': 12284
			},
			{
				DATE: '2021-10-07',
				Transactions: 7296,
				Volume: 235641,
				Fees: 51,
				'Cumulative Transactions': 460617,
				'Cumulative Volume': 20478615,
				'Cumulative Fees': 12335
			},
			{
				DATE: '2021-10-08',
				Transactions: 7935,
				Volume: 875355,
				Fees: 46,
				'Cumulative Transactions': 468552,
				'Cumulative Volume': 21353970,
				'Cumulative Fees': 12381
			},
			{
				DATE: '2021-10-09',
				Transactions: 6606,
				Volume: 142669,
				Fees: 49,
				'Cumulative Transactions': 475158,
				'Cumulative Volume': 21496639,
				'Cumulative Fees': 12430
			},
			{
				DATE: '2021-10-10',
				Transactions: 7556,
				Volume: 80257,
				Fees: 69,
				'Cumulative Transactions': 482714,
				'Cumulative Volume': 21576896,
				'Cumulative Fees': 12499
			},
			{
				DATE: '2021-10-11',
				Transactions: 9424,
				Volume: 1757096,
				Fees: 53,
				'Cumulative Transactions': 492138,
				'Cumulative Volume': 23333992,
				'Cumulative Fees': 12552
			},
			{
				DATE: '2021-10-12',
				Transactions: 9532,
				Volume: 4674917,
				Fees: 55,
				'Cumulative Transactions': 501670,
				'Cumulative Volume': 28008909,
				'Cumulative Fees': 12607
			},
			{
				DATE: '2021-10-13',
				Transactions: 7671,
				Volume: 1712806,
				Fees: 59,
				'Cumulative Transactions': 509341,
				'Cumulative Volume': 29721715,
				'Cumulative Fees': 12666
			},
			{
				DATE: '2021-10-14',
				Transactions: 6434,
				Volume: 434176,
				Fees: 39,
				'Cumulative Transactions': 515775,
				'Cumulative Volume': 30155891,
				'Cumulative Fees': 12705
			},
			{
				DATE: '2021-10-15',
				Transactions: 6907,
				Volume: 108147,
				Fees: 38,
				'Cumulative Transactions': 522682,
				'Cumulative Volume': 30264038,
				'Cumulative Fees': 12743
			},
			{
				DATE: '2021-10-16',
				Transactions: 6244,
				Volume: 129678,
				Fees: 37,
				'Cumulative Transactions': 528926,
				'Cumulative Volume': 30393716,
				'Cumulative Fees': 12780
			},
			{
				DATE: '2021-10-17',
				Transactions: 5369,
				Volume: 79228,
				Fees: 32,
				'Cumulative Transactions': 534295,
				'Cumulative Volume': 30472944,
				'Cumulative Fees': 12812
			},
			{
				DATE: '2021-10-18',
				Transactions: 6328,
				Volume: 109381,
				Fees: 39,
				'Cumulative Transactions': 540623,
				'Cumulative Volume': 30582325,
				'Cumulative Fees': 12851
			},
			{
				DATE: '2021-10-19',
				Transactions: 5981,
				Volume: 907531,
				Fees: 37,
				'Cumulative Transactions': 546604,
				'Cumulative Volume': 31489856,
				'Cumulative Fees': 12888
			},
			{
				DATE: '2021-10-20',
				Transactions: 7551,
				Volume: 874659,
				Fees: 49,
				'Cumulative Transactions': 554155,
				'Cumulative Volume': 32364515,
				'Cumulative Fees': 12937
			},
			{
				DATE: '2021-10-21',
				Transactions: 8130,
				Volume: 300976,
				Fees: 47,
				'Cumulative Transactions': 562285,
				'Cumulative Volume': 32665491,
				'Cumulative Fees': 12984
			},
			{
				DATE: '2021-10-22',
				Transactions: 9200,
				Volume: 679148,
				Fees: 59,
				'Cumulative Transactions': 571485,
				'Cumulative Volume': 33344639,
				'Cumulative Fees': 13043
			},
			{
				DATE: '2021-10-23',
				Transactions: 7226,
				Volume: 2700900,
				Fees: 37,
				'Cumulative Transactions': 578711,
				'Cumulative Volume': 36045539,
				'Cumulative Fees': 13080
			},
			{
				DATE: '2021-10-24',
				Transactions: 6634,
				Volume: 96052,
				Fees: 35,
				'Cumulative Transactions': 585345,
				'Cumulative Volume': 36141591,
				'Cumulative Fees': 13115
			},
			{
				DATE: '2021-10-25',
				Transactions: 8992,
				Volume: 155312,
				Fees: 54,
				'Cumulative Transactions': 594337,
				'Cumulative Volume': 36296903,
				'Cumulative Fees': 13169
			},
			{
				DATE: '2021-10-26',
				Transactions: 9870,
				Volume: 176381,
				Fees: 59,
				'Cumulative Transactions': 604207,
				'Cumulative Volume': 36473284,
				'Cumulative Fees': 13228
			},
			{
				DATE: '2021-10-27',
				Transactions: 7519,
				Volume: 263978,
				Fees: 52,
				'Cumulative Transactions': 611726,
				'Cumulative Volume': 36737262,
				'Cumulative Fees': 13280
			},
			{
				DATE: '2021-10-28',
				Transactions: 7150,
				Volume: 174771,
				Fees: 45,
				'Cumulative Transactions': 618876,
				'Cumulative Volume': 36912033,
				'Cumulative Fees': 13325
			},
			{
				DATE: '2021-10-29',
				Transactions: 6421,
				Volume: 127617,
				Fees: 37,
				'Cumulative Transactions': 625297,
				'Cumulative Volume': 37039650,
				'Cumulative Fees': 13362
			},
			{
				DATE: '2021-10-30',
				Transactions: 6159,
				Volume: 68059,
				Fees: 35,
				'Cumulative Transactions': 631456,
				'Cumulative Volume': 37107709,
				'Cumulative Fees': 13397
			},
			{
				DATE: '2021-10-31',
				Transactions: 7170,
				Volume: 97033,
				Fees: 37,
				'Cumulative Transactions': 638626,
				'Cumulative Volume': 37204742,
				'Cumulative Fees': 13434
			},
			{
				DATE: '2021-11-01',
				Transactions: 6935,
				Volume: 145874,
				Fees: 45,
				'Cumulative Transactions': 645561,
				'Cumulative Volume': 37350616,
				'Cumulative Fees': 13479
			},
			{
				DATE: '2021-11-02',
				Transactions: 8640,
				Volume: 992543,
				Fees: 49,
				'Cumulative Transactions': 654201,
				'Cumulative Volume': 38343159,
				'Cumulative Fees': 13528
			},
			{
				DATE: '2021-11-03',
				Transactions: 8145,
				Volume: 147296,
				Fees: 45,
				'Cumulative Transactions': 662346,
				'Cumulative Volume': 38490455,
				'Cumulative Fees': 13573
			},
			{
				DATE: '2021-11-04',
				Transactions: 8118,
				Volume: 786763,
				Fees: 49,
				'Cumulative Transactions': 670464,
				'Cumulative Volume': 39277218,
				'Cumulative Fees': 13622
			},
			{
				DATE: '2021-11-05',
				Transactions: 11118,
				Volume: 99858,
				Fees: 49,
				'Cumulative Transactions': 681582,
				'Cumulative Volume': 39377076,
				'Cumulative Fees': 13671
			},
			{
				DATE: '2021-11-06',
				Transactions: 9537,
				Volume: 220635,
				Fees: 44,
				'Cumulative Transactions': 691119,
				'Cumulative Volume': 39597711,
				'Cumulative Fees': 13715
			},
			{
				DATE: '2021-11-07',
				Transactions: 8221,
				Volume: 211465,
				Fees: 48,
				'Cumulative Transactions': 699340,
				'Cumulative Volume': 39809176,
				'Cumulative Fees': 13763
			},
			{
				DATE: '2021-11-08',
				Transactions: 14626,
				Volume: 1033476,
				Fees: 144,
				'Cumulative Transactions': 713966,
				'Cumulative Volume': 40842652,
				'Cumulative Fees': 13907
			},
			{
				DATE: '2021-11-09',
				Transactions: 11555,
				Volume: 1853042,
				Fees: 82,
				'Cumulative Transactions': 725521,
				'Cumulative Volume': 42695694,
				'Cumulative Fees': 13989
			},
			{
				DATE: '2021-11-10',
				Transactions: 11272,
				Volume: 2411578,
				Fees: 82,
				'Cumulative Transactions': 736793,
				'Cumulative Volume': 45107272,
				'Cumulative Fees': 14071
			},
			{
				DATE: '2021-11-11',
				Transactions: 9764,
				Volume: 1066978,
				Fees: 61,
				'Cumulative Transactions': 746557,
				'Cumulative Volume': 46174250,
				'Cumulative Fees': 14132
			},
			{
				DATE: '2021-11-12',
				Transactions: 9490,
				Volume: 493080,
				Fees: 60,
				'Cumulative Transactions': 756047,
				'Cumulative Volume': 46667330,
				'Cumulative Fees': 14192
			},
			{
				DATE: '2021-11-13',
				Transactions: 12239,
				Volume: 326616,
				Fees: 211,
				'Cumulative Transactions': 768286,
				'Cumulative Volume': 46993946,
				'Cumulative Fees': 14403
			},
			{
				DATE: '2021-11-14',
				Transactions: 11007,
				Volume: 587910,
				Fees: 71,
				'Cumulative Transactions': 779293,
				'Cumulative Volume': 47581856,
				'Cumulative Fees': 14474
			},
			{
				DATE: '2021-11-15',
				Transactions: 14295,
				Volume: 240616,
				Fees: 88,
				'Cumulative Transactions': 793588,
				'Cumulative Volume': 47822472,
				'Cumulative Fees': 14562
			},
			{
				DATE: '2021-11-16',
				Transactions: 12648,
				Volume: 337950,
				Fees: 94,
				'Cumulative Transactions': 806236,
				'Cumulative Volume': 48160422,
				'Cumulative Fees': 14656
			},
			{
				DATE: '2021-11-17',
				Transactions: 12847,
				Volume: 624940,
				Fees: 135,
				'Cumulative Transactions': 819083,
				'Cumulative Volume': 48785362,
				'Cumulative Fees': 14791
			},
			{
				DATE: '2021-11-18',
				Transactions: 14636,
				Volume: 497360,
				Fees: 220,
				'Cumulative Transactions': 833719,
				'Cumulative Volume': 49282722,
				'Cumulative Fees': 15011
			},
			{
				DATE: '2021-11-19',
				Transactions: 11397,
				Volume: 130620,
				Fees: 86,
				'Cumulative Transactions': 845116,
				'Cumulative Volume': 49413342,
				'Cumulative Fees': 15097
			},
			{
				DATE: '2021-11-20',
				Transactions: 12663,
				Volume: 758562,
				Fees: 117,
				'Cumulative Transactions': 857779,
				'Cumulative Volume': 50171904,
				'Cumulative Fees': 15214
			},
			{
				DATE: '2021-11-21',
				Transactions: 13678,
				Volume: 249373,
				Fees: 186,
				'Cumulative Transactions': 871457,
				'Cumulative Volume': 50421277,
				'Cumulative Fees': 15400
			},
			{
				DATE: '2021-11-22',
				Transactions: 12410,
				Volume: 429145,
				Fees: 328,
				'Cumulative Transactions': 883867,
				'Cumulative Volume': 50850422,
				'Cumulative Fees': 15728
			},
			{
				DATE: '2021-11-23',
				Transactions: 12249,
				Volume: 958767,
				Fees: 246,
				'Cumulative Transactions': 896116,
				'Cumulative Volume': 51809189,
				'Cumulative Fees': 15974
			},
			{
				DATE: '2021-11-24',
				Transactions: 13084,
				Volume: 1141538,
				Fees: 215,
				'Cumulative Transactions': 909200,
				'Cumulative Volume': 52950727,
				'Cumulative Fees': 16189
			},
			{
				DATE: '2021-11-25',
				Transactions: 13233,
				Volume: 434458,
				Fees: 171,
				'Cumulative Transactions': 922433,
				'Cumulative Volume': 53385185,
				'Cumulative Fees': 16360
			},
			{
				DATE: '2021-11-26',
				Transactions: 13375,
				Volume: 367747,
				Fees: 223,
				'Cumulative Transactions': 935808,
				'Cumulative Volume': 53752932,
				'Cumulative Fees': 16583
			},
			{
				DATE: '2021-11-27',
				Transactions: 10574,
				Volume: 139686,
				Fees: 97,
				'Cumulative Transactions': 946382,
				'Cumulative Volume': 53892618,
				'Cumulative Fees': 16680
			},
			{
				DATE: '2021-11-28',
				Transactions: 9804,
				Volume: 218517,
				Fees: 74,
				'Cumulative Transactions': 956186,
				'Cumulative Volume': 54111135,
				'Cumulative Fees': 16754
			},
			{
				DATE: '2021-11-29',
				Transactions: 10249,
				Volume: 123404,
				Fees: 97,
				'Cumulative Transactions': 966435,
				'Cumulative Volume': 54234539,
				'Cumulative Fees': 16851
			},
			{
				DATE: '2021-11-30',
				Transactions: 11154,
				Volume: 220546,
				Fees: 74,
				'Cumulative Transactions': 977589,
				'Cumulative Volume': 54455085,
				'Cumulative Fees': 16925
			},
			{
				DATE: '2021-12-01',
				Transactions: 10426,
				Volume: 492073,
				Fees: 70,
				'Cumulative Transactions': 988015,
				'Cumulative Volume': 54947158,
				'Cumulative Fees': 16995
			},
			{
				DATE: '2021-12-02',
				Transactions: 10714,
				Volume: 185840,
				Fees: 106,
				'Cumulative Transactions': 998729,
				'Cumulative Volume': 55132998,
				'Cumulative Fees': 17101
			},
			{
				DATE: '2021-12-03',
				Transactions: 11584,
				Volume: 675017,
				Fees: 84,
				'Cumulative Transactions': 1010313,
				'Cumulative Volume': 55808015,
				'Cumulative Fees': 17185
			},
			{
				DATE: '2021-12-04',
				Transactions: 13655,
				Volume: 243499,
				Fees: 187,
				'Cumulative Transactions': 1023968,
				'Cumulative Volume': 56051514,
				'Cumulative Fees': 17372
			},
			{
				DATE: '2021-12-05',
				Transactions: 9557,
				Volume: 448482,
				Fees: 69,
				'Cumulative Transactions': 1033525,
				'Cumulative Volume': 56499996,
				'Cumulative Fees': 17441
			},
			{
				DATE: '2021-12-06',
				Transactions: 12016,
				Volume: 383782,
				Fees: 77,
				'Cumulative Transactions': 1045541,
				'Cumulative Volume': 56883778,
				'Cumulative Fees': 17518
			},
			{
				DATE: '2021-12-07',
				Transactions: 10759,
				Volume: 316677,
				Fees: 65,
				'Cumulative Transactions': 1056300,
				'Cumulative Volume': 57200455,
				'Cumulative Fees': 17583
			},
			{
				DATE: '2021-12-08',
				Transactions: 12128,
				Volume: 750329,
				Fees: 79,
				'Cumulative Transactions': 1068428,
				'Cumulative Volume': 57950784,
				'Cumulative Fees': 17662
			},
			{
				DATE: '2021-12-09',
				Transactions: 10787,
				Volume: 355100,
				Fees: 75,
				'Cumulative Transactions': 1079215,
				'Cumulative Volume': 58305884,
				'Cumulative Fees': 17737
			},
			{
				DATE: '2021-12-10',
				Transactions: 10442,
				Volume: 145974,
				Fees: 66,
				'Cumulative Transactions': 1089657,
				'Cumulative Volume': 58451858,
				'Cumulative Fees': 17803
			},
			{
				DATE: '2021-12-11',
				Transactions: 10247,
				Volume: 2533041,
				Fees: 64,
				'Cumulative Transactions': 1099904,
				'Cumulative Volume': 60984899,
				'Cumulative Fees': 17867
			},
			{
				DATE: '2021-12-12',
				Transactions: 9941,
				Volume: 56266,
				Fees: 62,
				'Cumulative Transactions': 1109845,
				'Cumulative Volume': 61041165,
				'Cumulative Fees': 17929
			},
			{
				DATE: '2021-12-13',
				Transactions: 11238,
				Volume: 156416,
				Fees: 128,
				'Cumulative Transactions': 1121083,
				'Cumulative Volume': 61197581,
				'Cumulative Fees': 18057
			},
			{
				DATE: '2021-12-14',
				Transactions: 12362,
				Volume: 93311,
				Fees: 81,
				'Cumulative Transactions': 1133445,
				'Cumulative Volume': 61290892,
				'Cumulative Fees': 18138
			},
			{
				DATE: '2021-12-15',
				Transactions: 13100,
				Volume: 319184,
				Fees: 92,
				'Cumulative Transactions': 1146545,
				'Cumulative Volume': 61610076,
				'Cumulative Fees': 18230
			},
			{
				DATE: '2021-12-16',
				Transactions: 12159,
				Volume: 141270,
				Fees: 69,
				'Cumulative Transactions': 1158704,
				'Cumulative Volume': 61751346,
				'Cumulative Fees': 18299
			},
			{
				DATE: '2021-12-17',
				Transactions: 11546,
				Volume: 92830,
				Fees: 75,
				'Cumulative Transactions': 1170250,
				'Cumulative Volume': 61844176,
				'Cumulative Fees': 18374
			},
			{
				DATE: '2021-12-18',
				Transactions: 11149,
				Volume: 64814,
				Fees: 62,
				'Cumulative Transactions': 1181399,
				'Cumulative Volume': 61908990,
				'Cumulative Fees': 18436
			},
			{
				DATE: '2021-12-19',
				Transactions: 11247,
				Volume: 145031,
				Fees: 67,
				'Cumulative Transactions': 1192646,
				'Cumulative Volume': 62054021,
				'Cumulative Fees': 18503
			},
			{
				DATE: '2021-12-20',
				Transactions: 13759,
				Volume: 169562,
				Fees: 123,
				'Cumulative Transactions': 1206405,
				'Cumulative Volume': 62223583,
				'Cumulative Fees': 18626
			},
			{
				DATE: '2021-12-21',
				Transactions: 13147,
				Volume: 278013,
				Fees: 77,
				'Cumulative Transactions': 1219552,
				'Cumulative Volume': 62501596,
				'Cumulative Fees': 18703
			},
			{
				DATE: '2021-12-22',
				Transactions: 12933,
				Volume: 251858,
				Fees: 141,
				'Cumulative Transactions': 1232485,
				'Cumulative Volume': 62753454,
				'Cumulative Fees': 18844
			},
			{
				DATE: '2021-12-23',
				Transactions: 12217,
				Volume: 159622,
				Fees: 73,
				'Cumulative Transactions': 1244702,
				'Cumulative Volume': 62913076,
				'Cumulative Fees': 18917
			},
			{
				DATE: '2021-12-24',
				Transactions: 11460,
				Volume: 144040,
				Fees: 63,
				'Cumulative Transactions': 1256162,
				'Cumulative Volume': 63057116,
				'Cumulative Fees': 18980
			},
			{
				DATE: '2021-12-25',
				Transactions: 9015,
				Volume: 108957,
				Fees: 48,
				'Cumulative Transactions': 1265177,
				'Cumulative Volume': 63166073,
				'Cumulative Fees': 19028
			},
			{
				DATE: '2021-12-26',
				Transactions: 11495,
				Volume: 131349,
				Fees: 58,
				'Cumulative Transactions': 1276672,
				'Cumulative Volume': 63297422,
				'Cumulative Fees': 19086
			},
			{
				DATE: '2021-12-27',
				Transactions: 11990,
				Volume: 46510,
				Fees: 65,
				'Cumulative Transactions': 1288662,
				'Cumulative Volume': 63343932,
				'Cumulative Fees': 19151
			},
			{
				DATE: '2021-12-28',
				Transactions: 11976,
				Volume: 52381,
				Fees: 70,
				'Cumulative Transactions': 1300638,
				'Cumulative Volume': 63396313,
				'Cumulative Fees': 19221
			},
			{
				DATE: '2021-12-29',
				Transactions: 10198,
				Volume: 71011,
				Fees: 59,
				'Cumulative Transactions': 1310836,
				'Cumulative Volume': 63467324,
				'Cumulative Fees': 19280
			},
			{
				DATE: '2021-12-30',
				Transactions: 11390,
				Volume: 69925,
				Fees: 65,
				'Cumulative Transactions': 1322226,
				'Cumulative Volume': 63537249,
				'Cumulative Fees': 19345
			},
			{
				DATE: '2021-12-31',
				Transactions: 10965,
				Volume: 135636,
				Fees: 56,
				'Cumulative Transactions': 1333191,
				'Cumulative Volume': 63672885,
				'Cumulative Fees': 19401
			},
			{
				DATE: '2022-01-01',
				Transactions: 10460,
				Volume: 73828,
				Fees: 53,
				'Cumulative Transactions': 1343651,
				'Cumulative Volume': 63746713,
				'Cumulative Fees': 19454
			},
			{
				DATE: '2022-01-02',
				Transactions: 13080,
				Volume: 43072,
				Fees: 70,
				'Cumulative Transactions': 1356731,
				'Cumulative Volume': 63789785,
				'Cumulative Fees': 19524
			},
			{
				DATE: '2022-01-03',
				Transactions: 13440,
				Volume: 100028,
				Fees: 74,
				'Cumulative Transactions': 1370171,
				'Cumulative Volume': 63889813,
				'Cumulative Fees': 19598
			},
			{
				DATE: '2022-01-04',
				Transactions: 12830,
				Volume: 196652,
				Fees: 66,
				'Cumulative Transactions': 1383001,
				'Cumulative Volume': 64086465,
				'Cumulative Fees': 19664
			},
			{
				DATE: '2022-01-05',
				Transactions: 14285,
				Volume: 165522,
				Fees: 90,
				'Cumulative Transactions': 1397286,
				'Cumulative Volume': 64251987,
				'Cumulative Fees': 19754
			},
			{
				DATE: '2022-01-06',
				Transactions: 13370,
				Volume: 215375,
				Fees: 79,
				'Cumulative Transactions': 1410656,
				'Cumulative Volume': 64467362,
				'Cumulative Fees': 19833
			},
			{
				DATE: '2022-01-07',
				Transactions: 15159,
				Volume: 145153,
				Fees: 179,
				'Cumulative Transactions': 1425815,
				'Cumulative Volume': 64612515,
				'Cumulative Fees': 20012
			},
			{
				DATE: '2022-01-08',
				Transactions: 13899,
				Volume: 116783,
				Fees: 73,
				'Cumulative Transactions': 1439714,
				'Cumulative Volume': 64729298,
				'Cumulative Fees': 20085
			},
			{
				DATE: '2022-01-09',
				Transactions: 11715,
				Volume: 70947,
				Fees: 68,
				'Cumulative Transactions': 1451429,
				'Cumulative Volume': 64800245,
				'Cumulative Fees': 20153
			},
			{
				DATE: '2022-01-10',
				Transactions: 12186,
				Volume: 74054,
				Fees: 68,
				'Cumulative Transactions': 1463615,
				'Cumulative Volume': 64874299,
				'Cumulative Fees': 20221
			},
			{
				DATE: '2022-01-11',
				Transactions: 12465,
				Volume: 55539,
				Fees: 65,
				'Cumulative Transactions': 1476080,
				'Cumulative Volume': 64929838,
				'Cumulative Fees': 20286
			},
			{
				DATE: '2022-01-12',
				Transactions: 12201,
				Volume: 83722,
				Fees: 65,
				'Cumulative Transactions': 1488281,
				'Cumulative Volume': 65013560,
				'Cumulative Fees': 20351
			},
			{
				DATE: '2022-01-13',
				Transactions: 11248,
				Volume: 70980,
				Fees: 60,
				'Cumulative Transactions': 1499529,
				'Cumulative Volume': 65084540,
				'Cumulative Fees': 20411
			},
			{
				DATE: '2022-01-14',
				Transactions: 15880,
				Volume: 201052,
				Fees: 90,
				'Cumulative Transactions': 1515409,
				'Cumulative Volume': 65285592,
				'Cumulative Fees': 20501
			},
			{
				DATE: '2022-01-15',
				Transactions: 16499,
				Volume: 74577,
				Fees: 85,
				'Cumulative Transactions': 1531908,
				'Cumulative Volume': 65360169,
				'Cumulative Fees': 20586
			},
			{
				DATE: '2022-01-16',
				Transactions: 17310,
				Volume: 609561,
				Fees: 90,
				'Cumulative Transactions': 1549218,
				'Cumulative Volume': 65969730,
				'Cumulative Fees': 20676
			},
			{
				DATE: '2022-01-17',
				Transactions: 17975,
				Volume: 117060,
				Fees: 199,
				'Cumulative Transactions': 1567193,
				'Cumulative Volume': 66086790,
				'Cumulative Fees': 20875
			},
			{
				DATE: '2022-01-18',
				Transactions: 14954,
				Volume: 608457,
				Fees: 79,
				'Cumulative Transactions': 1582147,
				'Cumulative Volume': 66695247,
				'Cumulative Fees': 20954
			},
			{
				DATE: '2022-01-19',
				Transactions: 15741,
				Volume: 65956,
				Fees: 120,
				'Cumulative Transactions': 1597888,
				'Cumulative Volume': 66761203,
				'Cumulative Fees': 21074
			},
			{
				DATE: '2022-01-20',
				Transactions: 15773,
				Volume: 63284,
				Fees: 87,
				'Cumulative Transactions': 1613661,
				'Cumulative Volume': 66824487,
				'Cumulative Fees': 21161
			},
			{
				DATE: '2022-01-21',
				Transactions: 18573,
				Volume: 202564,
				Fees: 256,
				'Cumulative Transactions': 1632234,
				'Cumulative Volume': 67027051,
				'Cumulative Fees': 21417
			},
			{
				DATE: '2022-01-22',
				Transactions: 16936,
				Volume: 159631,
				Fees: 144,
				'Cumulative Transactions': 1649170,
				'Cumulative Volume': 67186682,
				'Cumulative Fees': 21561
			},
			{
				DATE: '2022-01-23',
				Transactions: 13065,
				Volume: 139637,
				Fees: 76,
				'Cumulative Transactions': 1662235,
				'Cumulative Volume': 67326319,
				'Cumulative Fees': 21637
			},
			{
				DATE: '2022-01-24',
				Transactions: 15611,
				Volume: 149181,
				Fees: 100,
				'Cumulative Transactions': 1677846,
				'Cumulative Volume': 67475500,
				'Cumulative Fees': 21737
			},
			{
				DATE: '2022-01-25',
				Transactions: 14657,
				Volume: 118978,
				Fees: 100,
				'Cumulative Transactions': 1692503,
				'Cumulative Volume': 67594478,
				'Cumulative Fees': 21837
			},
			{
				DATE: '2022-01-26',
				Transactions: 16949,
				Volume: 113435,
				Fees: 138,
				'Cumulative Transactions': 1709452,
				'Cumulative Volume': 67707913,
				'Cumulative Fees': 21975
			},
			{
				DATE: '2022-01-27',
				Transactions: 17128,
				Volume: 217792,
				Fees: 141,
				'Cumulative Transactions': 1726580,
				'Cumulative Volume': 67925705,
				'Cumulative Fees': 22116
			},
			{
				DATE: '2022-01-28',
				Transactions: 17064,
				Volume: 287987,
				Fees: 102,
				'Cumulative Transactions': 1743644,
				'Cumulative Volume': 68213692,
				'Cumulative Fees': 22218
			},
			{
				DATE: '2022-01-29',
				Transactions: 16058,
				Volume: 215102,
				Fees: 115,
				'Cumulative Transactions': 1759702,
				'Cumulative Volume': 68428794,
				'Cumulative Fees': 22333
			},
			{
				DATE: '2022-01-30',
				Transactions: 15553,
				Volume: 96825,
				Fees: 135,
				'Cumulative Transactions': 1775255,
				'Cumulative Volume': 68525619,
				'Cumulative Fees': 22468
			},
			{
				DATE: '2022-01-31',
				Transactions: 14454,
				Volume: 230747,
				Fees: 237,
				'Cumulative Transactions': 1789709,
				'Cumulative Volume': 68756366,
				'Cumulative Fees': 22705
			},
			{
				DATE: '2022-02-01',
				Transactions: 16751,
				Volume: 220266,
				Fees: 99,
				'Cumulative Transactions': 1806460,
				'Cumulative Volume': 68976632,
				'Cumulative Fees': 22804
			},
			{
				DATE: '2022-02-02',
				Transactions: 16099,
				Volume: 330269,
				Fees: 102,
				'Cumulative Transactions': 1822559,
				'Cumulative Volume': 69306901,
				'Cumulative Fees': 22906
			},
			{
				DATE: '2022-02-03',
				Transactions: 14870,
				Volume: 471322,
				Fees: 90,
				'Cumulative Transactions': 1837429,
				'Cumulative Volume': 69778223,
				'Cumulative Fees': 22996
			},
			{
				DATE: '2022-02-04',
				Transactions: 17324,
				Volume: 119722,
				Fees: 134,
				'Cumulative Transactions': 1854753,
				'Cumulative Volume': 69897945,
				'Cumulative Fees': 23130
			},
			{
				DATE: '2022-02-05',
				Transactions: 15840,
				Volume: 80558,
				Fees: 98,
				'Cumulative Transactions': 1870593,
				'Cumulative Volume': 69978503,
				'Cumulative Fees': 23228
			},
			{
				DATE: '2022-02-06',
				Transactions: 15989,
				Volume: 141571,
				Fees: 138,
				'Cumulative Transactions': 1886582,
				'Cumulative Volume': 70120074,
				'Cumulative Fees': 23366
			},
			{
				DATE: '2022-02-07',
				Transactions: 18138,
				Volume: 180805,
				Fees: 200,
				'Cumulative Transactions': 1904720,
				'Cumulative Volume': 70300879,
				'Cumulative Fees': 23566
			},
			{
				DATE: '2022-02-08',
				Transactions: 18324,
				Volume: 232056,
				Fees: 126,
				'Cumulative Transactions': 1923044,
				'Cumulative Volume': 70532935,
				'Cumulative Fees': 23692
			},
			{
				DATE: '2022-02-09',
				Transactions: 17385,
				Volume: 166402,
				Fees: 149,
				'Cumulative Transactions': 1940429,
				'Cumulative Volume': 70699337,
				'Cumulative Fees': 23841
			},
			{
				DATE: '2022-02-10',
				Transactions: 16909,
				Volume: 255862,
				Fees: 270,
				'Cumulative Transactions': 1957338,
				'Cumulative Volume': 70955199,
				'Cumulative Fees': 24111
			},
			{
				DATE: '2022-02-11',
				Transactions: 16607,
				Volume: 99106,
				Fees: 158,
				'Cumulative Transactions': 1973945,
				'Cumulative Volume': 71054305,
				'Cumulative Fees': 24269
			},
			{
				DATE: '2022-02-12',
				Transactions: 14472,
				Volume: 70262,
				Fees: 89,
				'Cumulative Transactions': 1988417,
				'Cumulative Volume': 71124567,
				'Cumulative Fees': 24358
			},
			{
				DATE: '2022-02-13',
				Transactions: 14516,
				Volume: 100233,
				Fees: 91,
				'Cumulative Transactions': 2002933,
				'Cumulative Volume': 71224800,
				'Cumulative Fees': 24449
			},
			{
				DATE: '2022-02-14',
				Transactions: 16563,
				Volume: 98286,
				Fees: 143,
				'Cumulative Transactions': 2019496,
				'Cumulative Volume': 71323086,
				'Cumulative Fees': 24592
			},
			{
				DATE: '2022-02-15',
				Transactions: 18782,
				Volume: 263579,
				Fees: 156,
				'Cumulative Transactions': 2038278,
				'Cumulative Volume': 71586665,
				'Cumulative Fees': 24748
			},
			{
				DATE: '2022-02-16',
				Transactions: 20878,
				Volume: 263397,
				Fees: 173,
				'Cumulative Transactions': 2059156,
				'Cumulative Volume': 71850062,
				'Cumulative Fees': 24921
			},
			{
				DATE: '2022-02-17',
				Transactions: 20448,
				Volume: 277394,
				Fees: 158,
				'Cumulative Transactions': 2079604,
				'Cumulative Volume': 72127456,
				'Cumulative Fees': 25079
			},
			{
				DATE: '2022-02-18',
				Transactions: 18394,
				Volume: 144622,
				Fees: 145,
				'Cumulative Transactions': 2097998,
				'Cumulative Volume': 72272078,
				'Cumulative Fees': 25224
			},
			{
				DATE: '2022-02-19',
				Transactions: 16509,
				Volume: 37148,
				Fees: 251,
				'Cumulative Transactions': 2114507,
				'Cumulative Volume': 72309226,
				'Cumulative Fees': 25475
			},
			{
				DATE: '2022-02-20',
				Transactions: 21835,
				Volume: 111805,
				Fees: 179,
				'Cumulative Transactions': 2136342,
				'Cumulative Volume': 72421031,
				'Cumulative Fees': 25654
			},
			{
				DATE: '2022-02-21',
				Transactions: 22394,
				Volume: 135768,
				Fees: 194,
				'Cumulative Transactions': 2158736,
				'Cumulative Volume': 72556799,
				'Cumulative Fees': 25848
			},
			{
				DATE: '2022-02-22',
				Transactions: 20826,
				Volume: 135437,
				Fees: 243,
				'Cumulative Transactions': 2179562,
				'Cumulative Volume': 72692236,
				'Cumulative Fees': 26091
			},
			{
				DATE: '2022-02-23',
				Transactions: 19662,
				Volume: 137179,
				Fees: 140,
				'Cumulative Transactions': 2199224,
				'Cumulative Volume': 72829415,
				'Cumulative Fees': 26231
			},
			{
				DATE: '2022-02-24',
				Transactions: 19789,
				Volume: 132773,
				Fees: 263,
				'Cumulative Transactions': 2219013,
				'Cumulative Volume': 72962188,
				'Cumulative Fees': 26494
			},
			{
				DATE: '2022-02-25',
				Transactions: 20581,
				Volume: 177019,
				Fees: 215,
				'Cumulative Transactions': 2239594,
				'Cumulative Volume': 73139207,
				'Cumulative Fees': 26709
			},
			{
				DATE: '2022-02-26',
				Transactions: 17194,
				Volume: 91280,
				Fees: 139,
				'Cumulative Transactions': 2256788,
				'Cumulative Volume': 73230487,
				'Cumulative Fees': 26848
			},
			{
				DATE: '2022-02-27',
				Transactions: 19251,
				Volume: 74248,
				Fees: 278,
				'Cumulative Transactions': 2276039,
				'Cumulative Volume': 73304735,
				'Cumulative Fees': 27126
			},
			{
				DATE: '2022-02-28',
				Transactions: 20291,
				Volume: 129870,
				Fees: 279,
				'Cumulative Transactions': 2296330,
				'Cumulative Volume': 73434605,
				'Cumulative Fees': 27405
			},
			{
				DATE: '2022-03-01',
				Transactions: 18850,
				Volume: 171351,
				Fees: 276,
				'Cumulative Transactions': 2315180,
				'Cumulative Volume': 73605956,
				'Cumulative Fees': 27681
			},
			{
				DATE: '2022-03-02',
				Transactions: 17597,
				Volume: 113494,
				Fees: 211,
				'Cumulative Transactions': 2332777,
				'Cumulative Volume': 73719450,
				'Cumulative Fees': 27892
			},
			{
				DATE: '2022-03-03',
				Transactions: 20990,
				Volume: 76264,
				Fees: 227,
				'Cumulative Transactions': 2353767,
				'Cumulative Volume': 73795714,
				'Cumulative Fees': 28119
			},
			{
				DATE: '2022-03-04',
				Transactions: 17249,
				Volume: 86997,
				Fees: 242,
				'Cumulative Transactions': 2371016,
				'Cumulative Volume': 73882711,
				'Cumulative Fees': 28361
			},
			{
				DATE: '2022-03-05',
				Transactions: 16374,
				Volume: 210993,
				Fees: 151,
				'Cumulative Transactions': 2387390,
				'Cumulative Volume': 74093704,
				'Cumulative Fees': 28512
			},
			{
				DATE: '2022-03-06',
				Transactions: 15750,
				Volume: 123446,
				Fees: 138,
				'Cumulative Transactions': 2403140,
				'Cumulative Volume': 74217150,
				'Cumulative Fees': 28650
			},
			{
				DATE: '2022-03-07',
				Transactions: 18519,
				Volume: 98073,
				Fees: 208,
				'Cumulative Transactions': 2421659,
				'Cumulative Volume': 74315223,
				'Cumulative Fees': 28858
			},
			{
				DATE: '2022-03-08',
				Transactions: 17998,
				Volume: 1427853,
				Fees: 149,
				'Cumulative Transactions': 2439657,
				'Cumulative Volume': 75743076,
				'Cumulative Fees': 29007
			},
			{
				DATE: '2022-03-09',
				Transactions: 18463,
				Volume: 157674,
				Fees: 157,
				'Cumulative Transactions': 2458120,
				'Cumulative Volume': 75900750,
				'Cumulative Fees': 29164
			},
			{
				DATE: '2022-03-10',
				Transactions: 15946,
				Volume: 90599,
				Fees: 127,
				'Cumulative Transactions': 2474066,
				'Cumulative Volume': 75991349,
				'Cumulative Fees': 29291
			},
			{
				DATE: '2022-03-11',
				Transactions: 18146,
				Volume: 88235,
				Fees: 227,
				'Cumulative Transactions': 2492212,
				'Cumulative Volume': 76079584,
				'Cumulative Fees': 29518
			},
			{
				DATE: '2022-03-12',
				Transactions: 18837,
				Volume: 93141,
				Fees: 192,
				'Cumulative Transactions': 2511049,
				'Cumulative Volume': 76172725,
				'Cumulative Fees': 29710
			},
			{
				DATE: '2022-03-13',
				Transactions: 20002,
				Volume: 72155,
				Fees: 225,
				'Cumulative Transactions': 2531051,
				'Cumulative Volume': 76244880,
				'Cumulative Fees': 29935
			},
			{
				DATE: '2022-03-14',
				Transactions: 20320,
				Volume: 81806,
				Fees: 309,
				'Cumulative Transactions': 2551371,
				'Cumulative Volume': 76326686,
				'Cumulative Fees': 30244
			},
			{
				DATE: '2022-03-15',
				Transactions: 19889,
				Volume: 135291,
				Fees: 297,
				'Cumulative Transactions': 2571260,
				'Cumulative Volume': 76461977,
				'Cumulative Fees': 30541
			},
			{
				DATE: '2022-03-16',
				Transactions: 18401,
				Volume: 47725,
				Fees: 240,
				'Cumulative Transactions': 2589661,
				'Cumulative Volume': 76509702,
				'Cumulative Fees': 30781
			},
			{
				DATE: '2022-03-17',
				Transactions: 18883,
				Volume: 186357,
				Fees: 286,
				'Cumulative Transactions': 2608544,
				'Cumulative Volume': 76696059,
				'Cumulative Fees': 31067
			},
			{
				DATE: '2022-03-18',
				Transactions: 20080,
				Volume: 100589,
				Fees: 292,
				'Cumulative Transactions': 2628624,
				'Cumulative Volume': 76796648,
				'Cumulative Fees': 31359
			},
			{
				DATE: '2022-03-19',
				Transactions: 19194,
				Volume: 106095,
				Fees: 219,
				'Cumulative Transactions': 2647818,
				'Cumulative Volume': 76902743,
				'Cumulative Fees': 31578
			},
			{
				DATE: '2022-03-20',
				Transactions: 19019,
				Volume: 53946,
				Fees: 236,
				'Cumulative Transactions': 2666837,
				'Cumulative Volume': 76956689,
				'Cumulative Fees': 31814
			},
			{
				DATE: '2022-03-21',
				Transactions: 19961,
				Volume: 141338,
				Fees: 286,
				'Cumulative Transactions': 2686798,
				'Cumulative Volume': 77098027,
				'Cumulative Fees': 32100
			},
			{
				DATE: '2022-03-22',
				Transactions: 19598,
				Volume: 92471,
				Fees: 297,
				'Cumulative Transactions': 2706396,
				'Cumulative Volume': 77190498,
				'Cumulative Fees': 32397
			},
			{
				DATE: '2022-03-23',
				Transactions: 18773,
				Volume: 127713,
				Fees: 247,
				'Cumulative Transactions': 2725169,
				'Cumulative Volume': 77318211,
				'Cumulative Fees': 32644
			},
			{
				DATE: '2022-03-24',
				Transactions: 18096,
				Volume: 223725,
				Fees: 231,
				'Cumulative Transactions': 2743265,
				'Cumulative Volume': 77541936,
				'Cumulative Fees': 32875
			},
			{
				DATE: '2022-03-25',
				Transactions: 17218,
				Volume: 77099,
				Fees: 219,
				'Cumulative Transactions': 2760483,
				'Cumulative Volume': 77619035,
				'Cumulative Fees': 33094
			},
			{
				DATE: '2022-03-26',
				Transactions: 17698,
				Volume: 86286,
				Fees: 142,
				'Cumulative Transactions': 2778181,
				'Cumulative Volume': 77705321,
				'Cumulative Fees': 33236
			},
			{
				DATE: '2022-03-27',
				Transactions: 17847,
				Volume: 71150,
				Fees: 160,
				'Cumulative Transactions': 2796028,
				'Cumulative Volume': 77776471,
				'Cumulative Fees': 33396
			},
			{
				DATE: '2022-03-28',
				Transactions: 19019,
				Volume: 155085,
				Fees: 348,
				'Cumulative Transactions': 2815047,
				'Cumulative Volume': 77931556,
				'Cumulative Fees': 33744
			},
			{
				DATE: '2022-03-29',
				Transactions: 17750,
				Volume: 58172,
				Fees: 268,
				'Cumulative Transactions': 2832797,
				'Cumulative Volume': 77989728,
				'Cumulative Fees': 34012
			},
			{
				DATE: '2022-03-30',
				Transactions: 18391,
				Volume: 127918,
				Fees: 260,
				'Cumulative Transactions': 2851188,
				'Cumulative Volume': 78117646,
				'Cumulative Fees': 34272
			},
			{
				DATE: '2022-03-31',
				Transactions: 18478,
				Volume: 116268,
				Fees: 266,
				'Cumulative Transactions': 2869666,
				'Cumulative Volume': 78233914,
				'Cumulative Fees': 34538
			},
			{
				DATE: '2022-04-01',
				Transactions: 19601,
				Volume: 163021,
				Fees: 260,
				'Cumulative Transactions': 2889267,
				'Cumulative Volume': 78396935,
				'Cumulative Fees': 34798
			},
			{
				DATE: '2022-04-02',
				Transactions: 19377,
				Volume: 109156,
				Fees: 242,
				'Cumulative Transactions': 2908644,
				'Cumulative Volume': 78506091,
				'Cumulative Fees': 35040
			},
			{
				DATE: '2022-04-03',
				Transactions: 17287,
				Volume: 110727,
				Fees: 214,
				'Cumulative Transactions': 2925931,
				'Cumulative Volume': 78616818,
				'Cumulative Fees': 35254
			},
			{
				DATE: '2022-04-04',
				Transactions: 16435,
				Volume: 79038,
				Fees: 270,
				'Cumulative Transactions': 2942366,
				'Cumulative Volume': 78695856,
				'Cumulative Fees': 35524
			},
			{
				DATE: '2022-04-05',
				Transactions: 18042,
				Volume: 82685,
				Fees: 250,
				'Cumulative Transactions': 2960408,
				'Cumulative Volume': 78778541,
				'Cumulative Fees': 35774
			},
			{
				DATE: '2022-04-06',
				Transactions: 20342,
				Volume: 77896,
				Fees: 337,
				'Cumulative Transactions': 2980750,
				'Cumulative Volume': 78856437,
				'Cumulative Fees': 36111
			},
			{
				DATE: '2022-04-07',
				Transactions: 16881,
				Volume: 86488,
				Fees: 287,
				'Cumulative Transactions': 2997631,
				'Cumulative Volume': 78942925,
				'Cumulative Fees': 36398
			},
			{
				DATE: '2022-04-08',
				Transactions: 17009,
				Volume: 113577,
				Fees: 275,
				'Cumulative Transactions': 3014640,
				'Cumulative Volume': 79056502,
				'Cumulative Fees': 36673
			},
			{
				DATE: '2022-04-09',
				Transactions: 16298,
				Volume: 109132,
				Fees: 193,
				'Cumulative Transactions': 3030938,
				'Cumulative Volume': 79165634,
				'Cumulative Fees': 36866
			},
			{
				DATE: '2022-04-10',
				Transactions: 14856,
				Volume: 100356,
				Fees: 270,
				'Cumulative Transactions': 3045794,
				'Cumulative Volume': 79265990,
				'Cumulative Fees': 37136
			},
			{
				DATE: '2022-04-11',
				Transactions: 16349,
				Volume: 172845,
				Fees: 382,
				'Cumulative Transactions': 3062143,
				'Cumulative Volume': 79438835,
				'Cumulative Fees': 37518
			},
			{
				DATE: '2022-04-12',
				Transactions: 17060,
				Volume: 93062,
				Fees: 311,
				'Cumulative Transactions': 3079203,
				'Cumulative Volume': 79531897,
				'Cumulative Fees': 37829
			},
			{
				DATE: '2022-04-13',
				Transactions: 17242,
				Volume: 152598,
				Fees: 279,
				'Cumulative Transactions': 3096445,
				'Cumulative Volume': 79684495,
				'Cumulative Fees': 38108
			},
			{
				DATE: '2022-04-14',
				Transactions: 18363,
				Volume: 156121,
				Fees: 293,
				'Cumulative Transactions': 3114808,
				'Cumulative Volume': 79840616,
				'Cumulative Fees': 38401
			},
			{
				DATE: '2022-04-15',
				Transactions: 17833,
				Volume: 70749,
				Fees: 540,
				'Cumulative Transactions': 3132641,
				'Cumulative Volume': 79911365,
				'Cumulative Fees': 38941
			},
			{
				DATE: '2022-04-16',
				Transactions: 18137,
				Volume: 133437,
				Fees: 250,
				'Cumulative Transactions': 3150778,
				'Cumulative Volume': 80044802,
				'Cumulative Fees': 39191
			},
			{
				DATE: '2022-04-17',
				Transactions: 18023,
				Volume: 96937,
				Fees: 215,
				'Cumulative Transactions': 3168801,
				'Cumulative Volume': 80141739,
				'Cumulative Fees': 39406
			},
			{
				DATE: '2022-04-18',
				Transactions: 17467,
				Volume: 97364,
				Fees: 272,
				'Cumulative Transactions': 3186268,
				'Cumulative Volume': 80239103,
				'Cumulative Fees': 39678
			},
			{
				DATE: '2022-04-19',
				Transactions: 18710,
				Volume: 88854,
				Fees: 358,
				'Cumulative Transactions': 3204978,
				'Cumulative Volume': 80327957,
				'Cumulative Fees': 40036
			},
			{
				DATE: '2022-04-20',
				Transactions: 21600,
				Volume: 1650721,
				Fees: 430,
				'Cumulative Transactions': 3226578,
				'Cumulative Volume': 81978678,
				'Cumulative Fees': 40466
			},
			{
				DATE: '2022-04-21',
				Transactions: 18871,
				Volume: 191610,
				Fees: 334,
				'Cumulative Transactions': 3245449,
				'Cumulative Volume': 82170288,
				'Cumulative Fees': 40800
			},
			{
				DATE: '2022-04-22',
				Transactions: 16755,
				Volume: 107489,
				Fees: 255,
				'Cumulative Transactions': 3262204,
				'Cumulative Volume': 82277777,
				'Cumulative Fees': 41055
			},
			{
				DATE: '2022-04-23',
				Transactions: 16317,
				Volume: 71473,
				Fees: 214,
				'Cumulative Transactions': 3278521,
				'Cumulative Volume': 82349250,
				'Cumulative Fees': 41269
			},
			{
				DATE: '2022-04-24',
				Transactions: 15884,
				Volume: 309018,
				Fees: 206,
				'Cumulative Transactions': 3294405,
				'Cumulative Volume': 82658268,
				'Cumulative Fees': 41475
			},
			{
				DATE: '2022-04-25',
				Transactions: 17606,
				Volume: 211467,
				Fees: 286,
				'Cumulative Transactions': 3312011,
				'Cumulative Volume': 82869735,
				'Cumulative Fees': 41761
			},
			{
				DATE: '2022-04-26',
				Transactions: 17108,
				Volume: 99570,
				Fees: 279,
				'Cumulative Transactions': 3329119,
				'Cumulative Volume': 82969305,
				'Cumulative Fees': 42040
			},
			{
				DATE: '2022-04-27',
				Transactions: 17724,
				Volume: 303014,
				Fees: 293,
				'Cumulative Transactions': 3346843,
				'Cumulative Volume': 83272319,
				'Cumulative Fees': 42333
			},
			{
				DATE: '2022-04-28',
				Transactions: 16029,
				Volume: 124412,
				Fees: 207,
				'Cumulative Transactions': 3362872,
				'Cumulative Volume': 83396731,
				'Cumulative Fees': 42540
			},
			{
				DATE: '2022-04-29',
				Transactions: 17148,
				Volume: 102834,
				Fees: 175,
				'Cumulative Transactions': 3380020,
				'Cumulative Volume': 83499565,
				'Cumulative Fees': 42715
			},
			{
				DATE: '2022-04-30',
				Transactions: 16744,
				Volume: 181852,
				Fees: 183,
				'Cumulative Transactions': 3396764,
				'Cumulative Volume': 83681417,
				'Cumulative Fees': 42898
			},
			{
				DATE: '2022-05-01',
				Transactions: 16506,
				Volume: 45365,
				Fees: 176,
				'Cumulative Transactions': 3413270,
				'Cumulative Volume': 83726782,
				'Cumulative Fees': 43074
			},
			{
				DATE: '2022-05-02',
				Transactions: 16011,
				Volume: 59864,
				Fees: 228,
				'Cumulative Transactions': 3429281,
				'Cumulative Volume': 83786646,
				'Cumulative Fees': 43302
			},
			{
				DATE: '2022-05-03',
				Transactions: 16972,
				Volume: 171272,
				Fees: 312,
				'Cumulative Transactions': 3446253,
				'Cumulative Volume': 83957918,
				'Cumulative Fees': 43614
			},
			{
				DATE: '2022-05-04',
				Transactions: 21691,
				Volume: 70357,
				Fees: 388,
				'Cumulative Transactions': 3467944,
				'Cumulative Volume': 84028275,
				'Cumulative Fees': 44002
			},
			{
				DATE: '2022-05-05',
				Transactions: 18157,
				Volume: 115749,
				Fees: 393,
				'Cumulative Transactions': 3486101,
				'Cumulative Volume': 84144024,
				'Cumulative Fees': 44395
			},
			{
				DATE: '2022-05-06',
				Transactions: 16897,
				Volume: 62147,
				Fees: 320,
				'Cumulative Transactions': 3502998,
				'Cumulative Volume': 84206171,
				'Cumulative Fees': 44715
			},
			{
				DATE: '2022-05-07',
				Transactions: 16928,
				Volume: 34437,
				Fees: 211,
				'Cumulative Transactions': 3519926,
				'Cumulative Volume': 84240608,
				'Cumulative Fees': 44926
			},
			{
				DATE: '2022-05-08',
				Transactions: 18392,
				Volume: 113058,
				Fees: 203,
				'Cumulative Transactions': 3538318,
				'Cumulative Volume': 84353666,
				'Cumulative Fees': 45129
			},
			{
				DATE: '2022-05-09',
				Transactions: 21315,
				Volume: 288085,
				Fees: 524,
				'Cumulative Transactions': 3559633,
				'Cumulative Volume': 84641751,
				'Cumulative Fees': 45653
			},
			{
				DATE: '2022-05-10',
				Transactions: 22384,
				Volume: 887605,
				Fees: 504,
				'Cumulative Transactions': 3582017,
				'Cumulative Volume': 85529356,
				'Cumulative Fees': 46157
			},
			{
				DATE: '2022-05-11',
				Transactions: 25349,
				Volume: 1459971,
				Fees: 1108,
				'Cumulative Transactions': 3607366,
				'Cumulative Volume': 86989327,
				'Cumulative Fees': 47265
			},
			{
				DATE: '2022-05-12',
				Transactions: 24232,
				Volume: 826207,
				Fees: 803,
				'Cumulative Transactions': 3631598,
				'Cumulative Volume': 87815534,
				'Cumulative Fees': 48068
			},
			{
				DATE: '2022-05-13',
				Transactions: 20599,
				Volume: 309293,
				Fees: 330,
				'Cumulative Transactions': 3652197,
				'Cumulative Volume': 88124827,
				'Cumulative Fees': 48398
			},
			{
				DATE: '2022-05-14',
				Transactions: 14088,
				Volume: 191260,
				Fees: 92,
				'Cumulative Transactions': 3666285,
				'Cumulative Volume': 88316087,
				'Cumulative Fees': 48490
			},
			{
				DATE: '2022-05-15',
				Transactions: 13210,
				Volume: 160545,
				Fees: 81,
				'Cumulative Transactions': 3679495,
				'Cumulative Volume': 88476632,
				'Cumulative Fees': 48571
			},
			{
				DATE: '2022-05-16',
				Transactions: 14708,
				Volume: 435841,
				Fees: 90,
				'Cumulative Transactions': 3694203,
				'Cumulative Volume': 88912473,
				'Cumulative Fees': 48661
			},
			{
				DATE: '2022-05-17',
				Transactions: 13117,
				Volume: 190771,
				Fees: 96,
				'Cumulative Transactions': 3707320,
				'Cumulative Volume': 89103244,
				'Cumulative Fees': 48757
			},
			{
				DATE: '2022-05-18',
				Transactions: 12687,
				Volume: 193010,
				Fees: 85,
				'Cumulative Transactions': 3720007,
				'Cumulative Volume': 89296254,
				'Cumulative Fees': 48842
			},
			{
				DATE: '2022-05-19',
				Transactions: 13050,
				Volume: 260565,
				Fees: 89,
				'Cumulative Transactions': 3733057,
				'Cumulative Volume': 89556819,
				'Cumulative Fees': 48931
			},
			{
				DATE: '2022-05-20',
				Transactions: 10886,
				Volume: 158980,
				Fees: 76,
				'Cumulative Transactions': 3743943,
				'Cumulative Volume': 89715799,
				'Cumulative Fees': 49007
			},
			{
				DATE: '2022-05-21',
				Transactions: 8377,
				Volume: 71318,
				Fees: 58,
				'Cumulative Transactions': 3752320,
				'Cumulative Volume': 89787117,
				'Cumulative Fees': 49065
			},
			{
				DATE: '2022-05-22',
				Transactions: 8792,
				Volume: 184011,
				Fees: 62,
				'Cumulative Transactions': 3761112,
				'Cumulative Volume': 89971128,
				'Cumulative Fees': 49127
			},
			{
				DATE: '2022-05-23',
				Transactions: 10758,
				Volume: 554074,
				Fees: 78,
				'Cumulative Transactions': 3771870,
				'Cumulative Volume': 90525202,
				'Cumulative Fees': 49205
			},
			{
				DATE: '2022-05-24',
				Transactions: 9459,
				Volume: 134343,
				Fees: 72,
				'Cumulative Transactions': 3781329,
				'Cumulative Volume': 90659545,
				'Cumulative Fees': 49277
			},
			{
				DATE: '2022-05-25',
				Transactions: 9967,
				Volume: 84137,
				Fees: 76,
				'Cumulative Transactions': 3791296,
				'Cumulative Volume': 90743682,
				'Cumulative Fees': 49353
			},
			{
				DATE: '2022-05-26',
				Transactions: 11600,
				Volume: 202022,
				Fees: 90,
				'Cumulative Transactions': 3802896,
				'Cumulative Volume': 90945704,
				'Cumulative Fees': 49443
			},
			{
				DATE: '2022-05-27',
				Transactions: 11615,
				Volume: 294075,
				Fees: 88,
				'Cumulative Transactions': 3814511,
				'Cumulative Volume': 91239779,
				'Cumulative Fees': 49531
			},
			{
				DATE: '2022-05-28',
				Transactions: 8190,
				Volume: 153818,
				Fees: 64,
				'Cumulative Transactions': 3822701,
				'Cumulative Volume': 91393597,
				'Cumulative Fees': 49595
			},
			{
				DATE: '2022-05-29',
				Transactions: 7955,
				Volume: 86269,
				Fees: 57,
				'Cumulative Transactions': 3830656,
				'Cumulative Volume': 91479866,
				'Cumulative Fees': 49652
			},
			{
				DATE: '2022-05-30',
				Transactions: 10682,
				Volume: 192431,
				Fees: 79,
				'Cumulative Transactions': 3841338,
				'Cumulative Volume': 91672297,
				'Cumulative Fees': 49731
			},
			{
				DATE: '2022-05-31',
				Transactions: 11078,
				Volume: 221211,
				Fees: 95,
				'Cumulative Transactions': 3852416,
				'Cumulative Volume': 91893508,
				'Cumulative Fees': 49826
			},
			{
				DATE: '2022-06-01',
				Transactions: 10946,
				Volume: 718006,
				Fees: 85,
				'Cumulative Transactions': 3863362,
				'Cumulative Volume': 92611514,
				'Cumulative Fees': 49911
			},
			{
				DATE: '2022-06-02',
				Transactions: 10169,
				Volume: 198949,
				Fees: 73,
				'Cumulative Transactions': 3873531,
				'Cumulative Volume': 92810463,
				'Cumulative Fees': 49984
			},
			{
				DATE: '2022-06-03',
				Transactions: 9645,
				Volume: 348351,
				Fees: 70,
				'Cumulative Transactions': 3883176,
				'Cumulative Volume': 93158814,
				'Cumulative Fees': 50054
			},
			{
				DATE: '2022-06-04',
				Transactions: 8411,
				Volume: 132802,
				Fees: 58,
				'Cumulative Transactions': 3891587,
				'Cumulative Volume': 93291616,
				'Cumulative Fees': 50112
			},
			{
				DATE: '2022-06-05',
				Transactions: 8044,
				Volume: 78858,
				Fees: 54,
				'Cumulative Transactions': 3899631,
				'Cumulative Volume': 93370474,
				'Cumulative Fees': 50166
			},
			{
				DATE: '2022-06-06',
				Transactions: 11406,
				Volume: 150308,
				Fees: 80,
				'Cumulative Transactions': 3911037,
				'Cumulative Volume': 93520782,
				'Cumulative Fees': 50246
			},
			{
				DATE: '2022-06-07',
				Transactions: 10296,
				Volume: 208398,
				Fees: 79,
				'Cumulative Transactions': 3921333,
				'Cumulative Volume': 93729180,
				'Cumulative Fees': 50325
			},
			{
				DATE: '2022-06-08',
				Transactions: 8782,
				Volume: 144248,
				Fees: 59,
				'Cumulative Transactions': 3930115,
				'Cumulative Volume': 93873428,
				'Cumulative Fees': 50384
			},
			{
				DATE: '2022-06-09',
				Transactions: 8376,
				Volume: 229859,
				Fees: 57,
				'Cumulative Transactions': 3938491,
				'Cumulative Volume': 94103287,
				'Cumulative Fees': 50441
			},
			{
				DATE: '2022-06-10',
				Transactions: 9705,
				Volume: 272488,
				Fees: 69,
				'Cumulative Transactions': 3948196,
				'Cumulative Volume': 94375775,
				'Cumulative Fees': 50510
			},
			{
				DATE: '2022-06-11',
				Transactions: 9455,
				Volume: 108851,
				Fees: 69,
				'Cumulative Transactions': 3957651,
				'Cumulative Volume': 94484626,
				'Cumulative Fees': 50579
			},
			{
				DATE: '2022-06-12',
				Transactions: 12066,
				Volume: 871956,
				Fees: 92,
				'Cumulative Transactions': 3969717,
				'Cumulative Volume': 95356582,
				'Cumulative Fees': 50671
			},
			{
				DATE: '2022-06-13',
				Transactions: 18568,
				Volume: 1001710,
				Fees: 221,
				'Cumulative Transactions': 3988285,
				'Cumulative Volume': 96358292,
				'Cumulative Fees': 50892
			},
			{
				DATE: '2022-06-14',
				Transactions: 12668,
				Volume: 381302,
				Fees: 123,
				'Cumulative Transactions': 4000953,
				'Cumulative Volume': 96739594,
				'Cumulative Fees': 51015
			},
			{
				DATE: '2022-06-15',
				Transactions: 13312,
				Volume: 467219,
				Fees: 118,
				'Cumulative Transactions': 4014265,
				'Cumulative Volume': 97206813,
				'Cumulative Fees': 51133
			},
			{
				DATE: '2022-06-16',
				Transactions: 9623,
				Volume: 307360,
				Fees: 71,
				'Cumulative Transactions': 4023888,
				'Cumulative Volume': 97514173,
				'Cumulative Fees': 51204
			},
			{
				DATE: '2022-06-17',
				Transactions: 8965,
				Volume: 162540,
				Fees: 61,
				'Cumulative Transactions': 4032853,
				'Cumulative Volume': 97676713,
				'Cumulative Fees': 51265
			},
			{
				DATE: '2022-06-18',
				Transactions: 12213,
				Volume: 211298,
				Fees: 122,
				'Cumulative Transactions': 4045066,
				'Cumulative Volume': 97888011,
				'Cumulative Fees': 51387
			},
			{
				DATE: '2022-06-19',
				Transactions: 9842,
				Volume: 275846,
				Fees: 79,
				'Cumulative Transactions': 4054908,
				'Cumulative Volume': 98163857,
				'Cumulative Fees': 51466
			},
			{
				DATE: '2022-06-20',
				Transactions: 10540,
				Volume: 346958,
				Fees: 84,
				'Cumulative Transactions': 4065448,
				'Cumulative Volume': 98510815,
				'Cumulative Fees': 51550
			},
			{
				DATE: '2022-06-21',
				Transactions: 9682,
				Volume: 132768,
				Fees: 70,
				'Cumulative Transactions': 4075130,
				'Cumulative Volume': 98643583,
				'Cumulative Fees': 51620
			},
			{
				DATE: '2022-06-22',
				Transactions: 10525,
				Volume: 194592,
				Fees: 73,
				'Cumulative Transactions': 4085655,
				'Cumulative Volume': 98838175,
				'Cumulative Fees': 51693
			},
			{
				DATE: '2022-06-23',
				Transactions: 13236,
				Volume: 412364,
				Fees: 87,
				'Cumulative Transactions': 4098891,
				'Cumulative Volume': 99250539,
				'Cumulative Fees': 51780
			},
			{
				DATE: '2022-06-24',
				Transactions: 13616,
				Volume: 508112,
				Fees: 106,
				'Cumulative Transactions': 4112507,
				'Cumulative Volume': 99758651,
				'Cumulative Fees': 51886
			},
			{
				DATE: '2022-06-25',
				Transactions: 10578,
				Volume: 239709,
				Fees: 78,
				'Cumulative Transactions': 4123085,
				'Cumulative Volume': 99998360,
				'Cumulative Fees': 51964
			},
			{
				DATE: '2022-06-26',
				Transactions: 9696,
				Volume: 196664,
				Fees: 67,
				'Cumulative Transactions': 4132781,
				'Cumulative Volume': 100195024,
				'Cumulative Fees': 52031
			},
			{
				DATE: '2022-06-27',
				Transactions: 11241,
				Volume: 295871,
				Fees: 78,
				'Cumulative Transactions': 4144022,
				'Cumulative Volume': 100490895,
				'Cumulative Fees': 52109
			},
			{
				DATE: '2022-06-28',
				Transactions: 10590,
				Volume: 202994,
				Fees: 76,
				'Cumulative Transactions': 4154612,
				'Cumulative Volume': 100693889,
				'Cumulative Fees': 52185
			},
			{
				DATE: '2022-06-29',
				Transactions: 11217,
				Volume: 269454,
				Fees: 78,
				'Cumulative Transactions': 4165829,
				'Cumulative Volume': 100963343,
				'Cumulative Fees': 52263
			},
			{
				DATE: '2022-06-30',
				Transactions: 13729,
				Volume: 104834,
				Fees: 90,
				'Cumulative Transactions': 4179558,
				'Cumulative Volume': 101068177,
				'Cumulative Fees': 52353
			},
			{
				DATE: '2022-07-01',
				Transactions: 11448,
				Volume: 246544,
				Fees: 79,
				'Cumulative Transactions': 4191006,
				'Cumulative Volume': 101314721,
				'Cumulative Fees': 52432
			},
			{
				DATE: '2022-07-02',
				Transactions: 10055,
				Volume: 106610,
				Fees: 66,
				'Cumulative Transactions': 4201061,
				'Cumulative Volume': 101421331,
				'Cumulative Fees': 52498
			},
			{
				DATE: '2022-07-03',
				Transactions: 10317,
				Volume: 139469,
				Fees: 69,
				'Cumulative Transactions': 4211378,
				'Cumulative Volume': 101560800,
				'Cumulative Fees': 52567
			},
			{
				DATE: '2022-07-04',
				Transactions: 11324,
				Volume: 150269,
				Fees: 75,
				'Cumulative Transactions': 4222702,
				'Cumulative Volume': 101711069,
				'Cumulative Fees': 52642
			},
			{
				DATE: '2022-07-05',
				Transactions: 12324,
				Volume: 228131,
				Fees: 83,
				'Cumulative Transactions': 4235026,
				'Cumulative Volume': 101939200,
				'Cumulative Fees': 52725
			},
			{
				DATE: '2022-07-06',
				Transactions: 12686,
				Volume: 201565,
				Fees: 84,
				'Cumulative Transactions': 4247712,
				'Cumulative Volume': 102140765,
				'Cumulative Fees': 52809
			},
			{
				DATE: '2022-07-07',
				Transactions: 13019,
				Volume: 251906,
				Fees: 86,
				'Cumulative Transactions': 4260731,
				'Cumulative Volume': 102392671,
				'Cumulative Fees': 52895
			},
			{
				DATE: '2022-07-08',
				Transactions: 11660,
				Volume: 429644,
				Fees: 79,
				'Cumulative Transactions': 4272391,
				'Cumulative Volume': 102822315,
				'Cumulative Fees': 52974
			},
			{
				DATE: '2022-07-09',
				Transactions: 8270,
				Volume: 122783,
				Fees: 55,
				'Cumulative Transactions': 4280661,
				'Cumulative Volume': 102945098,
				'Cumulative Fees': 53029
			},
			{
				DATE: '2022-07-10',
				Transactions: 9000,
				Volume: 104487,
				Fees: 61,
				'Cumulative Transactions': 4289661,
				'Cumulative Volume': 103049585,
				'Cumulative Fees': 53090
			},
			{
				DATE: '2022-07-11',
				Transactions: 10409,
				Volume: 232518,
				Fees: 73,
				'Cumulative Transactions': 4300070,
				'Cumulative Volume': 103282103,
				'Cumulative Fees': 53163
			},
			{
				DATE: '2022-07-12',
				Transactions: 9600,
				Volume: 348056,
				Fees: 74,
				'Cumulative Transactions': 4309670,
				'Cumulative Volume': 103630159,
				'Cumulative Fees': 53237
			},
			{
				DATE: '2022-07-13',
				Transactions: 10960,
				Volume: 458856,
				Fees: 81,
				'Cumulative Transactions': 4320630,
				'Cumulative Volume': 104089015,
				'Cumulative Fees': 53318
			},
			{
				DATE: '2022-07-14',
				Transactions: 10905,
				Volume: 392545,
				Fees: 76,
				'Cumulative Transactions': 4331535,
				'Cumulative Volume': 104481560,
				'Cumulative Fees': 53394
			},
			{
				DATE: '2022-07-15',
				Transactions: 10470,
				Volume: 446594,
				Fees: 73,
				'Cumulative Transactions': 4342005,
				'Cumulative Volume': 104928154,
				'Cumulative Fees': 53467
			},
			{
				DATE: '2022-07-16',
				Transactions: 9374,
				Volume: 205983,
				Fees: 68,
				'Cumulative Transactions': 4351379,
				'Cumulative Volume': 105134137,
				'Cumulative Fees': 53535
			},
			{
				DATE: '2022-07-17',
				Transactions: 9273,
				Volume: 92311,
				Fees: 65,
				'Cumulative Transactions': 4360652,
				'Cumulative Volume': 105226448,
				'Cumulative Fees': 53600
			},
			{
				DATE: '2022-07-18',
				Transactions: 12631,
				Volume: 266813,
				Fees: 94,
				'Cumulative Transactions': 4373283,
				'Cumulative Volume': 105493261,
				'Cumulative Fees': 53694
			},
			{
				DATE: '2022-07-19',
				Transactions: 12968,
				Volume: 139264,
				Fees: 103,
				'Cumulative Transactions': 4386251,
				'Cumulative Volume': 105632525,
				'Cumulative Fees': 53797
			},
			{
				DATE: '2022-07-20',
				Transactions: 11895,
				Volume: 125169,
				Fees: 87,
				'Cumulative Transactions': 4398146,
				'Cumulative Volume': 105757694,
				'Cumulative Fees': 53884
			},
			{
				DATE: '2022-07-21',
				Transactions: 9987,
				Volume: 90064,
				Fees: 75,
				'Cumulative Transactions': 4408133,
				'Cumulative Volume': 105847758,
				'Cumulative Fees': 53959
			},
			{
				DATE: '2022-07-22',
				Transactions: 9674,
				Volume: 157568,
				Fees: 74,
				'Cumulative Transactions': 4417807,
				'Cumulative Volume': 106005326,
				'Cumulative Fees': 54033
			},
			{
				DATE: '2022-07-23',
				Transactions: 7777,
				Volume: 115844,
				Fees: 56,
				'Cumulative Transactions': 4425584,
				'Cumulative Volume': 106121170,
				'Cumulative Fees': 54089
			},
			{
				DATE: '2022-07-24',
				Transactions: 10379,
				Volume: 154607,
				Fees: 64,
				'Cumulative Transactions': 4435963,
				'Cumulative Volume': 106275777,
				'Cumulative Fees': 54153
			},
			{
				DATE: '2022-07-25',
				Transactions: 11761,
				Volume: 223881,
				Fees: 84,
				'Cumulative Transactions': 4447724,
				'Cumulative Volume': 106499658,
				'Cumulative Fees': 54237
			},
			{
				DATE: '2022-07-26',
				Transactions: 10511,
				Volume: 131436,
				Fees: 77,
				'Cumulative Transactions': 4458235,
				'Cumulative Volume': 106631094,
				'Cumulative Fees': 54314
			},
			{
				DATE: '2022-07-27',
				Transactions: 12273,
				Volume: 140693,
				Fees: 91,
				'Cumulative Transactions': 4470508,
				'Cumulative Volume': 106771787,
				'Cumulative Fees': 54405
			},
			{
				DATE: '2022-07-28',
				Transactions: 11931,
				Volume: 113115,
				Fees: 88,
				'Cumulative Transactions': 4482439,
				'Cumulative Volume': 106884902,
				'Cumulative Fees': 54493
			},
			{
				DATE: '2022-07-29',
				Transactions: 11552,
				Volume: 208917,
				Fees: 82,
				'Cumulative Transactions': 4493991,
				'Cumulative Volume': 107093819,
				'Cumulative Fees': 54575
			},
			{
				DATE: '2022-07-30',
				Transactions: 10471,
				Volume: 85132,
				Fees: 80,
				'Cumulative Transactions': 4504462,
				'Cumulative Volume': 107178951,
				'Cumulative Fees': 54655
			},
			{
				DATE: '2022-07-31',
				Transactions: 9528,
				Volume: 77441,
				Fees: 69,
				'Cumulative Transactions': 4513990,
				'Cumulative Volume': 107256392,
				'Cumulative Fees': 54724
			},
			{
				DATE: '2022-08-01',
				Transactions: 10609,
				Volume: 95833,
				Fees: 78,
				'Cumulative Transactions': 4524599,
				'Cumulative Volume': 107352225,
				'Cumulative Fees': 54802
			},
			{
				DATE: '2022-08-02',
				Transactions: 10238,
				Volume: 155414,
				Fees: 77,
				'Cumulative Transactions': 4534837,
				'Cumulative Volume': 107507639,
				'Cumulative Fees': 54879
			},
			{
				DATE: '2022-08-03',
				Transactions: 10334,
				Volume: 83937,
				Fees: 80,
				'Cumulative Transactions': 4545171,
				'Cumulative Volume': 107591576,
				'Cumulative Fees': 54959
			},
			{
				DATE: '2022-08-04',
				Transactions: 10967,
				Volume: 271958,
				Fees: 82,
				'Cumulative Transactions': 4556138,
				'Cumulative Volume': 107863534,
				'Cumulative Fees': 55041
			},
			{
				DATE: '2022-08-05',
				Transactions: 10834,
				Volume: 146449,
				Fees: 79,
				'Cumulative Transactions': 4566972,
				'Cumulative Volume': 108009983,
				'Cumulative Fees': 55120
			},
			{
				DATE: '2022-08-06',
				Transactions: 9673,
				Volume: 114449,
				Fees: 66,
				'Cumulative Transactions': 4576645,
				'Cumulative Volume': 108124432,
				'Cumulative Fees': 55186
			},
			{
				DATE: '2022-08-07',
				Transactions: 10162,
				Volume: 240564,
				Fees: 84,
				'Cumulative Transactions': 4586807,
				'Cumulative Volume': 108364996,
				'Cumulative Fees': 55270
			},
			{
				DATE: '2022-08-08',
				Transactions: 11798,
				Volume: 154963,
				Fees: 97,
				'Cumulative Transactions': 4598605,
				'Cumulative Volume': 108519959,
				'Cumulative Fees': 55367
			},
			{
				DATE: '2022-08-09',
				Transactions: 10431,
				Volume: 73143,
				Fees: 79,
				'Cumulative Transactions': 4609036,
				'Cumulative Volume': 108593102,
				'Cumulative Fees': 55446
			},
			{
				DATE: '2022-08-10',
				Transactions: 12646,
				Volume: 82280,
				Fees: 113,
				'Cumulative Transactions': 4621682,
				'Cumulative Volume': 108675382,
				'Cumulative Fees': 55559
			},
			{
				DATE: '2022-08-11',
				Transactions: 11522,
				Volume: 109643,
				Fees: 88,
				'Cumulative Transactions': 4633204,
				'Cumulative Volume': 108785025,
				'Cumulative Fees': 55647
			},
			{
				DATE: '2022-08-12',
				Transactions: 10343,
				Volume: 160555,
				Fees: 83,
				'Cumulative Transactions': 4643547,
				'Cumulative Volume': 108945580,
				'Cumulative Fees': 55730
			},
			{
				DATE: '2022-08-13',
				Transactions: 10023,
				Volume: 80295,
				Fees: 78,
				'Cumulative Transactions': 4653570,
				'Cumulative Volume': 109025875,
				'Cumulative Fees': 55808
			},
			{
				DATE: '2022-08-14',
				Transactions: 9122,
				Volume: 118091,
				Fees: 72,
				'Cumulative Transactions': 4662692,
				'Cumulative Volume': 109143966,
				'Cumulative Fees': 55880
			},
			{
				DATE: '2022-08-15',
				Transactions: 10425,
				Volume: 227575,
				Fees: 82,
				'Cumulative Transactions': 4673117,
				'Cumulative Volume': 109371541,
				'Cumulative Fees': 55962
			},
			{
				DATE: '2022-08-16',
				Transactions: 11112,
				Volume: 78263,
				Fees: 84,
				'Cumulative Transactions': 4684229,
				'Cumulative Volume': 109449804,
				'Cumulative Fees': 56046
			},
			{
				DATE: '2022-08-17',
				Transactions: 10992,
				Volume: 183160,
				Fees: 87,
				'Cumulative Transactions': 4695221,
				'Cumulative Volume': 109632964,
				'Cumulative Fees': 56133
			},
			{
				DATE: '2022-08-18',
				Transactions: 9312,
				Volume: 107255,
				Fees: 70,
				'Cumulative Transactions': 4704533,
				'Cumulative Volume': 109740219,
				'Cumulative Fees': 56203
			},
			{
				DATE: '2022-08-19',
				Transactions: 13755,
				Volume: 240944,
				Fees: 117,
				'Cumulative Transactions': 4718288,
				'Cumulative Volume': 109981163,
				'Cumulative Fees': 56320
			},
			{
				DATE: '2022-08-20',
				Transactions: 9733,
				Volume: 206669,
				Fees: 70,
				'Cumulative Transactions': 4728021,
				'Cumulative Volume': 110187832,
				'Cumulative Fees': 56390
			},
			{
				DATE: '2022-08-21',
				Transactions: 8526,
				Volume: 100232,
				Fees: 65,
				'Cumulative Transactions': 4736547,
				'Cumulative Volume': 110288064,
				'Cumulative Fees': 56455
			},
			{
				DATE: '2022-08-22',
				Transactions: 9529,
				Volume: 152176,
				Fees: 74,
				'Cumulative Transactions': 4746076,
				'Cumulative Volume': 110440240,
				'Cumulative Fees': 56529
			},
			{
				DATE: '2022-08-23',
				Transactions: 9602,
				Volume: 407797,
				Fees: 72,
				'Cumulative Transactions': 4755678,
				'Cumulative Volume': 110848037,
				'Cumulative Fees': 56601
			},
			{
				DATE: '2022-08-24',
				Transactions: 9297,
				Volume: 58192,
				Fees: 68,
				'Cumulative Transactions': 4764975,
				'Cumulative Volume': 110906229,
				'Cumulative Fees': 56669
			},
			{
				DATE: '2022-08-25',
				Transactions: 9103,
				Volume: 260881,
				Fees: 67,
				'Cumulative Transactions': 4774078,
				'Cumulative Volume': 111167110,
				'Cumulative Fees': 56736
			},
			{
				DATE: '2022-08-26',
				Transactions: 11132,
				Volume: 210311,
				Fees: 86,
				'Cumulative Transactions': 4785210,
				'Cumulative Volume': 111377421,
				'Cumulative Fees': 56822
			},
			{
				DATE: '2022-08-27',
				Transactions: 10053,
				Volume: 134224,
				Fees: 81,
				'Cumulative Transactions': 4795263,
				'Cumulative Volume': 111511645,
				'Cumulative Fees': 56903
			},
			{
				DATE: '2022-08-28',
				Transactions: 8680,
				Volume: 259582,
				Fees: 69,
				'Cumulative Transactions': 4803943,
				'Cumulative Volume': 111771227,
				'Cumulative Fees': 56972
			},
			{
				DATE: '2022-08-29',
				Transactions: 11579,
				Volume: 672438,
				Fees: 95,
				'Cumulative Transactions': 4815522,
				'Cumulative Volume': 112443665,
				'Cumulative Fees': 57067
			},
			{
				DATE: '2022-08-30',
				Transactions: 10772,
				Volume: 363860,
				Fees: 86,
				'Cumulative Transactions': 4826294,
				'Cumulative Volume': 112807525,
				'Cumulative Fees': 57153
			},
			{
				DATE: '2022-08-31',
				Transactions: 10465,
				Volume: 262059,
				Fees: 90,
				'Cumulative Transactions': 4836759,
				'Cumulative Volume': 113069584,
				'Cumulative Fees': 57243
			},
			{
				DATE: '2022-09-01',
				Transactions: 9758,
				Volume: 146641,
				Fees: 81,
				'Cumulative Transactions': 4846517,
				'Cumulative Volume': 113216225,
				'Cumulative Fees': 57324
			},
			{
				DATE: '2022-09-02',
				Transactions: 8760,
				Volume: 121585,
				Fees: 71,
				'Cumulative Transactions': 4855277,
				'Cumulative Volume': 113337810,
				'Cumulative Fees': 57395
			},
			{
				DATE: '2022-09-03',
				Transactions: 6653,
				Volume: 236260,
				Fees: 59,
				'Cumulative Transactions': 4861930,
				'Cumulative Volume': 113574070,
				'Cumulative Fees': 57454
			},
			{
				DATE: '2022-09-04',
				Transactions: 6830,
				Volume: 108450,
				Fees: 53,
				'Cumulative Transactions': 4868760,
				'Cumulative Volume': 113682520,
				'Cumulative Fees': 57507
			},
			{
				DATE: '2022-09-05',
				Transactions: 8146,
				Volume: 235679,
				Fees: 67,
				'Cumulative Transactions': 4876906,
				'Cumulative Volume': 113918199,
				'Cumulative Fees': 57574
			},
			{
				DATE: '2022-09-06',
				Transactions: 11814,
				Volume: 180019,
				Fees: 100,
				'Cumulative Transactions': 4888720,
				'Cumulative Volume': 114098218,
				'Cumulative Fees': 57674
			},
			{
				DATE: '2022-09-07',
				Transactions: 10782,
				Volume: 214424,
				Fees: 90,
				'Cumulative Transactions': 4899502,
				'Cumulative Volume': 114312642,
				'Cumulative Fees': 57764
			},
			{
				DATE: '2022-09-08',
				Transactions: 9461,
				Volume: 425802,
				Fees: 86,
				'Cumulative Transactions': 4908963,
				'Cumulative Volume': 114738444,
				'Cumulative Fees': 57850
			},
			{
				DATE: '2022-09-09',
				Transactions: 11549,
				Volume: 417824,
				Fees: 103,
				'Cumulative Transactions': 4920512,
				'Cumulative Volume': 115156268,
				'Cumulative Fees': 57953
			},
			{
				DATE: '2022-09-10',
				Transactions: 8608,
				Volume: 179101,
				Fees: 67,
				'Cumulative Transactions': 4929120,
				'Cumulative Volume': 115335369,
				'Cumulative Fees': 58020
			},
			{
				DATE: '2022-09-11',
				Transactions: 8249,
				Volume: 116678,
				Fees: 60,
				'Cumulative Transactions': 4937369,
				'Cumulative Volume': 115452047,
				'Cumulative Fees': 58080
			},
			{
				DATE: '2022-09-12',
				Transactions: 10961,
				Volume: 482069,
				Fees: 90,
				'Cumulative Transactions': 4948330,
				'Cumulative Volume': 115934116,
				'Cumulative Fees': 58170
			},
			{
				DATE: '2022-09-13',
				Transactions: 11650,
				Volume: 685145,
				Fees: 107,
				'Cumulative Transactions': 4959980,
				'Cumulative Volume': 116619261,
				'Cumulative Fees': 58277
			},
			{
				DATE: '2022-09-14',
				Transactions: 10731,
				Volume: 393658,
				Fees: 94,
				'Cumulative Transactions': 4970711,
				'Cumulative Volume': 117012919,
				'Cumulative Fees': 58371
			},
			{
				DATE: '2022-09-15',
				Transactions: 11016,
				Volume: 740014,
				Fees: 94,
				'Cumulative Transactions': 4981727,
				'Cumulative Volume': 117752933,
				'Cumulative Fees': 58465
			},
			{
				DATE: '2022-09-16',
				Transactions: 9456,
				Volume: 318877,
				Fees: 82,
				'Cumulative Transactions': 4991183,
				'Cumulative Volume': 118071810,
				'Cumulative Fees': 58547
			},
			{
				DATE: '2022-09-17',
				Transactions: 9076,
				Volume: 234012,
				Fees: 72,
				'Cumulative Transactions': 5000259,
				'Cumulative Volume': 118305822,
				'Cumulative Fees': 58619
			},
			{
				DATE: '2022-09-18',
				Transactions: 9738,
				Volume: 261468,
				Fees: 98,
				'Cumulative Transactions': 5009997,
				'Cumulative Volume': 118567290,
				'Cumulative Fees': 58717
			},
			{
				DATE: '2022-09-19',
				Transactions: 10099,
				Volume: 205554,
				Fees: 87,
				'Cumulative Transactions': 5020096,
				'Cumulative Volume': 118772844,
				'Cumulative Fees': 58804
			},
			{
				DATE: '2022-09-20',
				Transactions: 8088,
				Volume: 229112,
				Fees: 66,
				'Cumulative Transactions': 5028184,
				'Cumulative Volume': 119001956,
				'Cumulative Fees': 58870
			},
			{
				DATE: '2022-09-21',
				Transactions: 10552,
				Volume: 191463,
				Fees: 122,
				'Cumulative Transactions': 5038736,
				'Cumulative Volume': 119193419,
				'Cumulative Fees': 58992
			},
			{
				DATE: '2022-09-22',
				Transactions: 8581,
				Volume: 137532,
				Fees: 70,
				'Cumulative Transactions': 5047317,
				'Cumulative Volume': 119330951,
				'Cumulative Fees': 59062
			},
			{
				DATE: '2022-09-23',
				Transactions: 9272,
				Volume: 157702,
				Fees: 78,
				'Cumulative Transactions': 5056589,
				'Cumulative Volume': 119488653,
				'Cumulative Fees': 59140
			},
			{
				DATE: '2022-09-24',
				Transactions: 7609,
				Volume: 203809,
				Fees: 65,
				'Cumulative Transactions': 5064198,
				'Cumulative Volume': 119692462,
				'Cumulative Fees': 59205
			},
			{
				DATE: '2022-09-25',
				Transactions: 7244,
				Volume: 86290,
				Fees: 56,
				'Cumulative Transactions': 5071442,
				'Cumulative Volume': 119778752,
				'Cumulative Fees': 59261
			},
			{
				DATE: '2022-09-26',
				Transactions: 9498,
				Volume: 96945,
				Fees: 82,
				'Cumulative Transactions': 5080940,
				'Cumulative Volume': 119875697,
				'Cumulative Fees': 59343
			},
			{
				DATE: '2022-09-27',
				Transactions: 10971,
				Volume: 539524,
				Fees: 93,
				'Cumulative Transactions': 5091911,
				'Cumulative Volume': 120415221,
				'Cumulative Fees': 59436
			},
			{
				DATE: '2022-09-28',
				Transactions: 11373,
				Volume: 109394,
				Fees: 95,
				'Cumulative Transactions': 5103284,
				'Cumulative Volume': 120524615,
				'Cumulative Fees': 59531
			},
			{
				DATE: '2022-09-29',
				Transactions: 11837,
				Volume: 256380,
				Fees: 103,
				'Cumulative Transactions': 5115121,
				'Cumulative Volume': 120780995,
				'Cumulative Fees': 59634
			},
			{
				DATE: '2022-09-30',
				Transactions: 10130,
				Volume: 747251,
				Fees: 82,
				'Cumulative Transactions': 5125251,
				'Cumulative Volume': 121528246,
				'Cumulative Fees': 59716
			},
			{
				DATE: '2022-10-01',
				Transactions: 9500,
				Volume: 188848,
				Fees: 75,
				'Cumulative Transactions': 5134751,
				'Cumulative Volume': 121717094,
				'Cumulative Fees': 59791
			},
			{
				DATE: '2022-10-02',
				Transactions: 8521,
				Volume: 269913,
				Fees: 64,
				'Cumulative Transactions': 5143272,
				'Cumulative Volume': 121987007,
				'Cumulative Fees': 59855
			},
			{
				DATE: '2022-10-03',
				Transactions: 9567,
				Volume: 266948,
				Fees: 83,
				'Cumulative Transactions': 5152839,
				'Cumulative Volume': 122253955,
				'Cumulative Fees': 59938
			},
			{
				DATE: '2022-10-04',
				Transactions: 9001,
				Volume: 58840,
				Fees: 70,
				'Cumulative Transactions': 5161840,
				'Cumulative Volume': 122312795,
				'Cumulative Fees': 60008
			},
			{
				DATE: '2022-10-05',
				Transactions: 9489,
				Volume: 144443,
				Fees: 77,
				'Cumulative Transactions': 5171329,
				'Cumulative Volume': 122457238,
				'Cumulative Fees': 60085
			},
			{
				DATE: '2022-10-06',
				Transactions: 8669,
				Volume: 84940,
				Fees: 72,
				'Cumulative Transactions': 5179998,
				'Cumulative Volume': 122542178,
				'Cumulative Fees': 60157
			},
			{
				DATE: '2022-10-07',
				Transactions: 9843,
				Volume: 345383,
				Fees: 73,
				'Cumulative Transactions': 5189841,
				'Cumulative Volume': 122887561,
				'Cumulative Fees': 60230
			},
			{
				DATE: '2022-10-08',
				Transactions: 7258,
				Volume: 79859,
				Fees: 53,
				'Cumulative Transactions': 5197099,
				'Cumulative Volume': 122967420,
				'Cumulative Fees': 60283
			},
			{
				DATE: '2022-10-09',
				Transactions: 6746,
				Volume: 41872,
				Fees: 51,
				'Cumulative Transactions': 5203845,
				'Cumulative Volume': 123009292,
				'Cumulative Fees': 60334
			},
			{
				DATE: '2022-10-10',
				Transactions: 8505,
				Volume: 96307,
				Fees: 67,
				'Cumulative Transactions': 5212350,
				'Cumulative Volume': 123105599,
				'Cumulative Fees': 60401
			},
			{
				DATE: '2022-10-11',
				Transactions: 9578,
				Volume: 195458,
				Fees: 74,
				'Cumulative Transactions': 5221928,
				'Cumulative Volume': 123301057,
				'Cumulative Fees': 60475
			},
			{
				DATE: '2022-10-12',
				Transactions: 7390,
				Volume: 122971,
				Fees: 56,
				'Cumulative Transactions': 5229318,
				'Cumulative Volume': 123424028,
				'Cumulative Fees': 60531
			},
			{
				DATE: '2022-10-13',
				Transactions: 11992,
				Volume: 200348,
				Fees: 115,
				'Cumulative Transactions': 5241310,
				'Cumulative Volume': 123624376,
				'Cumulative Fees': 60646
			},
			{
				DATE: '2022-10-14',
				Transactions: 8793,
				Volume: 71250,
				Fees: 78,
				'Cumulative Transactions': 5250103,
				'Cumulative Volume': 123695626,
				'Cumulative Fees': 60724
			},
			{
				DATE: '2022-10-15',
				Transactions: 6881,
				Volume: 198942,
				Fees: 50,
				'Cumulative Transactions': 5256984,
				'Cumulative Volume': 123894568,
				'Cumulative Fees': 60774
			},
			{
				DATE: '2022-10-16',
				Transactions: 7342,
				Volume: 102400,
				Fees: 57,
				'Cumulative Transactions': 5264326,
				'Cumulative Volume': 123996968,
				'Cumulative Fees': 60831
			},
			{
				DATE: '2022-10-17',
				Transactions: 8385,
				Volume: 93774,
				Fees: 68,
				'Cumulative Transactions': 5272711,
				'Cumulative Volume': 124090742,
				'Cumulative Fees': 60899
			},
			{
				DATE: '2022-10-18',
				Transactions: 7702,
				Volume: 183849,
				Fees: 57,
				'Cumulative Transactions': 5280413,
				'Cumulative Volume': 124274591,
				'Cumulative Fees': 60956
			},
			{
				DATE: '2022-10-19',
				Transactions: 7979,
				Volume: 326372,
				Fees: 64,
				'Cumulative Transactions': 5288392,
				'Cumulative Volume': 124600963,
				'Cumulative Fees': 61020
			},
			{
				DATE: '2022-10-20',
				Transactions: 8609,
				Volume: 78601,
				Fees: 70,
				'Cumulative Transactions': 5297001,
				'Cumulative Volume': 124679564,
				'Cumulative Fees': 61090
			},
			{
				DATE: '2022-10-21',
				Transactions: 9038,
				Volume: 80663,
				Fees: 78,
				'Cumulative Transactions': 5306039,
				'Cumulative Volume': 124760227,
				'Cumulative Fees': 61168
			},
			{
				DATE: '2022-10-22',
				Transactions: 7282,
				Volume: 44895,
				Fees: 50,
				'Cumulative Transactions': 5313321,
				'Cumulative Volume': 124805122,
				'Cumulative Fees': 61218
			},
			{
				DATE: '2022-10-23',
				Transactions: 8166,
				Volume: 179832,
				Fees: 60,
				'Cumulative Transactions': 5321487,
				'Cumulative Volume': 124984954,
				'Cumulative Fees': 61278
			},
			{
				DATE: '2022-10-24',
				Transactions: 8296,
				Volume: 64629,
				Fees: 68,
				'Cumulative Transactions': 5329783,
				'Cumulative Volume': 125049583,
				'Cumulative Fees': 61346
			},
			{
				DATE: '2022-10-25',
				Transactions: 12560,
				Volume: 262758,
				Fees: 103,
				'Cumulative Transactions': 5342343,
				'Cumulative Volume': 125312341,
				'Cumulative Fees': 61449
			},
			{
				DATE: '2022-10-26',
				Transactions: 13559,
				Volume: 113238,
				Fees: 102,
				'Cumulative Transactions': 5355902,
				'Cumulative Volume': 125425579,
				'Cumulative Fees': 61551
			},
			{
				DATE: '2022-10-27',
				Transactions: 10753,
				Volume: 139140,
				Fees: 85,
				'Cumulative Transactions': 5366655,
				'Cumulative Volume': 125564719,
				'Cumulative Fees': 61636
			},
			{
				DATE: '2022-10-28',
				Transactions: 10664,
				Volume: 98002,
				Fees: 82,
				'Cumulative Transactions': 5377319,
				'Cumulative Volume': 125662721,
				'Cumulative Fees': 61718
			},
			{
				DATE: '2022-10-29',
				Transactions: 10919,
				Volume: 64454,
				Fees: 89,
				'Cumulative Transactions': 5388238,
				'Cumulative Volume': 125727175,
				'Cumulative Fees': 61807
			},
			{
				DATE: '2022-10-30',
				Transactions: 8515,
				Volume: 43474,
				Fees: 62,
				'Cumulative Transactions': 5396753,
				'Cumulative Volume': 125770649,
				'Cumulative Fees': 61869
			},
			{
				DATE: '2022-10-31',
				Transactions: 12304,
				Volume: 207625,
				Fees: 93,
				'Cumulative Transactions': 5409057,
				'Cumulative Volume': 125978274,
				'Cumulative Fees': 61962
			},
			{
				DATE: '2022-11-01',
				Transactions: 9955,
				Volume: 64757,
				Fees: 73,
				'Cumulative Transactions': 5419012,
				'Cumulative Volume': 126043031,
				'Cumulative Fees': 62035
			},
			{
				DATE: '2022-11-02',
				Transactions: 11263,
				Volume: 285890,
				Fees: 97,
				'Cumulative Transactions': 5430275,
				'Cumulative Volume': 126328921,
				'Cumulative Fees': 62132
			},
			{
				DATE: '2022-11-03',
				Transactions: 9034,
				Volume: 176279,
				Fees: 75,
				'Cumulative Transactions': 5439309,
				'Cumulative Volume': 126505200,
				'Cumulative Fees': 62207
			},
			{
				DATE: '2022-11-04',
				Transactions: 10251,
				Volume: 66848,
				Fees: 88,
				'Cumulative Transactions': 5449560,
				'Cumulative Volume': 126572048,
				'Cumulative Fees': 62295
			},
			{
				DATE: '2022-11-05',
				Transactions: 10750,
				Volume: 78408,
				Fees: 81,
				'Cumulative Transactions': 5460310,
				'Cumulative Volume': 126650456,
				'Cumulative Fees': 62376
			},
			{
				DATE: '2022-11-06',
				Transactions: 9073,
				Volume: 123656,
				Fees: 62,
				'Cumulative Transactions': 5469383,
				'Cumulative Volume': 126774112,
				'Cumulative Fees': 62438
			},
			{
				DATE: '2022-11-07',
				Transactions: 9998,
				Volume: 156386,
				Fees: 79,
				'Cumulative Transactions': 5479381,
				'Cumulative Volume': 126930498,
				'Cumulative Fees': 62517
			},
			{
				DATE: '2022-11-08',
				Transactions: 19459,
				Volume: 294138,
				Fees: 264,
				'Cumulative Transactions': 5498840,
				'Cumulative Volume': 127224636,
				'Cumulative Fees': 62781
			},
			{
				DATE: '2022-11-09',
				Transactions: 19654,
				Volume: 372958,
				Fees: 202,
				'Cumulative Transactions': 5518494,
				'Cumulative Volume': 127597594,
				'Cumulative Fees': 62983
			},
			{
				DATE: '2022-11-10',
				Transactions: 18116,
				Volume: 433400,
				Fees: 182,
				'Cumulative Transactions': 5536610,
				'Cumulative Volume': 128030994,
				'Cumulative Fees': 63165
			},
			{
				DATE: '2022-11-11',
				Transactions: 13198,
				Volume: 289243,
				Fees: 113,
				'Cumulative Transactions': 5549808,
				'Cumulative Volume': 128320237,
				'Cumulative Fees': 63278
			},
			{
				DATE: '2022-11-12',
				Transactions: 10091,
				Volume: 275400,
				Fees: 85,
				'Cumulative Transactions': 5559899,
				'Cumulative Volume': 128595637,
				'Cumulative Fees': 63363
			},
			{
				DATE: '2022-11-13',
				Transactions: 9723,
				Volume: 107171,
				Fees: 82,
				'Cumulative Transactions': 5569622,
				'Cumulative Volume': 128702808,
				'Cumulative Fees': 63445
			},
			{
				DATE: '2022-11-14',
				Transactions: 12576,
				Volume: 234357,
				Fees: 113,
				'Cumulative Transactions': 5582198,
				'Cumulative Volume': 128937165,
				'Cumulative Fees': 63558
			},
			{
				DATE: '2022-11-15',
				Transactions: 11028,
				Volume: 252100,
				Fees: 89,
				'Cumulative Transactions': 5593226,
				'Cumulative Volume': 129189265,
				'Cumulative Fees': 63647
			},
			{
				DATE: '2022-11-16',
				Transactions: 10368,
				Volume: 107487,
				Fees: 81,
				'Cumulative Transactions': 5603594,
				'Cumulative Volume': 129296752,
				'Cumulative Fees': 63728
			},
			{
				DATE: '2022-11-17',
				Transactions: 10384,
				Volume: 137271,
				Fees: 83,
				'Cumulative Transactions': 5613978,
				'Cumulative Volume': 129434023,
				'Cumulative Fees': 63811
			},
			{
				DATE: '2022-11-18',
				Transactions: 13902,
				Volume: 75465,
				Fees: 88,
				'Cumulative Transactions': 5627880,
				'Cumulative Volume': 129509488,
				'Cumulative Fees': 63899
			},
			{
				DATE: '2022-11-19',
				Transactions: 8340,
				Volume: 199779,
				Fees: 58,
				'Cumulative Transactions': 5636220,
				'Cumulative Volume': 129709267,
				'Cumulative Fees': 63957
			},
			{
				DATE: '2022-11-20',
				Transactions: 9290,
				Volume: 140130,
				Fees: 70,
				'Cumulative Transactions': 5645510,
				'Cumulative Volume': 129849397,
				'Cumulative Fees': 64027
			},
			{
				DATE: '2022-11-21',
				Transactions: 11278,
				Volume: 104150,
				Fees: 99,
				'Cumulative Transactions': 5656788,
				'Cumulative Volume': 129953547,
				'Cumulative Fees': 64126
			},
			{
				DATE: '2022-11-22',
				Transactions: 10118,
				Volume: 166060,
				Fees: 88,
				'Cumulative Transactions': 5666906,
				'Cumulative Volume': 130119607,
				'Cumulative Fees': 64214
			},
			{
				DATE: '2022-11-23',
				Transactions: 10868,
				Volume: 200430,
				Fees: 85,
				'Cumulative Transactions': 5677774,
				'Cumulative Volume': 130320037,
				'Cumulative Fees': 64299
			},
			{
				DATE: '2022-11-24',
				Transactions: 9944,
				Volume: 203188,
				Fees: 78,
				'Cumulative Transactions': 5687718,
				'Cumulative Volume': 130523225,
				'Cumulative Fees': 64377
			},
			{
				DATE: '2022-11-25',
				Transactions: 9544,
				Volume: 188043,
				Fees: 86,
				'Cumulative Transactions': 5697262,
				'Cumulative Volume': 130711268,
				'Cumulative Fees': 64463
			},
			{
				DATE: '2022-11-26',
				Transactions: 9325,
				Volume: 131954,
				Fees: 78,
				'Cumulative Transactions': 5706587,
				'Cumulative Volume': 130843222,
				'Cumulative Fees': 64541
			},
			{
				DATE: '2022-11-27',
				Transactions: 10512,
				Volume: 126147,
				Fees: 75,
				'Cumulative Transactions': 5717099,
				'Cumulative Volume': 130969369,
				'Cumulative Fees': 64616
			},
			{
				DATE: '2022-11-28',
				Transactions: 10864,
				Volume: 110405,
				Fees: 81,
				'Cumulative Transactions': 5727963,
				'Cumulative Volume': 131079774,
				'Cumulative Fees': 64697
			},
			{
				DATE: '2022-11-29',
				Transactions: 12418,
				Volume: 277149,
				Fees: 80,
				'Cumulative Transactions': 5740381,
				'Cumulative Volume': 131356923,
				'Cumulative Fees': 64777
			},
			{
				DATE: '2022-11-30',
				Transactions: 13454,
				Volume: 1172534,
				Fees: 110,
				'Cumulative Transactions': 5753835,
				'Cumulative Volume': 132529457,
				'Cumulative Fees': 64887
			},
			{
				DATE: '2022-12-01',
				Transactions: 11380,
				Volume: 143969,
				Fees: 98,
				'Cumulative Transactions': 5765215,
				'Cumulative Volume': 132673426,
				'Cumulative Fees': 64985
			},
			{
				DATE: '2022-12-02',
				Transactions: 12609,
				Volume: 257640,
				Fees: 106,
				'Cumulative Transactions': 5777824,
				'Cumulative Volume': 132931066,
				'Cumulative Fees': 65091
			},
			{
				DATE: '2022-12-03',
				Transactions: 9913,
				Volume: 112469,
				Fees: 93,
				'Cumulative Transactions': 5787737,
				'Cumulative Volume': 133043535,
				'Cumulative Fees': 65184
			},
			{
				DATE: '2022-12-04',
				Transactions: 8222,
				Volume: 86127,
				Fees: 72,
				'Cumulative Transactions': 5795959,
				'Cumulative Volume': 133129662,
				'Cumulative Fees': 65256
			},
			{
				DATE: '2022-12-05',
				Transactions: 9898,
				Volume: 246616,
				Fees: 96,
				'Cumulative Transactions': 5805857,
				'Cumulative Volume': 133376278,
				'Cumulative Fees': 65352
			},
			{
				DATE: '2022-12-06',
				Transactions: 7943,
				Volume: 90166,
				Fees: 72,
				'Cumulative Transactions': 5813800,
				'Cumulative Volume': 133466444,
				'Cumulative Fees': 65424
			},
			{
				DATE: '2022-12-07',
				Transactions: 8987,
				Volume: 168460,
				Fees: 77,
				'Cumulative Transactions': 5822787,
				'Cumulative Volume': 133634904,
				'Cumulative Fees': 65501
			},
			{
				DATE: '2022-12-08',
				Transactions: 9989,
				Volume: 138675,
				Fees: 76,
				'Cumulative Transactions': 5832776,
				'Cumulative Volume': 133773579,
				'Cumulative Fees': 65577
			},
			{
				DATE: '2022-12-09',
				Transactions: 15008,
				Volume: 90596,
				Fees: 108,
				'Cumulative Transactions': 5847784,
				'Cumulative Volume': 133864175,
				'Cumulative Fees': 65685
			},
			{
				DATE: '2022-12-10',
				Transactions: 10703,
				Volume: 125734,
				Fees: 75,
				'Cumulative Transactions': 5858487,
				'Cumulative Volume': 133989909,
				'Cumulative Fees': 65760
			},
			{
				DATE: '2022-12-11',
				Transactions: 9029,
				Volume: 82272,
				Fees: 67,
				'Cumulative Transactions': 5867516,
				'Cumulative Volume': 134072181,
				'Cumulative Fees': 65827
			},
			{
				DATE: '2022-12-12',
				Transactions: 13482,
				Volume: 142092,
				Fees: 98,
				'Cumulative Transactions': 5880998,
				'Cumulative Volume': 134214273,
				'Cumulative Fees': 65925
			},
			{
				DATE: '2022-12-13',
				Transactions: 13680,
				Volume: 143434,
				Fees: 124,
				'Cumulative Transactions': 5894678,
				'Cumulative Volume': 134357707,
				'Cumulative Fees': 66049
			},
			{
				DATE: '2022-12-14',
				Transactions: 17938,
				Volume: 89364,
				Fees: 125,
				'Cumulative Transactions': 5912616,
				'Cumulative Volume': 134447071,
				'Cumulative Fees': 66174
			},
			{
				DATE: '2022-12-15',
				Transactions: 11917,
				Volume: 110555,
				Fees: 97,
				'Cumulative Transactions': 5924533,
				'Cumulative Volume': 134557626,
				'Cumulative Fees': 66271
			},
			{
				DATE: '2022-12-16',
				Transactions: 13280,
				Volume: 198549,
				Fees: 119,
				'Cumulative Transactions': 5937813,
				'Cumulative Volume': 134756175,
				'Cumulative Fees': 66390
			},
			{
				DATE: '2022-12-17',
				Transactions: 10890,
				Volume: 259600,
				Fees: 88,
				'Cumulative Transactions': 5948703,
				'Cumulative Volume': 135015775,
				'Cumulative Fees': 66478
			},
			{
				DATE: '2022-12-18',
				Transactions: 9018,
				Volume: 99375,
				Fees: 63,
				'Cumulative Transactions': 5957721,
				'Cumulative Volume': 135115150,
				'Cumulative Fees': 66541
			},
			{
				DATE: '2022-12-19',
				Transactions: 13668,
				Volume: 84591,
				Fees: 92,
				'Cumulative Transactions': 5971389,
				'Cumulative Volume': 135199741,
				'Cumulative Fees': 66633
			},
			{
				DATE: '2022-12-20',
				Transactions: 13885,
				Volume: 93005,
				Fees: 94,
				'Cumulative Transactions': 5985274,
				'Cumulative Volume': 135292746,
				'Cumulative Fees': 66727
			},
			{
				DATE: '2022-12-21',
				Transactions: 12145,
				Volume: 152002,
				Fees: 94,
				'Cumulative Transactions': 5997419,
				'Cumulative Volume': 135444748,
				'Cumulative Fees': 66821
			},
			{
				DATE: '2022-12-22',
				Transactions: 11282,
				Volume: 76989,
				Fees: 82,
				'Cumulative Transactions': 6008701,
				'Cumulative Volume': 135521737,
				'Cumulative Fees': 66903
			},
			{
				DATE: '2022-12-23',
				Transactions: 9761,
				Volume: 116300,
				Fees: 72,
				'Cumulative Transactions': 6018462,
				'Cumulative Volume': 135638037,
				'Cumulative Fees': 66975
			},
			{
				DATE: '2022-12-24',
				Transactions: 8135,
				Volume: 76471,
				Fees: 65,
				'Cumulative Transactions': 6026597,
				'Cumulative Volume': 135714508,
				'Cumulative Fees': 67040
			},
			{
				DATE: '2022-12-25',
				Transactions: 7381,
				Volume: 62067,
				Fees: 58,
				'Cumulative Transactions': 6033978,
				'Cumulative Volume': 135776575,
				'Cumulative Fees': 67098
			},
			{
				DATE: '2022-12-26',
				Transactions: 8192,
				Volume: 87530,
				Fees: 66,
				'Cumulative Transactions': 6042170,
				'Cumulative Volume': 135864105,
				'Cumulative Fees': 67164
			},
			{
				DATE: '2022-12-27',
				Transactions: 8867,
				Volume: 71550,
				Fees: 74,
				'Cumulative Transactions': 6051037,
				'Cumulative Volume': 135935655,
				'Cumulative Fees': 67238
			},
			{
				DATE: '2022-12-28',
				Transactions: 13253,
				Volume: 171226,
				Fees: 107,
				'Cumulative Transactions': 6064290,
				'Cumulative Volume': 136106881,
				'Cumulative Fees': 67345
			},
			{
				DATE: '2022-12-29',
				Transactions: 10855,
				Volume: 157929,
				Fees: 97,
				'Cumulative Transactions': 6075145,
				'Cumulative Volume': 136264810,
				'Cumulative Fees': 67442
			},
			{
				DATE: '2022-12-30',
				Transactions: 9841,
				Volume: 118595,
				Fees: 92,
				'Cumulative Transactions': 6084986,
				'Cumulative Volume': 136383405,
				'Cumulative Fees': 67534
			},
			{
				DATE: '2022-12-31',
				Transactions: 6647,
				Volume: 62814,
				Fees: 63,
				'Cumulative Transactions': 6091633,
				'Cumulative Volume': 136446219,
				'Cumulative Fees': 67597
			},
			{
				DATE: '2023-01-01',
				Transactions: 6282,
				Volume: 69876,
				Fees: 93,
				'Cumulative Transactions': 6097915,
				'Cumulative Volume': 136516095,
				'Cumulative Fees': 67690
			},
			{
				DATE: '2023-01-02',
				Transactions: 9043,
				Volume: 96807,
				Fees: 91,
				'Cumulative Transactions': 6106958,
				'Cumulative Volume': 136612902,
				'Cumulative Fees': 67781
			},
			{
				DATE: '2023-01-03',
				Transactions: 9147,
				Volume: 278814,
				Fees: 96,
				'Cumulative Transactions': 6116105,
				'Cumulative Volume': 136891716,
				'Cumulative Fees': 67877
			},
			{
				DATE: '2023-01-04',
				Transactions: 11127,
				Volume: 419084,
				Fees: 147,
				'Cumulative Transactions': 6127232,
				'Cumulative Volume': 137310800,
				'Cumulative Fees': 68024
			},
			{
				DATE: '2023-01-05',
				Transactions: 8622,
				Volume: 206756,
				Fees: 87,
				'Cumulative Transactions': 6135854,
				'Cumulative Volume': 137517556,
				'Cumulative Fees': 68111
			},
			{
				DATE: '2023-01-06',
				Transactions: 10899,
				Volume: 360820,
				Fees: 100,
				'Cumulative Transactions': 6146753,
				'Cumulative Volume': 137878376,
				'Cumulative Fees': 68211
			},
			{
				DATE: '2023-01-07',
				Transactions: 7992,
				Volume: 160927,
				Fees: 65,
				'Cumulative Transactions': 6154745,
				'Cumulative Volume': 138039303,
				'Cumulative Fees': 68276
			},
			{
				DATE: '2023-01-08',
				Transactions: 8443,
				Volume: 105210,
				Fees: 78,
				'Cumulative Transactions': 6163188,
				'Cumulative Volume': 138144513,
				'Cumulative Fees': 68354
			},
			{
				DATE: '2023-01-09',
				Transactions: 12276,
				Volume: 381958,
				Fees: 139,
				'Cumulative Transactions': 6175464,
				'Cumulative Volume': 138526471,
				'Cumulative Fees': 68493
			},
			{
				DATE: '2023-01-10',
				Transactions: 10669,
				Volume: 203931,
				Fees: 103,
				'Cumulative Transactions': 6186133,
				'Cumulative Volume': 138730402,
				'Cumulative Fees': 68596
			},
			{
				DATE: '2023-01-11',
				Transactions: 14662,
				Volume: 679355,
				Fees: 196,
				'Cumulative Transactions': 6200795,
				'Cumulative Volume': 139409757,
				'Cumulative Fees': 68792
			},
			{
				DATE: '2023-01-12',
				Transactions: 18479,
				Volume: 303384,
				Fees: 218,
				'Cumulative Transactions': 6219274,
				'Cumulative Volume': 139713141,
				'Cumulative Fees': 69010
			},
			{
				DATE: '2023-01-13',
				Transactions: 14342,
				Volume: 210496,
				Fees: 154,
				'Cumulative Transactions': 6233616,
				'Cumulative Volume': 139923637,
				'Cumulative Fees': 69164
			},
			{
				DATE: '2023-01-14',
				Transactions: 18064,
				Volume: 548922,
				Fees: 231,
				'Cumulative Transactions': 6251680,
				'Cumulative Volume': 140472559,
				'Cumulative Fees': 69395
			},
			{
				DATE: '2023-01-15',
				Transactions: 10641,
				Volume: 178249,
				Fees: 113,
				'Cumulative Transactions': 6262321,
				'Cumulative Volume': 140650808,
				'Cumulative Fees': 69508
			},
			{
				DATE: '2023-01-16',
				Transactions: 13220,
				Volume: 863527,
				Fees: 143,
				'Cumulative Transactions': 6275541,
				'Cumulative Volume': 141514335,
				'Cumulative Fees': 69651
			},
			{
				DATE: '2023-01-17',
				Transactions: 13796,
				Volume: 414527,
				Fees: 148,
				'Cumulative Transactions': 6289337,
				'Cumulative Volume': 141928862,
				'Cumulative Fees': 69799
			},
			{
				DATE: '2023-01-18',
				Transactions: 13221,
				Volume: 488960,
				Fees: 165,
				'Cumulative Transactions': 6302558,
				'Cumulative Volume': 142417822,
				'Cumulative Fees': 69964
			},
			{
				DATE: '2023-01-19',
				Transactions: 12962,
				Volume: 269298,
				Fees: 129,
				'Cumulative Transactions': 6315520,
				'Cumulative Volume': 142687120,
				'Cumulative Fees': 70093
			},
			{
				DATE: '2023-01-20',
				Transactions: 15048,
				Volume: 253611,
				Fees: 146,
				'Cumulative Transactions': 6330568,
				'Cumulative Volume': 142940731,
				'Cumulative Fees': 70239
			},
			{
				DATE: '2023-01-21',
				Transactions: 12551,
				Volume: 166329,
				Fees: 129,
				'Cumulative Transactions': 6343119,
				'Cumulative Volume': 143107060,
				'Cumulative Fees': 70368
			},
			{
				DATE: '2023-01-22',
				Transactions: 12319,
				Volume: 251360,
				Fees: 131,
				'Cumulative Transactions': 6355438,
				'Cumulative Volume': 143358420,
				'Cumulative Fees': 70499
			},
			{
				DATE: '2023-01-23',
				Transactions: 11909,
				Volume: 244144,
				Fees: 122,
				'Cumulative Transactions': 6367347,
				'Cumulative Volume': 143602564,
				'Cumulative Fees': 70621
			},
			{
				DATE: '2023-01-24',
				Transactions: 12408,
				Volume: 565822,
				Fees: 156,
				'Cumulative Transactions': 6379755,
				'Cumulative Volume': 144168386,
				'Cumulative Fees': 70777
			},
			{
				DATE: '2023-01-25',
				Transactions: 11968,
				Volume: 380106,
				Fees: 129,
				'Cumulative Transactions': 6391723,
				'Cumulative Volume': 144548492,
				'Cumulative Fees': 70906
			},
			{
				DATE: '2023-01-26',
				Transactions: 13030,
				Volume: 392696,
				Fees: 133,
				'Cumulative Transactions': 6404753,
				'Cumulative Volume': 144941188,
				'Cumulative Fees': 71039
			},
			{
				DATE: '2023-01-27',
				Transactions: 14338,
				Volume: 365653,
				Fees: 171,
				'Cumulative Transactions': 6419091,
				'Cumulative Volume': 145306841,
				'Cumulative Fees': 71210
			},
			{
				DATE: '2023-01-28',
				Transactions: 15511,
				Volume: 461332,
				Fees: 167,
				'Cumulative Transactions': 6434602,
				'Cumulative Volume': 145768173,
				'Cumulative Fees': 71377
			},
			{
				DATE: '2023-01-29',
				Transactions: 13267,
				Volume: 350607,
				Fees: 127,
				'Cumulative Transactions': 6447869,
				'Cumulative Volume': 146118780,
				'Cumulative Fees': 71504
			},
			{
				DATE: '2023-01-30',
				Transactions: 16022,
				Volume: 326946,
				Fees: 164,
				'Cumulative Transactions': 6463891,
				'Cumulative Volume': 146445726,
				'Cumulative Fees': 71668
			},
			{
				DATE: '2023-01-31',
				Transactions: 11380,
				Volume: 369528,
				Fees: 111,
				'Cumulative Transactions': 6475271,
				'Cumulative Volume': 146815254,
				'Cumulative Fees': 71779
			},
			{
				DATE: '2023-02-01',
				Transactions: 14888,
				Volume: 753858,
				Fees: 174,
				'Cumulative Transactions': 6490159,
				'Cumulative Volume': 147569112,
				'Cumulative Fees': 71953
			},
			{
				DATE: '2023-02-02',
				Transactions: 18077,
				Volume: 536330,
				Fees: 202,
				'Cumulative Transactions': 6508236,
				'Cumulative Volume': 148105442,
				'Cumulative Fees': 72155
			},
			{
				DATE: '2023-02-03',
				Transactions: 13808,
				Volume: 585126,
				Fees: 125,
				'Cumulative Transactions': 6522044,
				'Cumulative Volume': 148690568,
				'Cumulative Fees': 72280
			},
			{
				DATE: '2023-02-04',
				Transactions: 10870,
				Volume: 166623,
				Fees: 96,
				'Cumulative Transactions': 6532914,
				'Cumulative Volume': 148857191,
				'Cumulative Fees': 72376
			},
			{
				DATE: '2023-02-05',
				Transactions: 12154,
				Volume: 556487,
				Fees: 119,
				'Cumulative Transactions': 6545068,
				'Cumulative Volume': 149413678,
				'Cumulative Fees': 72495
			},
			{
				DATE: '2023-02-06',
				Transactions: 16446,
				Volume: 548266,
				Fees: 155,
				'Cumulative Transactions': 6561514,
				'Cumulative Volume': 149961944,
				'Cumulative Fees': 72650
			},
			{
				DATE: '2023-02-07',
				Transactions: 13883,
				Volume: 202884,
				Fees: 124,
				'Cumulative Transactions': 6575397,
				'Cumulative Volume': 150164828,
				'Cumulative Fees': 72774
			},
			{
				DATE: '2023-02-08',
				Transactions: 13026,
				Volume: 334216,
				Fees: 116,
				'Cumulative Transactions': 6588423,
				'Cumulative Volume': 150499044,
				'Cumulative Fees': 72890
			},
			{
				DATE: '2023-02-09',
				Transactions: 14932,
				Volume: 663567,
				Fees: 167,
				'Cumulative Transactions': 6603355,
				'Cumulative Volume': 151162611,
				'Cumulative Fees': 73057
			},
			{
				DATE: '2023-02-10',
				Transactions: 11802,
				Volume: 114239,
				Fees: 112,
				'Cumulative Transactions': 6615157,
				'Cumulative Volume': 151276850,
				'Cumulative Fees': 73169
			},
			{
				DATE: '2023-02-11',
				Transactions: 9469,
				Volume: 123969,
				Fees: 83,
				'Cumulative Transactions': 6624626,
				'Cumulative Volume': 151400819,
				'Cumulative Fees': 73252
			},
			{
				DATE: '2023-02-12',
				Transactions: 10778,
				Volume: 112014,
				Fees: 102,
				'Cumulative Transactions': 6635404,
				'Cumulative Volume': 151512833,
				'Cumulative Fees': 73354
			},
			{
				DATE: '2023-02-13',
				Transactions: 13374,
				Volume: 533576,
				Fees: 137,
				'Cumulative Transactions': 6648778,
				'Cumulative Volume': 152046409,
				'Cumulative Fees': 73491
			},
			{
				DATE: '2023-02-14',
				Transactions: 11137,
				Volume: 581452,
				Fees: 118,
				'Cumulative Transactions': 6659915,
				'Cumulative Volume': 152627861,
				'Cumulative Fees': 73609
			},
			{
				DATE: '2023-02-15',
				Transactions: 16090,
				Volume: 421957,
				Fees: 192,
				'Cumulative Transactions': 6676005,
				'Cumulative Volume': 153049818,
				'Cumulative Fees': 73801
			},
			{
				DATE: '2023-02-16',
				Transactions: 17843,
				Volume: 412173,
				Fees: 217,
				'Cumulative Transactions': 6693848,
				'Cumulative Volume': 153461991,
				'Cumulative Fees': 74018
			},
			{
				DATE: '2023-02-17',
				Transactions: 15275,
				Volume: 363586,
				Fees: 155,
				'Cumulative Transactions': 6709123,
				'Cumulative Volume': 153825577,
				'Cumulative Fees': 74173
			},
			{
				DATE: '2023-02-18',
				Transactions: 13118,
				Volume: 105366,
				Fees: 117,
				'Cumulative Transactions': 6722241,
				'Cumulative Volume': 153930943,
				'Cumulative Fees': 74290
			},
			{
				DATE: '2023-02-19',
				Transactions: 13289,
				Volume: 143081,
				Fees: 136,
				'Cumulative Transactions': 6735530,
				'Cumulative Volume': 154074024,
				'Cumulative Fees': 74426
			},
			{
				DATE: '2023-02-20',
				Transactions: 16163,
				Volume: 415843,
				Fees: 190,
				'Cumulative Transactions': 6751693,
				'Cumulative Volume': 154489867,
				'Cumulative Fees': 74616
			},
			{
				DATE: '2023-02-21',
				Transactions: 16313,
				Volume: 202468,
				Fees: 181,
				'Cumulative Transactions': 6768006,
				'Cumulative Volume': 154692335,
				'Cumulative Fees': 74797
			},
			{
				DATE: '2023-02-22',
				Transactions: 18550,
				Volume: 1093956,
				Fees: 178,
				'Cumulative Transactions': 6786556,
				'Cumulative Volume': 155786291,
				'Cumulative Fees': 74975
			},
			{
				DATE: '2023-02-23',
				Transactions: 15426,
				Volume: 345107,
				Fees: 141,
				'Cumulative Transactions': 6801982,
				'Cumulative Volume': 156131398,
				'Cumulative Fees': 75116
			},
			{
				DATE: '2023-02-24',
				Transactions: 12776,
				Volume: 1567670,
				Fees: 155,
				'Cumulative Transactions': 6814758,
				'Cumulative Volume': 157699068,
				'Cumulative Fees': 75271
			},
			{
				DATE: '2023-02-25',
				Transactions: 10834,
				Volume: 438602,
				Fees: 103,
				'Cumulative Transactions': 6825592,
				'Cumulative Volume': 158137670,
				'Cumulative Fees': 75374
			},
			{
				DATE: '2023-02-26',
				Transactions: 9794,
				Volume: 119370,
				Fees: 89,
				'Cumulative Transactions': 6835386,
				'Cumulative Volume': 158257040,
				'Cumulative Fees': 75463
			},
			{
				DATE: '2023-02-27',
				Transactions: 10664,
				Volume: 136739,
				Fees: 106,
				'Cumulative Transactions': 6846050,
				'Cumulative Volume': 158393779,
				'Cumulative Fees': 75569
			},
			{
				DATE: '2023-02-28',
				Transactions: 10673,
				Volume: 842633,
				Fees: 112,
				'Cumulative Transactions': 6856723,
				'Cumulative Volume': 159236412,
				'Cumulative Fees': 75681
			},
			{
				DATE: '2023-03-01',
				Transactions: 11393,
				Volume: 343120,
				Fees: 115,
				'Cumulative Transactions': 6868116,
				'Cumulative Volume': 159579532,
				'Cumulative Fees': 75796
			},
			{
				DATE: '2023-03-02',
				Transactions: 9984,
				Volume: 311043,
				Fees: 94,
				'Cumulative Transactions': 6878100,
				'Cumulative Volume': 159890575,
				'Cumulative Fees': 75890
			},
			{
				DATE: '2023-03-03',
				Transactions: 10780,
				Volume: 1204425,
				Fees: 156,
				'Cumulative Transactions': 6888880,
				'Cumulative Volume': 161095000,
				'Cumulative Fees': 76046
			},
			{
				DATE: '2023-03-04',
				Transactions: 8661,
				Volume: 318315,
				Fees: 88,
				'Cumulative Transactions': 6897541,
				'Cumulative Volume': 161413315,
				'Cumulative Fees': 76134
			},
			{
				DATE: '2023-03-05',
				Transactions: 8250,
				Volume: 388155,
				Fees: 71,
				'Cumulative Transactions': 6905791,
				'Cumulative Volume': 161801470,
				'Cumulative Fees': 76205
			},
			{
				DATE: '2023-03-06',
				Transactions: 9285,
				Volume: 339441,
				Fees: 93,
				'Cumulative Transactions': 6915076,
				'Cumulative Volume': 162140911,
				'Cumulative Fees': 76298
			},
			{
				DATE: '2023-03-07',
				Transactions: 13686,
				Volume: 364943,
				Fees: 105,
				'Cumulative Transactions': 6928762,
				'Cumulative Volume': 162505854,
				'Cumulative Fees': 76403
			},
			{
				DATE: '2023-03-08',
				Transactions: 14248,
				Volume: 659268,
				Fees: 136,
				'Cumulative Transactions': 6943010,
				'Cumulative Volume': 163165122,
				'Cumulative Fees': 76539
			},
			{
				DATE: '2023-03-09',
				Transactions: 12788,
				Volume: 257907,
				Fees: 144,
				'Cumulative Transactions': 6955798,
				'Cumulative Volume': 163423029,
				'Cumulative Fees': 76683
			},
			{
				DATE: '2023-03-10',
				Transactions: 14768,
				Volume: 319204,
				Fees: 211,
				'Cumulative Transactions': 6970566,
				'Cumulative Volume': 163742233,
				'Cumulative Fees': 76894
			},
			{
				DATE: '2023-03-11',
				Transactions: 23096,
				Volume: 683739,
				Fees: 341,
				'Cumulative Transactions': 6993662,
				'Cumulative Volume': 164425972,
				'Cumulative Fees': 77235
			},
			{
				DATE: '2023-03-12',
				Transactions: 11214,
				Volume: 336890,
				Fees: 149,
				'Cumulative Transactions': 7004876,
				'Cumulative Volume': 164762862,
				'Cumulative Fees': 77384
			},
			{
				DATE: '2023-03-13',
				Transactions: 15952,
				Volume: 501429,
				Fees: 186,
				'Cumulative Transactions': 7020828,
				'Cumulative Volume': 165264291,
				'Cumulative Fees': 77570
			},
			{
				DATE: '2023-03-14',
				Transactions: 15617,
				Volume: 600006,
				Fees: 191,
				'Cumulative Transactions': 7036445,
				'Cumulative Volume': 165864297,
				'Cumulative Fees': 77761
			},
			{
				DATE: '2023-03-15',
				Transactions: 3089,
				Volume: 135167,
				Fees: 31,
				'Cumulative Transactions': 7039534,
				'Cumulative Volume': 165999464,
				'Cumulative Fees': 77792
			}
		],
		SWAPS: [
			{
				DATE: '2021-02-02',
				Swaps: 10,
				Volume: 3,
				Fees: 1,
				'Cumulative Swaps': 10,
				'Cumulative Volume': 3,
				'Cumulative Fees': 1
			},
			{
				DATE: '2021-02-03',
				Swaps: 384,
				Volume: 26716,
				Fees: 40,
				'Cumulative Swaps': 394,
				'Cumulative Volume': 26719,
				'Cumulative Fees': 41
			},
			{
				DATE: '2021-02-04',
				Swaps: 372,
				Volume: 40734,
				Fees: 38,
				'Cumulative Swaps': 766,
				'Cumulative Volume': 67453,
				'Cumulative Fees': 79
			},
			{
				DATE: '2021-02-05',
				Swaps: 192,
				Volume: 23925,
				Fees: 20,
				'Cumulative Swaps': 958,
				'Cumulative Volume': 91378,
				'Cumulative Fees': 99
			},
			{
				DATE: '2021-02-06',
				Swaps: 113,
				Volume: 15400,
				Fees: 12,
				'Cumulative Swaps': 1071,
				'Cumulative Volume': 106778,
				'Cumulative Fees': 111
			},
			{
				DATE: '2021-02-07',
				Swaps: 169,
				Volume: 19859,
				Fees: 18,
				'Cumulative Swaps': 1240,
				'Cumulative Volume': 126637,
				'Cumulative Fees': 129
			},
			{
				DATE: '2021-02-08',
				Swaps: 125,
				Volume: 13049,
				Fees: 14,
				'Cumulative Swaps': 1365,
				'Cumulative Volume': 139686,
				'Cumulative Fees': 143
			},
			{
				DATE: '2021-02-09',
				Swaps: 333,
				Volume: 14423,
				Fees: 34,
				'Cumulative Swaps': 1698,
				'Cumulative Volume': 154109,
				'Cumulative Fees': 177
			},
			{
				DATE: '2021-02-10',
				Swaps: 246,
				Volume: 11751,
				Fees: 20,
				'Cumulative Swaps': 1944,
				'Cumulative Volume': 165860,
				'Cumulative Fees': 197
			},
			{
				DATE: '2021-02-11',
				Swaps: 2,
				Volume: 62,
				Fees: 0,
				'Cumulative Swaps': 1946,
				'Cumulative Volume': 165922,
				'Cumulative Fees': 197
			},
			{
				DATE: '2021-02-12',
				Swaps: 86,
				Volume: 3153,
				Fees: 6,
				'Cumulative Swaps': 2032,
				'Cumulative Volume': 169075,
				'Cumulative Fees': 203
			},
			{
				DATE: '2021-02-13',
				Swaps: 73,
				Volume: 2566,
				Fees: 4,
				'Cumulative Swaps': 2105,
				'Cumulative Volume': 171641,
				'Cumulative Fees': 207
			},
			{
				DATE: '2021-02-14',
				Swaps: 163,
				Volume: 12282,
				Fees: 10,
				'Cumulative Swaps': 2268,
				'Cumulative Volume': 183923,
				'Cumulative Fees': 217
			},
			{
				DATE: '2021-02-15',
				Swaps: 212,
				Volume: 19750,
				Fees: 13,
				'Cumulative Swaps': 2480,
				'Cumulative Volume': 203673,
				'Cumulative Fees': 230
			},
			{
				DATE: '2021-02-16',
				Swaps: 152,
				Volume: 7417,
				Fees: 9,
				'Cumulative Swaps': 2632,
				'Cumulative Volume': 211090,
				'Cumulative Fees': 239
			},
			{
				DATE: '2021-02-17',
				Swaps: 191,
				Volume: 5567,
				Fees: 12,
				'Cumulative Swaps': 2823,
				'Cumulative Volume': 216657,
				'Cumulative Fees': 251
			},
			{
				DATE: '2021-02-18',
				Swaps: 204,
				Volume: 16870,
				Fees: 12,
				'Cumulative Swaps': 3027,
				'Cumulative Volume': 233527,
				'Cumulative Fees': 263
			},
			{
				DATE: '2021-02-19',
				Swaps: 162,
				Volume: 17317,
				Fees: 10,
				'Cumulative Swaps': 3189,
				'Cumulative Volume': 250844,
				'Cumulative Fees': 273
			},
			{
				DATE: '2021-02-20',
				Swaps: 147,
				Volume: 10796,
				Fees: 9,
				'Cumulative Swaps': 3336,
				'Cumulative Volume': 261640,
				'Cumulative Fees': 282
			},
			{
				DATE: '2021-02-21',
				Swaps: 112,
				Volume: 10625,
				Fees: 7,
				'Cumulative Swaps': 3448,
				'Cumulative Volume': 272265,
				'Cumulative Fees': 289
			},
			{
				DATE: '2021-02-22',
				Swaps: 166,
				Volume: 40162,
				Fees: 10,
				'Cumulative Swaps': 3614,
				'Cumulative Volume': 312427,
				'Cumulative Fees': 299
			},
			{
				DATE: '2021-02-23',
				Swaps: 158,
				Volume: 51279,
				Fees: 10,
				'Cumulative Swaps': 3772,
				'Cumulative Volume': 363706,
				'Cumulative Fees': 309
			},
			{
				DATE: '2021-02-24',
				Swaps: 94,
				Volume: 18393,
				Fees: 6,
				'Cumulative Swaps': 3866,
				'Cumulative Volume': 382099,
				'Cumulative Fees': 315
			},
			{
				DATE: '2021-02-25',
				Swaps: 181,
				Volume: 20676,
				Fees: 11,
				'Cumulative Swaps': 4047,
				'Cumulative Volume': 402775,
				'Cumulative Fees': 326
			},
			{
				DATE: '2021-02-26',
				Swaps: 136,
				Volume: 25047,
				Fees: 8,
				'Cumulative Swaps': 4183,
				'Cumulative Volume': 427822,
				'Cumulative Fees': 334
			},
			{
				DATE: '2021-02-27',
				Swaps: 111,
				Volume: 15781,
				Fees: 7,
				'Cumulative Swaps': 4294,
				'Cumulative Volume': 443603,
				'Cumulative Fees': 341
			},
			{
				DATE: '2021-02-28',
				Swaps: 165,
				Volume: 19512,
				Fees: 10,
				'Cumulative Swaps': 4459,
				'Cumulative Volume': 463115,
				'Cumulative Fees': 351
			},
			{
				DATE: '2021-03-01',
				Swaps: 135,
				Volume: 11198,
				Fees: 8,
				'Cumulative Swaps': 4594,
				'Cumulative Volume': 474313,
				'Cumulative Fees': 359
			},
			{
				DATE: '2021-03-02',
				Swaps: 190,
				Volume: 22647,
				Fees: 11,
				'Cumulative Swaps': 4784,
				'Cumulative Volume': 496960,
				'Cumulative Fees': 370
			},
			{
				DATE: '2021-03-03',
				Swaps: 275,
				Volume: 8858,
				Fees: 17,
				'Cumulative Swaps': 5059,
				'Cumulative Volume': 505818,
				'Cumulative Fees': 387
			},
			{
				DATE: '2021-03-04',
				Swaps: 244,
				Volume: 33198,
				Fees: 14,
				'Cumulative Swaps': 5303,
				'Cumulative Volume': 539016,
				'Cumulative Fees': 401
			},
			{
				DATE: '2021-03-05',
				Swaps: 137,
				Volume: 7475,
				Fees: 9,
				'Cumulative Swaps': 5440,
				'Cumulative Volume': 546491,
				'Cumulative Fees': 410
			},
			{
				DATE: '2021-03-06',
				Swaps: 94,
				Volume: 4150,
				Fees: 7,
				'Cumulative Swaps': 5534,
				'Cumulative Volume': 550641,
				'Cumulative Fees': 417
			},
			{
				DATE: '2021-03-07',
				Swaps: 152,
				Volume: 4946,
				Fees: 10,
				'Cumulative Swaps': 5686,
				'Cumulative Volume': 555587,
				'Cumulative Fees': 427
			},
			{
				DATE: '2021-03-08',
				Swaps: 171,
				Volume: 33849,
				Fees: 11,
				'Cumulative Swaps': 5857,
				'Cumulative Volume': 589436,
				'Cumulative Fees': 438
			},
			{
				DATE: '2021-03-09',
				Swaps: 286,
				Volume: 47845,
				Fees: 20,
				'Cumulative Swaps': 6143,
				'Cumulative Volume': 637281,
				'Cumulative Fees': 458
			},
			{
				DATE: '2021-03-10',
				Swaps: 210,
				Volume: 18082,
				Fees: 17,
				'Cumulative Swaps': 6353,
				'Cumulative Volume': 655363,
				'Cumulative Fees': 475
			},
			{
				DATE: '2021-03-11',
				Swaps: 196,
				Volume: 12189,
				Fees: 16,
				'Cumulative Swaps': 6549,
				'Cumulative Volume': 667552,
				'Cumulative Fees': 491
			},
			{
				DATE: '2021-03-12',
				Swaps: 256,
				Volume: 40011,
				Fees: 19,
				'Cumulative Swaps': 6805,
				'Cumulative Volume': 707563,
				'Cumulative Fees': 510
			},
			{
				DATE: '2021-03-13',
				Swaps: 194,
				Volume: 4912,
				Fees: 14,
				'Cumulative Swaps': 6999,
				'Cumulative Volume': 712475,
				'Cumulative Fees': 524
			},
			{
				DATE: '2021-03-14',
				Swaps: 245,
				Volume: 15711,
				Fees: 18,
				'Cumulative Swaps': 7244,
				'Cumulative Volume': 728186,
				'Cumulative Fees': 542
			},
			{
				DATE: '2021-03-15',
				Swaps: 206,
				Volume: 28366,
				Fees: 14,
				'Cumulative Swaps': 7450,
				'Cumulative Volume': 756552,
				'Cumulative Fees': 556
			},
			{
				DATE: '2021-03-16',
				Swaps: 241,
				Volume: 12740,
				Fees: 17,
				'Cumulative Swaps': 7691,
				'Cumulative Volume': 769292,
				'Cumulative Fees': 573
			},
			{
				DATE: '2021-03-17',
				Swaps: 257,
				Volume: 20307,
				Fees: 16,
				'Cumulative Swaps': 7948,
				'Cumulative Volume': 789599,
				'Cumulative Fees': 589
			},
			{
				DATE: '2021-03-18',
				Swaps: 593,
				Volume: 15066,
				Fees: 43,
				'Cumulative Swaps': 8541,
				'Cumulative Volume': 804665,
				'Cumulative Fees': 632
			},
			{
				DATE: '2021-03-19',
				Swaps: 415,
				Volume: 7717,
				Fees: 26,
				'Cumulative Swaps': 8956,
				'Cumulative Volume': 812382,
				'Cumulative Fees': 658
			},
			{
				DATE: '2021-03-20',
				Swaps: 315,
				Volume: 58880,
				Fees: 19,
				'Cumulative Swaps': 9271,
				'Cumulative Volume': 871262,
				'Cumulative Fees': 677
			},
			{
				DATE: '2021-03-21',
				Swaps: 215,
				Volume: 15240,
				Fees: 14,
				'Cumulative Swaps': 9486,
				'Cumulative Volume': 886502,
				'Cumulative Fees': 691
			},
			{
				DATE: '2021-03-22',
				Swaps: 294,
				Volume: 39471,
				Fees: 21,
				'Cumulative Swaps': 9780,
				'Cumulative Volume': 925973,
				'Cumulative Fees': 712
			},
			{
				DATE: '2021-03-23',
				Swaps: 207,
				Volume: 47125,
				Fees: 15,
				'Cumulative Swaps': 9987,
				'Cumulative Volume': 973098,
				'Cumulative Fees': 727
			},
			{
				DATE: '2021-03-24',
				Swaps: 106,
				Volume: 4475,
				Fees: 9,
				'Cumulative Swaps': 10093,
				'Cumulative Volume': 977573,
				'Cumulative Fees': 736
			},
			{
				DATE: '2021-03-25',
				Swaps: 144,
				Volume: 3120,
				Fees: 11,
				'Cumulative Swaps': 10237,
				'Cumulative Volume': 980693,
				'Cumulative Fees': 747
			},
			{
				DATE: '2021-03-26',
				Swaps: 115,
				Volume: 8858,
				Fees: 8,
				'Cumulative Swaps': 10352,
				'Cumulative Volume': 989551,
				'Cumulative Fees': 755
			},
			{
				DATE: '2021-03-27',
				Swaps: 130,
				Volume: 3306,
				Fees: 9,
				'Cumulative Swaps': 10482,
				'Cumulative Volume': 992857,
				'Cumulative Fees': 764
			},
			{
				DATE: '2021-03-28',
				Swaps: 731,
				Volume: 25629,
				Fees: 46,
				'Cumulative Swaps': 11213,
				'Cumulative Volume': 1018486,
				'Cumulative Fees': 810
			},
			{
				DATE: '2021-03-29',
				Swaps: 483,
				Volume: 8769,
				Fees: 36,
				'Cumulative Swaps': 11696,
				'Cumulative Volume': 1027255,
				'Cumulative Fees': 846
			},
			{
				DATE: '2021-03-30',
				Swaps: 354,
				Volume: 22727,
				Fees: 25,
				'Cumulative Swaps': 12050,
				'Cumulative Volume': 1049982,
				'Cumulative Fees': 871
			},
			{
				DATE: '2021-03-31',
				Swaps: 179,
				Volume: 14324,
				Fees: 10,
				'Cumulative Swaps': 12229,
				'Cumulative Volume': 1064306,
				'Cumulative Fees': 881
			},
			{
				DATE: '2021-04-01',
				Swaps: 598,
				Volume: 11912,
				Fees: 23,
				'Cumulative Swaps': 12827,
				'Cumulative Volume': 1076218,
				'Cumulative Fees': 904
			},
			{
				DATE: '2021-04-02',
				Swaps: 395,
				Volume: 10262,
				Fees: 15,
				'Cumulative Swaps': 13222,
				'Cumulative Volume': 1086480,
				'Cumulative Fees': 919
			},
			{
				DATE: '2021-04-03',
				Swaps: 393,
				Volume: 10979,
				Fees: 16,
				'Cumulative Swaps': 13615,
				'Cumulative Volume': 1097459,
				'Cumulative Fees': 935
			},
			{
				DATE: '2021-04-04',
				Swaps: 306,
				Volume: 6562,
				Fees: 12,
				'Cumulative Swaps': 13921,
				'Cumulative Volume': 1104021,
				'Cumulative Fees': 947
			},
			{
				DATE: '2021-04-05',
				Swaps: 576,
				Volume: 11824,
				Fees: 22,
				'Cumulative Swaps': 14497,
				'Cumulative Volume': 1115845,
				'Cumulative Fees': 969
			},
			{
				DATE: '2021-04-06',
				Swaps: 357,
				Volume: 6200,
				Fees: 14,
				'Cumulative Swaps': 14854,
				'Cumulative Volume': 1122045,
				'Cumulative Fees': 983
			},
			{
				DATE: '2021-04-07',
				Swaps: 276,
				Volume: 3945,
				Fees: 12,
				'Cumulative Swaps': 15130,
				'Cumulative Volume': 1125990,
				'Cumulative Fees': 995
			},
			{
				DATE: '2021-04-08',
				Swaps: 267,
				Volume: 2582,
				Fees: 12,
				'Cumulative Swaps': 15397,
				'Cumulative Volume': 1128572,
				'Cumulative Fees': 1007
			},
			{
				DATE: '2021-04-09',
				Swaps: 232,
				Volume: 2425,
				Fees: 9,
				'Cumulative Swaps': 15629,
				'Cumulative Volume': 1130997,
				'Cumulative Fees': 1016
			},
			{
				DATE: '2021-04-10',
				Swaps: 190,
				Volume: 4069,
				Fees: 7,
				'Cumulative Swaps': 15819,
				'Cumulative Volume': 1135066,
				'Cumulative Fees': 1023
			},
			{
				DATE: '2021-04-11',
				Swaps: 137,
				Volume: 1625,
				Fees: 5,
				'Cumulative Swaps': 15956,
				'Cumulative Volume': 1136691,
				'Cumulative Fees': 1028
			},
			{
				DATE: '2021-04-12',
				Swaps: 215,
				Volume: 3334,
				Fees: 8,
				'Cumulative Swaps': 16171,
				'Cumulative Volume': 1140025,
				'Cumulative Fees': 1036
			},
			{
				DATE: '2021-04-13',
				Swaps: 134,
				Volume: 4433,
				Fees: 5,
				'Cumulative Swaps': 16305,
				'Cumulative Volume': 1144458,
				'Cumulative Fees': 1041
			},
			{
				DATE: '2021-04-14',
				Swaps: 224,
				Volume: 8238,
				Fees: 9,
				'Cumulative Swaps': 16529,
				'Cumulative Volume': 1152696,
				'Cumulative Fees': 1050
			},
			{
				DATE: '2021-04-15',
				Swaps: 147,
				Volume: 2815,
				Fees: 6,
				'Cumulative Swaps': 16676,
				'Cumulative Volume': 1155511,
				'Cumulative Fees': 1056
			},
			{
				DATE: '2021-04-16',
				Swaps: 126,
				Volume: 2488,
				Fees: 6,
				'Cumulative Swaps': 16802,
				'Cumulative Volume': 1157999,
				'Cumulative Fees': 1062
			},
			{
				DATE: '2021-04-17',
				Swaps: 97,
				Volume: 2704,
				Fees: 4,
				'Cumulative Swaps': 16899,
				'Cumulative Volume': 1160703,
				'Cumulative Fees': 1066
			},
			{
				DATE: '2021-04-18',
				Swaps: 169,
				Volume: 10248,
				Fees: 7,
				'Cumulative Swaps': 17068,
				'Cumulative Volume': 1170951,
				'Cumulative Fees': 1073
			},
			{
				DATE: '2021-04-19',
				Swaps: 267,
				Volume: 2744,
				Fees: 12,
				'Cumulative Swaps': 17335,
				'Cumulative Volume': 1173695,
				'Cumulative Fees': 1085
			},
			{
				DATE: '2021-04-20',
				Swaps: 341,
				Volume: 5641,
				Fees: 13,
				'Cumulative Swaps': 17676,
				'Cumulative Volume': 1179336,
				'Cumulative Fees': 1098
			},
			{
				DATE: '2021-04-21',
				Swaps: 435,
				Volume: 6766,
				Fees: 16,
				'Cumulative Swaps': 18111,
				'Cumulative Volume': 1186102,
				'Cumulative Fees': 1114
			},
			{
				DATE: '2021-04-22',
				Swaps: 315,
				Volume: 6808,
				Fees: 13,
				'Cumulative Swaps': 18426,
				'Cumulative Volume': 1192910,
				'Cumulative Fees': 1127
			},
			{
				DATE: '2021-04-23',
				Swaps: 227,
				Volume: 4722,
				Fees: 9,
				'Cumulative Swaps': 18653,
				'Cumulative Volume': 1197632,
				'Cumulative Fees': 1136
			},
			{
				DATE: '2021-04-24',
				Swaps: 169,
				Volume: 2420,
				Fees: 7,
				'Cumulative Swaps': 18822,
				'Cumulative Volume': 1200052,
				'Cumulative Fees': 1143
			},
			{
				DATE: '2021-04-25',
				Swaps: 151,
				Volume: 1825,
				Fees: 7,
				'Cumulative Swaps': 18973,
				'Cumulative Volume': 1201877,
				'Cumulative Fees': 1150
			},
			{
				DATE: '2021-04-26',
				Swaps: 141,
				Volume: 12833,
				Fees: 6,
				'Cumulative Swaps': 19114,
				'Cumulative Volume': 1214710,
				'Cumulative Fees': 1156
			},
			{
				DATE: '2021-04-27',
				Swaps: 118,
				Volume: 3189,
				Fees: 5,
				'Cumulative Swaps': 19232,
				'Cumulative Volume': 1217899,
				'Cumulative Fees': 1161
			},
			{
				DATE: '2021-04-28',
				Swaps: 306,
				Volume: 6312,
				Fees: 13,
				'Cumulative Swaps': 19538,
				'Cumulative Volume': 1224211,
				'Cumulative Fees': 1174
			},
			{
				DATE: '2021-04-29',
				Swaps: 249,
				Volume: 2397,
				Fees: 10,
				'Cumulative Swaps': 19787,
				'Cumulative Volume': 1226608,
				'Cumulative Fees': 1184
			},
			{
				DATE: '2021-04-30',
				Swaps: 565,
				Volume: 31018,
				Fees: 23,
				'Cumulative Swaps': 20352,
				'Cumulative Volume': 1257626,
				'Cumulative Fees': 1207
			},
			{
				DATE: '2021-05-01',
				Swaps: 789,
				Volume: 9149,
				Fees: 31,
				'Cumulative Swaps': 21141,
				'Cumulative Volume': 1266775,
				'Cumulative Fees': 1238
			},
			{
				DATE: '2021-05-02',
				Swaps: 515,
				Volume: 8204,
				Fees: 20,
				'Cumulative Swaps': 21656,
				'Cumulative Volume': 1274979,
				'Cumulative Fees': 1258
			},
			{
				DATE: '2021-05-03',
				Swaps: 617,
				Volume: 17858,
				Fees: 27,
				'Cumulative Swaps': 22273,
				'Cumulative Volume': 1292837,
				'Cumulative Fees': 1285
			},
			{
				DATE: '2021-05-04',
				Swaps: 530,
				Volume: 14905,
				Fees: 22,
				'Cumulative Swaps': 22803,
				'Cumulative Volume': 1307742,
				'Cumulative Fees': 1307
			},
			{
				DATE: '2021-05-05',
				Swaps: 361,
				Volume: 5130,
				Fees: 16,
				'Cumulative Swaps': 23164,
				'Cumulative Volume': 1312872,
				'Cumulative Fees': 1323
			},
			{
				DATE: '2021-05-06',
				Swaps: 557,
				Volume: 6339,
				Fees: 30,
				'Cumulative Swaps': 23721,
				'Cumulative Volume': 1319211,
				'Cumulative Fees': 1353
			},
			{
				DATE: '2021-05-07',
				Swaps: 508,
				Volume: 7350,
				Fees: 23,
				'Cumulative Swaps': 24229,
				'Cumulative Volume': 1326561,
				'Cumulative Fees': 1376
			},
			{
				DATE: '2021-05-08',
				Swaps: 421,
				Volume: 13329,
				Fees: 18,
				'Cumulative Swaps': 24650,
				'Cumulative Volume': 1339890,
				'Cumulative Fees': 1394
			},
			{
				DATE: '2021-05-09',
				Swaps: 400,
				Volume: 5698,
				Fees: 19,
				'Cumulative Swaps': 25050,
				'Cumulative Volume': 1345588,
				'Cumulative Fees': 1413
			},
			{
				DATE: '2021-05-10',
				Swaps: 404,
				Volume: 7943,
				Fees: 17,
				'Cumulative Swaps': 25454,
				'Cumulative Volume': 1353531,
				'Cumulative Fees': 1430
			},
			{
				DATE: '2021-05-11',
				Swaps: 550,
				Volume: 4935,
				Fees: 27,
				'Cumulative Swaps': 26004,
				'Cumulative Volume': 1358466,
				'Cumulative Fees': 1457
			},
			{
				DATE: '2021-05-12',
				Swaps: 469,
				Volume: 7259,
				Fees: 24,
				'Cumulative Swaps': 26473,
				'Cumulative Volume': 1365725,
				'Cumulative Fees': 1481
			},
			{
				DATE: '2021-05-13',
				Swaps: 575,
				Volume: 8399,
				Fees: 22,
				'Cumulative Swaps': 27048,
				'Cumulative Volume': 1374124,
				'Cumulative Fees': 1503
			},
			{
				DATE: '2021-05-14',
				Swaps: 994,
				Volume: 35324,
				Fees: 37,
				'Cumulative Swaps': 28042,
				'Cumulative Volume': 1409448,
				'Cumulative Fees': 1540
			},
			{
				DATE: '2021-05-15',
				Swaps: 536,
				Volume: 8047,
				Fees: 22,
				'Cumulative Swaps': 28578,
				'Cumulative Volume': 1417495,
				'Cumulative Fees': 1562
			},
			{
				DATE: '2021-05-16',
				Swaps: 483,
				Volume: 8060,
				Fees: 18,
				'Cumulative Swaps': 29061,
				'Cumulative Volume': 1425555,
				'Cumulative Fees': 1580
			},
			{
				DATE: '2021-05-17',
				Swaps: 518,
				Volume: 13018,
				Fees: 18,
				'Cumulative Swaps': 29579,
				'Cumulative Volume': 1438573,
				'Cumulative Fees': 1598
			},
			{
				DATE: '2021-05-18',
				Swaps: 449,
				Volume: 6791,
				Fees: 17,
				'Cumulative Swaps': 30028,
				'Cumulative Volume': 1445364,
				'Cumulative Fees': 1615
			},
			{
				DATE: '2021-05-19',
				Swaps: 414,
				Volume: 11032,
				Fees: 15,
				'Cumulative Swaps': 30442,
				'Cumulative Volume': 1456396,
				'Cumulative Fees': 1630
			},
			{
				DATE: '2021-05-20',
				Swaps: 268,
				Volume: 4037,
				Fees: 9,
				'Cumulative Swaps': 30710,
				'Cumulative Volume': 1460433,
				'Cumulative Fees': 1639
			},
			{
				DATE: '2021-05-21',
				Swaps: 331,
				Volume: 13358,
				Fees: 12,
				'Cumulative Swaps': 31041,
				'Cumulative Volume': 1473791,
				'Cumulative Fees': 1651
			},
			{
				DATE: '2021-05-22',
				Swaps: 235,
				Volume: 3021,
				Fees: 8,
				'Cumulative Swaps': 31276,
				'Cumulative Volume': 1476812,
				'Cumulative Fees': 1659
			},
			{
				DATE: '2021-05-23',
				Swaps: 466,
				Volume: 14851,
				Fees: 18,
				'Cumulative Swaps': 31742,
				'Cumulative Volume': 1491663,
				'Cumulative Fees': 1677
			},
			{
				DATE: '2021-05-24',
				Swaps: 281,
				Volume: 6238,
				Fees: 11,
				'Cumulative Swaps': 32023,
				'Cumulative Volume': 1497901,
				'Cumulative Fees': 1688
			},
			{
				DATE: '2021-05-25',
				Swaps: 186,
				Volume: 7234,
				Fees: 7,
				'Cumulative Swaps': 32209,
				'Cumulative Volume': 1505135,
				'Cumulative Fees': 1695
			},
			{
				DATE: '2021-05-26',
				Swaps: 219,
				Volume: 1050,
				Fees: 8,
				'Cumulative Swaps': 32428,
				'Cumulative Volume': 1506185,
				'Cumulative Fees': 1703
			},
			{
				DATE: '2021-05-27',
				Swaps: 193,
				Volume: 6418,
				Fees: 7,
				'Cumulative Swaps': 32621,
				'Cumulative Volume': 1512603,
				'Cumulative Fees': 1710
			},
			{
				DATE: '2021-05-28',
				Swaps: 243,
				Volume: 8930,
				Fees: 9,
				'Cumulative Swaps': 32864,
				'Cumulative Volume': 1521533,
				'Cumulative Fees': 1719
			},
			{
				DATE: '2021-05-29',
				Swaps: 225,
				Volume: 4040,
				Fees: 8,
				'Cumulative Swaps': 33089,
				'Cumulative Volume': 1525573,
				'Cumulative Fees': 1727
			},
			{
				DATE: '2021-05-30',
				Swaps: 147,
				Volume: 2110,
				Fees: 6,
				'Cumulative Swaps': 33236,
				'Cumulative Volume': 1527683,
				'Cumulative Fees': 1733
			},
			{
				DATE: '2021-05-31',
				Swaps: 233,
				Volume: 4707,
				Fees: 9,
				'Cumulative Swaps': 33469,
				'Cumulative Volume': 1532390,
				'Cumulative Fees': 1742
			},
			{
				DATE: '2021-06-01',
				Swaps: 211,
				Volume: 4756,
				Fees: 8,
				'Cumulative Swaps': 33680,
				'Cumulative Volume': 1537146,
				'Cumulative Fees': 1750
			},
			{
				DATE: '2021-06-02',
				Swaps: 216,
				Volume: 2743,
				Fees: 8,
				'Cumulative Swaps': 33896,
				'Cumulative Volume': 1539889,
				'Cumulative Fees': 1758
			},
			{
				DATE: '2021-06-03',
				Swaps: 235,
				Volume: 2647,
				Fees: 8,
				'Cumulative Swaps': 34131,
				'Cumulative Volume': 1542536,
				'Cumulative Fees': 1766
			},
			{
				DATE: '2021-06-04',
				Swaps: 119,
				Volume: 1650,
				Fees: 4,
				'Cumulative Swaps': 34250,
				'Cumulative Volume': 1544186,
				'Cumulative Fees': 1770
			},
			{
				DATE: '2021-06-05',
				Swaps: 123,
				Volume: 6594,
				Fees: 4,
				'Cumulative Swaps': 34373,
				'Cumulative Volume': 1550780,
				'Cumulative Fees': 1774
			},
			{
				DATE: '2021-06-06',
				Swaps: 87,
				Volume: 502,
				Fees: 3,
				'Cumulative Swaps': 34460,
				'Cumulative Volume': 1551282,
				'Cumulative Fees': 1777
			},
			{
				DATE: '2021-06-07',
				Swaps: 191,
				Volume: 60338,
				Fees: 7,
				'Cumulative Swaps': 34651,
				'Cumulative Volume': 1611620,
				'Cumulative Fees': 1784
			},
			{
				DATE: '2021-06-08',
				Swaps: 244,
				Volume: 9209,
				Fees: 9,
				'Cumulative Swaps': 34895,
				'Cumulative Volume': 1620829,
				'Cumulative Fees': 1793
			},
			{
				DATE: '2021-06-09',
				Swaps: 196,
				Volume: 2507,
				Fees: 7,
				'Cumulative Swaps': 35091,
				'Cumulative Volume': 1623336,
				'Cumulative Fees': 1800
			},
			{
				DATE: '2021-06-10',
				Swaps: 107,
				Volume: 886,
				Fees: 4,
				'Cumulative Swaps': 35198,
				'Cumulative Volume': 1624222,
				'Cumulative Fees': 1804
			},
			{
				DATE: '2021-06-11',
				Swaps: 169,
				Volume: 5327,
				Fees: 6,
				'Cumulative Swaps': 35367,
				'Cumulative Volume': 1629549,
				'Cumulative Fees': 1810
			},
			{
				DATE: '2021-06-12',
				Swaps: 128,
				Volume: 1981,
				Fees: 4,
				'Cumulative Swaps': 35495,
				'Cumulative Volume': 1631530,
				'Cumulative Fees': 1814
			},
			{
				DATE: '2021-06-13',
				Swaps: 223,
				Volume: 20418,
				Fees: 8,
				'Cumulative Swaps': 35718,
				'Cumulative Volume': 1651948,
				'Cumulative Fees': 1822
			},
			{
				DATE: '2021-06-14',
				Swaps: 182,
				Volume: 1854,
				Fees: 7,
				'Cumulative Swaps': 35900,
				'Cumulative Volume': 1653802,
				'Cumulative Fees': 1829
			},
			{
				DATE: '2021-06-15',
				Swaps: 167,
				Volume: 18713,
				Fees: 6,
				'Cumulative Swaps': 36067,
				'Cumulative Volume': 1672515,
				'Cumulative Fees': 1835
			},
			{
				DATE: '2021-06-16',
				Swaps: 202,
				Volume: 5023,
				Fees: 7,
				'Cumulative Swaps': 36269,
				'Cumulative Volume': 1677538,
				'Cumulative Fees': 1842
			},
			{
				DATE: '2021-06-17',
				Swaps: 139,
				Volume: 2566,
				Fees: 5,
				'Cumulative Swaps': 36408,
				'Cumulative Volume': 1680104,
				'Cumulative Fees': 1847
			},
			{
				DATE: '2021-06-18',
				Swaps: 135,
				Volume: 5056,
				Fees: 5,
				'Cumulative Swaps': 36543,
				'Cumulative Volume': 1685160,
				'Cumulative Fees': 1852
			},
			{
				DATE: '2021-06-19',
				Swaps: 126,
				Volume: 2722,
				Fees: 4,
				'Cumulative Swaps': 36669,
				'Cumulative Volume': 1687882,
				'Cumulative Fees': 1856
			},
			{
				DATE: '2021-06-20',
				Swaps: 215,
				Volume: 4030,
				Fees: 7,
				'Cumulative Swaps': 36884,
				'Cumulative Volume': 1691912,
				'Cumulative Fees': 1863
			},
			{
				DATE: '2021-06-21',
				Swaps: 188,
				Volume: 2882,
				Fees: 7,
				'Cumulative Swaps': 37072,
				'Cumulative Volume': 1694794,
				'Cumulative Fees': 1870
			},
			{
				DATE: '2021-06-22',
				Swaps: 253,
				Volume: 9175,
				Fees: 9,
				'Cumulative Swaps': 37325,
				'Cumulative Volume': 1703969,
				'Cumulative Fees': 1879
			},
			{
				DATE: '2021-06-23',
				Swaps: 132,
				Volume: 2282,
				Fees: 5,
				'Cumulative Swaps': 37457,
				'Cumulative Volume': 1706251,
				'Cumulative Fees': 1884
			},
			{
				DATE: '2021-06-24',
				Swaps: 177,
				Volume: 3618,
				Fees: 7,
				'Cumulative Swaps': 37634,
				'Cumulative Volume': 1709869,
				'Cumulative Fees': 1891
			},
			{
				DATE: '2021-06-25',
				Swaps: 202,
				Volume: 7367,
				Fees: 8,
				'Cumulative Swaps': 37836,
				'Cumulative Volume': 1717236,
				'Cumulative Fees': 1899
			},
			{
				DATE: '2021-06-26',
				Swaps: 153,
				Volume: 1654,
				Fees: 5,
				'Cumulative Swaps': 37989,
				'Cumulative Volume': 1718890,
				'Cumulative Fees': 1904
			},
			{
				DATE: '2021-06-27',
				Swaps: 147,
				Volume: 3508,
				Fees: 5,
				'Cumulative Swaps': 38136,
				'Cumulative Volume': 1722398,
				'Cumulative Fees': 1909
			},
			{
				DATE: '2021-06-28',
				Swaps: 185,
				Volume: 1992,
				Fees: 7,
				'Cumulative Swaps': 38321,
				'Cumulative Volume': 1724390,
				'Cumulative Fees': 1916
			},
			{
				DATE: '2021-06-29',
				Swaps: 261,
				Volume: 7279,
				Fees: 9,
				'Cumulative Swaps': 38582,
				'Cumulative Volume': 1731669,
				'Cumulative Fees': 1925
			},
			{
				DATE: '2021-06-30',
				Swaps: 223,
				Volume: 24585,
				Fees: 8,
				'Cumulative Swaps': 38805,
				'Cumulative Volume': 1756254,
				'Cumulative Fees': 1933
			},
			{
				DATE: '2021-07-01',
				Swaps: 110,
				Volume: 1157,
				Fees: 4,
				'Cumulative Swaps': 38915,
				'Cumulative Volume': 1757411,
				'Cumulative Fees': 1937
			},
			{
				DATE: '2021-07-02',
				Swaps: 158,
				Volume: 5126,
				Fees: 6,
				'Cumulative Swaps': 39073,
				'Cumulative Volume': 1762537,
				'Cumulative Fees': 1943
			},
			{
				DATE: '2021-07-03',
				Swaps: 551,
				Volume: 8661,
				Fees: 20,
				'Cumulative Swaps': 39624,
				'Cumulative Volume': 1771198,
				'Cumulative Fees': 1963
			},
			{
				DATE: '2021-07-04',
				Swaps: 358,
				Volume: 4827,
				Fees: 13,
				'Cumulative Swaps': 39982,
				'Cumulative Volume': 1776025,
				'Cumulative Fees': 1976
			},
			{
				DATE: '2021-07-05',
				Swaps: 252,
				Volume: 1529,
				Fees: 10,
				'Cumulative Swaps': 40234,
				'Cumulative Volume': 1777554,
				'Cumulative Fees': 1986
			},
			{
				DATE: '2021-07-06',
				Swaps: 238,
				Volume: 2352,
				Fees: 8,
				'Cumulative Swaps': 40472,
				'Cumulative Volume': 1779906,
				'Cumulative Fees': 1994
			},
			{
				DATE: '2021-07-07',
				Swaps: 261,
				Volume: 7112,
				Fees: 9,
				'Cumulative Swaps': 40733,
				'Cumulative Volume': 1787018,
				'Cumulative Fees': 2003
			},
			{
				DATE: '2021-07-08',
				Swaps: 278,
				Volume: 3406,
				Fees: 10,
				'Cumulative Swaps': 41011,
				'Cumulative Volume': 1790424,
				'Cumulative Fees': 2013
			},
			{
				DATE: '2021-07-09',
				Swaps: 243,
				Volume: 2910,
				Fees: 9,
				'Cumulative Swaps': 41254,
				'Cumulative Volume': 1793334,
				'Cumulative Fees': 2022
			},
			{
				DATE: '2021-07-10',
				Swaps: 195,
				Volume: 2040,
				Fees: 7,
				'Cumulative Swaps': 41449,
				'Cumulative Volume': 1795374,
				'Cumulative Fees': 2029
			},
			{
				DATE: '2021-07-11',
				Swaps: 211,
				Volume: 1836,
				Fees: 9,
				'Cumulative Swaps': 41660,
				'Cumulative Volume': 1797210,
				'Cumulative Fees': 2038
			},
			{
				DATE: '2021-07-12',
				Swaps: 256,
				Volume: 7482,
				Fees: 10,
				'Cumulative Swaps': 41916,
				'Cumulative Volume': 1804692,
				'Cumulative Fees': 2048
			},
			{
				DATE: '2021-07-13',
				Swaps: 215,
				Volume: 2425,
				Fees: 9,
				'Cumulative Swaps': 42131,
				'Cumulative Volume': 1807117,
				'Cumulative Fees': 2057
			},
			{
				DATE: '2021-07-14',
				Swaps: 221,
				Volume: 4567,
				Fees: 11,
				'Cumulative Swaps': 42352,
				'Cumulative Volume': 1811684,
				'Cumulative Fees': 2068
			},
			{
				DATE: '2021-07-15',
				Swaps: 161,
				Volume: 988,
				Fees: 7,
				'Cumulative Swaps': 42513,
				'Cumulative Volume': 1812672,
				'Cumulative Fees': 2075
			},
			{
				DATE: '2021-07-16',
				Swaps: 173,
				Volume: 2760,
				Fees: 8,
				'Cumulative Swaps': 42686,
				'Cumulative Volume': 1815432,
				'Cumulative Fees': 2083
			},
			{
				DATE: '2021-07-17',
				Swaps: 144,
				Volume: 2349,
				Fees: 6,
				'Cumulative Swaps': 42830,
				'Cumulative Volume': 1817781,
				'Cumulative Fees': 2089
			},
			{
				DATE: '2021-07-18',
				Swaps: 177,
				Volume: 2800,
				Fees: 7,
				'Cumulative Swaps': 43007,
				'Cumulative Volume': 1820581,
				'Cumulative Fees': 2096
			},
			{
				DATE: '2021-07-19',
				Swaps: 181,
				Volume: 2036,
				Fees: 10,
				'Cumulative Swaps': 43188,
				'Cumulative Volume': 1822617,
				'Cumulative Fees': 2106
			},
			{
				DATE: '2021-07-20',
				Swaps: 199,
				Volume: 20435,
				Fees: 9,
				'Cumulative Swaps': 43387,
				'Cumulative Volume': 1843052,
				'Cumulative Fees': 2115
			},
			{
				DATE: '2021-07-21',
				Swaps: 160,
				Volume: 9370,
				Fees: 6,
				'Cumulative Swaps': 43547,
				'Cumulative Volume': 1852422,
				'Cumulative Fees': 2121
			},
			{
				DATE: '2021-07-22',
				Swaps: 139,
				Volume: 1698,
				Fees: 6,
				'Cumulative Swaps': 43686,
				'Cumulative Volume': 1854120,
				'Cumulative Fees': 2127
			},
			{
				DATE: '2021-07-23',
				Swaps: 187,
				Volume: 5225,
				Fees: 8,
				'Cumulative Swaps': 43873,
				'Cumulative Volume': 1859345,
				'Cumulative Fees': 2135
			},
			{
				DATE: '2021-07-24',
				Swaps: 205,
				Volume: 661,
				Fees: 11,
				'Cumulative Swaps': 44078,
				'Cumulative Volume': 1860006,
				'Cumulative Fees': 2146
			},
			{
				DATE: '2021-07-25',
				Swaps: 143,
				Volume: 1306,
				Fees: 6,
				'Cumulative Swaps': 44221,
				'Cumulative Volume': 1861312,
				'Cumulative Fees': 2152
			},
			{
				DATE: '2021-07-26',
				Swaps: 234,
				Volume: 7464,
				Fees: 9,
				'Cumulative Swaps': 44455,
				'Cumulative Volume': 1868776,
				'Cumulative Fees': 2161
			},
			{
				DATE: '2021-07-27',
				Swaps: 165,
				Volume: 2784,
				Fees: 6,
				'Cumulative Swaps': 44620,
				'Cumulative Volume': 1871560,
				'Cumulative Fees': 2167
			},
			{
				DATE: '2021-07-28',
				Swaps: 200,
				Volume: 5990,
				Fees: 7,
				'Cumulative Swaps': 44820,
				'Cumulative Volume': 1877550,
				'Cumulative Fees': 2174
			},
			{
				DATE: '2021-07-29',
				Swaps: 324,
				Volume: 5265,
				Fees: 12,
				'Cumulative Swaps': 45144,
				'Cumulative Volume': 1882815,
				'Cumulative Fees': 2186
			},
			{
				DATE: '2021-07-30',
				Swaps: 218,
				Volume: 1680,
				Fees: 8,
				'Cumulative Swaps': 45362,
				'Cumulative Volume': 1884495,
				'Cumulative Fees': 2194
			},
			{
				DATE: '2021-07-31',
				Swaps: 176,
				Volume: 11627,
				Fees: 7,
				'Cumulative Swaps': 45538,
				'Cumulative Volume': 1896122,
				'Cumulative Fees': 2201
			},
			{
				DATE: '2021-08-01',
				Swaps: 198,
				Volume: 2894,
				Fees: 7,
				'Cumulative Swaps': 45736,
				'Cumulative Volume': 1899016,
				'Cumulative Fees': 2208
			},
			{
				DATE: '2021-08-02',
				Swaps: 178,
				Volume: 1388,
				Fees: 7,
				'Cumulative Swaps': 45914,
				'Cumulative Volume': 1900404,
				'Cumulative Fees': 2215
			},
			{
				DATE: '2021-08-03',
				Swaps: 177,
				Volume: 2494,
				Fees: 7,
				'Cumulative Swaps': 46091,
				'Cumulative Volume': 1902898,
				'Cumulative Fees': 2222
			},
			{
				DATE: '2021-08-04',
				Swaps: 185,
				Volume: 2654,
				Fees: 9,
				'Cumulative Swaps': 46276,
				'Cumulative Volume': 1905552,
				'Cumulative Fees': 2231
			},
			{
				DATE: '2021-08-05',
				Swaps: 168,
				Volume: 2201,
				Fees: 8,
				'Cumulative Swaps': 46444,
				'Cumulative Volume': 1907753,
				'Cumulative Fees': 2239
			},
			{
				DATE: '2021-08-06',
				Swaps: 158,
				Volume: 4822,
				Fees: 6,
				'Cumulative Swaps': 46602,
				'Cumulative Volume': 1912575,
				'Cumulative Fees': 2245
			},
			{
				DATE: '2021-08-07',
				Swaps: 159,
				Volume: 806,
				Fees: 7,
				'Cumulative Swaps': 46761,
				'Cumulative Volume': 1913381,
				'Cumulative Fees': 2252
			},
			{
				DATE: '2021-08-08',
				Swaps: 133,
				Volume: 4011,
				Fees: 6,
				'Cumulative Swaps': 46894,
				'Cumulative Volume': 1917392,
				'Cumulative Fees': 2258
			},
			{
				DATE: '2021-08-09',
				Swaps: 183,
				Volume: 3687,
				Fees: 8,
				'Cumulative Swaps': 47077,
				'Cumulative Volume': 1921079,
				'Cumulative Fees': 2266
			},
			{
				DATE: '2021-08-10',
				Swaps: 474,
				Volume: 7080,
				Fees: 19,
				'Cumulative Swaps': 47551,
				'Cumulative Volume': 1928159,
				'Cumulative Fees': 2285
			},
			{
				DATE: '2021-08-11',
				Swaps: 275,
				Volume: 3823,
				Fees: 12,
				'Cumulative Swaps': 47826,
				'Cumulative Volume': 1931982,
				'Cumulative Fees': 2297
			},
			{
				DATE: '2021-08-12',
				Swaps: 206,
				Volume: 3299,
				Fees: 9,
				'Cumulative Swaps': 48032,
				'Cumulative Volume': 1935281,
				'Cumulative Fees': 2306
			},
			{
				DATE: '2021-08-13',
				Swaps: 198,
				Volume: 1835,
				Fees: 9,
				'Cumulative Swaps': 48230,
				'Cumulative Volume': 1937116,
				'Cumulative Fees': 2315
			},
			{
				DATE: '2021-08-14',
				Swaps: 193,
				Volume: 2866,
				Fees: 9,
				'Cumulative Swaps': 48423,
				'Cumulative Volume': 1939982,
				'Cumulative Fees': 2324
			},
			{
				DATE: '2021-08-15',
				Swaps: 167,
				Volume: 2348,
				Fees: 8,
				'Cumulative Swaps': 48590,
				'Cumulative Volume': 1942330,
				'Cumulative Fees': 2332
			},
			{
				DATE: '2021-08-16',
				Swaps: 383,
				Volume: 4543,
				Fees: 16,
				'Cumulative Swaps': 48973,
				'Cumulative Volume': 1946873,
				'Cumulative Fees': 2348
			},
			{
				DATE: '2021-08-17',
				Swaps: 412,
				Volume: 5066,
				Fees: 18,
				'Cumulative Swaps': 49385,
				'Cumulative Volume': 1951939,
				'Cumulative Fees': 2366
			},
			{
				DATE: '2021-08-18',
				Swaps: 348,
				Volume: 5140,
				Fees: 15,
				'Cumulative Swaps': 49733,
				'Cumulative Volume': 1957079,
				'Cumulative Fees': 2381
			},
			{
				DATE: '2021-08-19',
				Swaps: 933,
				Volume: 16161,
				Fees: 38,
				'Cumulative Swaps': 50666,
				'Cumulative Volume': 1973240,
				'Cumulative Fees': 2419
			},
			{
				DATE: '2021-08-20',
				Swaps: 897,
				Volume: 14185,
				Fees: 36,
				'Cumulative Swaps': 51563,
				'Cumulative Volume': 1987425,
				'Cumulative Fees': 2455
			},
			{
				DATE: '2021-08-21',
				Swaps: 1449,
				Volume: 37715,
				Fees: 57,
				'Cumulative Swaps': 53012,
				'Cumulative Volume': 2025140,
				'Cumulative Fees': 2512
			},
			{
				DATE: '2021-08-22',
				Swaps: 896,
				Volume: 26401,
				Fees: 37,
				'Cumulative Swaps': 53908,
				'Cumulative Volume': 2051541,
				'Cumulative Fees': 2549
			},
			{
				DATE: '2021-08-23',
				Swaps: 1218,
				Volume: 28758,
				Fees: 53,
				'Cumulative Swaps': 55126,
				'Cumulative Volume': 2080299,
				'Cumulative Fees': 2602
			},
			{
				DATE: '2021-08-24',
				Swaps: 1681,
				Volume: 30494,
				Fees: 56,
				'Cumulative Swaps': 56807,
				'Cumulative Volume': 2110793,
				'Cumulative Fees': 2658
			},
			{
				DATE: '2021-08-25',
				Swaps: 1783,
				Volume: 52385,
				Fees: 41,
				'Cumulative Swaps': 58590,
				'Cumulative Volume': 2163178,
				'Cumulative Fees': 2699
			},
			{
				DATE: '2021-08-26',
				Swaps: 1559,
				Volume: 22593,
				Fees: 35,
				'Cumulative Swaps': 60149,
				'Cumulative Volume': 2185771,
				'Cumulative Fees': 2734
			},
			{
				DATE: '2021-08-27',
				Swaps: 1846,
				Volume: 33780,
				Fees: 53,
				'Cumulative Swaps': 61995,
				'Cumulative Volume': 2219551,
				'Cumulative Fees': 2787
			},
			{
				DATE: '2021-08-28',
				Swaps: 1414,
				Volume: 17074,
				Fees: 41,
				'Cumulative Swaps': 63409,
				'Cumulative Volume': 2236625,
				'Cumulative Fees': 2828
			},
			{
				DATE: '2021-08-29',
				Swaps: 1663,
				Volume: 16516,
				Fees: 38,
				'Cumulative Swaps': 65072,
				'Cumulative Volume': 2253141,
				'Cumulative Fees': 2866
			},
			{
				DATE: '2021-08-30',
				Swaps: 1433,
				Volume: 27385,
				Fees: 33,
				'Cumulative Swaps': 66505,
				'Cumulative Volume': 2280526,
				'Cumulative Fees': 2899
			},
			{
				DATE: '2021-08-31',
				Swaps: 994,
				Volume: 16797,
				Fees: 21,
				'Cumulative Swaps': 67499,
				'Cumulative Volume': 2297323,
				'Cumulative Fees': 2920
			},
			{
				DATE: '2021-09-01',
				Swaps: 852,
				Volume: 11365,
				Fees: 17,
				'Cumulative Swaps': 68351,
				'Cumulative Volume': 2308688,
				'Cumulative Fees': 2937
			},
			{
				DATE: '2021-09-02',
				Swaps: 1241,
				Volume: 12546,
				Fees: 25,
				'Cumulative Swaps': 69592,
				'Cumulative Volume': 2321234,
				'Cumulative Fees': 2962
			},
			{
				DATE: '2021-09-03',
				Swaps: 1090,
				Volume: 14279,
				Fees: 23,
				'Cumulative Swaps': 70682,
				'Cumulative Volume': 2335513,
				'Cumulative Fees': 2985
			},
			{
				DATE: '2021-09-04',
				Swaps: 763,
				Volume: 12647,
				Fees: 15,
				'Cumulative Swaps': 71445,
				'Cumulative Volume': 2348160,
				'Cumulative Fees': 3000
			},
			{
				DATE: '2021-09-05',
				Swaps: 766,
				Volume: 10391,
				Fees: 13,
				'Cumulative Swaps': 72211,
				'Cumulative Volume': 2358551,
				'Cumulative Fees': 3013
			},
			{
				DATE: '2021-09-06',
				Swaps: 1397,
				Volume: 24203,
				Fees: 25,
				'Cumulative Swaps': 73608,
				'Cumulative Volume': 2382754,
				'Cumulative Fees': 3038
			},
			{
				DATE: '2021-09-07',
				Swaps: 1233,
				Volume: 31346,
				Fees: 30,
				'Cumulative Swaps': 74841,
				'Cumulative Volume': 2414100,
				'Cumulative Fees': 3068
			},
			{
				DATE: '2021-09-08',
				Swaps: 828,
				Volume: 17684,
				Fees: 17,
				'Cumulative Swaps': 75669,
				'Cumulative Volume': 2431784,
				'Cumulative Fees': 3085
			},
			{
				DATE: '2021-09-09',
				Swaps: 914,
				Volume: 7185,
				Fees: 18,
				'Cumulative Swaps': 76583,
				'Cumulative Volume': 2438969,
				'Cumulative Fees': 3103
			},
			{
				DATE: '2021-09-10',
				Swaps: 1216,
				Volume: 13322,
				Fees: 28,
				'Cumulative Swaps': 77799,
				'Cumulative Volume': 2452291,
				'Cumulative Fees': 3131
			},
			{
				DATE: '2021-09-11',
				Swaps: 1900,
				Volume: 18098,
				Fees: 49,
				'Cumulative Swaps': 79699,
				'Cumulative Volume': 2470389,
				'Cumulative Fees': 3180
			},
			{
				DATE: '2021-09-12',
				Swaps: 1552,
				Volume: 19055,
				Fees: 38,
				'Cumulative Swaps': 81251,
				'Cumulative Volume': 2489444,
				'Cumulative Fees': 3218
			},
			{
				DATE: '2021-09-13',
				Swaps: 1148,
				Volume: 11527,
				Fees: 26,
				'Cumulative Swaps': 82399,
				'Cumulative Volume': 2500971,
				'Cumulative Fees': 3244
			},
			{
				DATE: '2021-09-14',
				Swaps: 1284,
				Volume: 12749,
				Fees: 27,
				'Cumulative Swaps': 83683,
				'Cumulative Volume': 2513720,
				'Cumulative Fees': 3271
			},
			{
				DATE: '2021-09-15',
				Swaps: 1557,
				Volume: 13055,
				Fees: 35,
				'Cumulative Swaps': 85240,
				'Cumulative Volume': 2526775,
				'Cumulative Fees': 3306
			},
			{
				DATE: '2021-09-16',
				Swaps: 1593,
				Volume: 18681,
				Fees: 39,
				'Cumulative Swaps': 86833,
				'Cumulative Volume': 2545456,
				'Cumulative Fees': 3345
			},
			{
				DATE: '2021-09-17',
				Swaps: 1159,
				Volume: 9606,
				Fees: 22,
				'Cumulative Swaps': 87992,
				'Cumulative Volume': 2555062,
				'Cumulative Fees': 3367
			},
			{
				DATE: '2021-09-18',
				Swaps: 1390,
				Volume: 33426,
				Fees: 27,
				'Cumulative Swaps': 89382,
				'Cumulative Volume': 2588488,
				'Cumulative Fees': 3394
			},
			{
				DATE: '2021-09-19',
				Swaps: 1363,
				Volume: 11369,
				Fees: 23,
				'Cumulative Swaps': 90745,
				'Cumulative Volume': 2599857,
				'Cumulative Fees': 3417
			},
			{
				DATE: '2021-09-20',
				Swaps: 1419,
				Volume: 27067,
				Fees: 34,
				'Cumulative Swaps': 92164,
				'Cumulative Volume': 2626924,
				'Cumulative Fees': 3451
			},
			{
				DATE: '2021-09-21',
				Swaps: 1385,
				Volume: 28680,
				Fees: 29,
				'Cumulative Swaps': 93549,
				'Cumulative Volume': 2655604,
				'Cumulative Fees': 3480
			},
			{
				DATE: '2021-09-22',
				Swaps: 1334,
				Volume: 40679,
				Fees: 22,
				'Cumulative Swaps': 94883,
				'Cumulative Volume': 2696283,
				'Cumulative Fees': 3502
			},
			{
				DATE: '2021-09-23',
				Swaps: 1856,
				Volume: 32953,
				Fees: 13,
				'Cumulative Swaps': 96739,
				'Cumulative Volume': 2729236,
				'Cumulative Fees': 3515
			},
			{
				DATE: '2021-09-24',
				Swaps: 1659,
				Volume: 22090,
				Fees: 13,
				'Cumulative Swaps': 98398,
				'Cumulative Volume': 2751326,
				'Cumulative Fees': 3528
			},
			{
				DATE: '2021-09-25',
				Swaps: 1230,
				Volume: 20890,
				Fees: 7,
				'Cumulative Swaps': 99628,
				'Cumulative Volume': 2772216,
				'Cumulative Fees': 3535
			},
			{
				DATE: '2021-09-26',
				Swaps: 1283,
				Volume: 22334,
				Fees: 9,
				'Cumulative Swaps': 100911,
				'Cumulative Volume': 2794550,
				'Cumulative Fees': 3544
			},
			{
				DATE: '2021-09-27',
				Swaps: 1545,
				Volume: 9842,
				Fees: 8,
				'Cumulative Swaps': 102456,
				'Cumulative Volume': 2804392,
				'Cumulative Fees': 3552
			},
			{
				DATE: '2021-09-28',
				Swaps: 1473,
				Volume: 33294,
				Fees: 8,
				'Cumulative Swaps': 103929,
				'Cumulative Volume': 2837686,
				'Cumulative Fees': 3560
			},
			{
				DATE: '2021-09-29',
				Swaps: 1384,
				Volume: 19173,
				Fees: 9,
				'Cumulative Swaps': 105313,
				'Cumulative Volume': 2856859,
				'Cumulative Fees': 3569
			},
			{
				DATE: '2021-09-30',
				Swaps: 1332,
				Volume: 12491,
				Fees: 7,
				'Cumulative Swaps': 106645,
				'Cumulative Volume': 2869350,
				'Cumulative Fees': 3576
			},
			{
				DATE: '2021-10-01',
				Swaps: 1657,
				Volume: 35395,
				Fees: 9,
				'Cumulative Swaps': 108302,
				'Cumulative Volume': 2904745,
				'Cumulative Fees': 3585
			},
			{
				DATE: '2021-10-02',
				Swaps: 1134,
				Volume: 5271,
				Fees: 6,
				'Cumulative Swaps': 109436,
				'Cumulative Volume': 2910016,
				'Cumulative Fees': 3591
			},
			{
				DATE: '2021-10-03',
				Swaps: 1245,
				Volume: 7319,
				Fees: 7,
				'Cumulative Swaps': 110681,
				'Cumulative Volume': 2917335,
				'Cumulative Fees': 3598
			},
			{
				DATE: '2021-10-04',
				Swaps: 1764,
				Volume: 13822,
				Fees: 12,
				'Cumulative Swaps': 112445,
				'Cumulative Volume': 2931157,
				'Cumulative Fees': 3610
			},
			{
				DATE: '2021-10-05',
				Swaps: 1712,
				Volume: 59431,
				Fees: 17,
				'Cumulative Swaps': 114157,
				'Cumulative Volume': 2990588,
				'Cumulative Fees': 3627
			},
			{
				DATE: '2021-10-06',
				Swaps: 1726,
				Volume: 29842,
				Fees: 9,
				'Cumulative Swaps': 115883,
				'Cumulative Volume': 3020430,
				'Cumulative Fees': 3636
			},
			{
				DATE: '2021-10-07',
				Swaps: 1540,
				Volume: 18915,
				Fees: 8,
				'Cumulative Swaps': 117423,
				'Cumulative Volume': 3039345,
				'Cumulative Fees': 3644
			},
			{
				DATE: '2021-10-08',
				Swaps: 1510,
				Volume: 19523,
				Fees: 8,
				'Cumulative Swaps': 118933,
				'Cumulative Volume': 3058868,
				'Cumulative Fees': 3652
			},
			{
				DATE: '2021-10-09',
				Swaps: 1423,
				Volume: 23755,
				Fees: 8,
				'Cumulative Swaps': 120356,
				'Cumulative Volume': 3082623,
				'Cumulative Fees': 3660
			},
			{
				DATE: '2021-10-10',
				Swaps: 1703,
				Volume: 10516,
				Fees: 8,
				'Cumulative Swaps': 122059,
				'Cumulative Volume': 3093139,
				'Cumulative Fees': 3668
			},
			{
				DATE: '2021-10-11',
				Swaps: 1999,
				Volume: 49438,
				Fees: 10,
				'Cumulative Swaps': 124058,
				'Cumulative Volume': 3142577,
				'Cumulative Fees': 3678
			},
			{
				DATE: '2021-10-12',
				Swaps: 1804,
				Volume: 34729,
				Fees: 10,
				'Cumulative Swaps': 125862,
				'Cumulative Volume': 3177306,
				'Cumulative Fees': 3688
			},
			{
				DATE: '2021-10-13',
				Swaps: 1651,
				Volume: 11563,
				Fees: 9,
				'Cumulative Swaps': 127513,
				'Cumulative Volume': 3188869,
				'Cumulative Fees': 3697
			},
			{
				DATE: '2021-10-14',
				Swaps: 1315,
				Volume: 7730,
				Fees: 8,
				'Cumulative Swaps': 128828,
				'Cumulative Volume': 3196599,
				'Cumulative Fees': 3705
			},
			{
				DATE: '2021-10-15',
				Swaps: 1531,
				Volume: 13566,
				Fees: 8,
				'Cumulative Swaps': 130359,
				'Cumulative Volume': 3210165,
				'Cumulative Fees': 3713
			},
			{
				DATE: '2021-10-16',
				Swaps: 1332,
				Volume: 7216,
				Fees: 7,
				'Cumulative Swaps': 131691,
				'Cumulative Volume': 3217381,
				'Cumulative Fees': 3720
			},
			{
				DATE: '2021-10-17',
				Swaps: 1202,
				Volume: 4376,
				Fees: 7,
				'Cumulative Swaps': 132893,
				'Cumulative Volume': 3221757,
				'Cumulative Fees': 3727
			},
			{
				DATE: '2021-10-18',
				Swaps: 1218,
				Volume: 6482,
				Fees: 7,
				'Cumulative Swaps': 134111,
				'Cumulative Volume': 3228239,
				'Cumulative Fees': 3734
			},
			{
				DATE: '2021-10-19',
				Swaps: 1231,
				Volume: 14643,
				Fees: 7,
				'Cumulative Swaps': 135342,
				'Cumulative Volume': 3242882,
				'Cumulative Fees': 3741
			},
			{
				DATE: '2021-10-20',
				Swaps: 1661,
				Volume: 22556,
				Fees: 10,
				'Cumulative Swaps': 137003,
				'Cumulative Volume': 3265438,
				'Cumulative Fees': 3751
			},
			{
				DATE: '2021-10-21',
				Swaps: 1934,
				Volume: 29347,
				Fees: 11,
				'Cumulative Swaps': 138937,
				'Cumulative Volume': 3294785,
				'Cumulative Fees': 3762
			},
			{
				DATE: '2021-10-22',
				Swaps: 2375,
				Volume: 57537,
				Fees: 15,
				'Cumulative Swaps': 141312,
				'Cumulative Volume': 3352322,
				'Cumulative Fees': 3777
			},
			{
				DATE: '2021-10-23',
				Swaps: 1710,
				Volume: 30371,
				Fees: 8,
				'Cumulative Swaps': 143022,
				'Cumulative Volume': 3382693,
				'Cumulative Fees': 3785
			},
			{
				DATE: '2021-10-24',
				Swaps: 1417,
				Volume: 13823,
				Fees: 7,
				'Cumulative Swaps': 144439,
				'Cumulative Volume': 3396516,
				'Cumulative Fees': 3792
			},
			{
				DATE: '2021-10-25',
				Swaps: 1692,
				Volume: 26909,
				Fees: 10,
				'Cumulative Swaps': 146131,
				'Cumulative Volume': 3423425,
				'Cumulative Fees': 3802
			},
			{
				DATE: '2021-10-26',
				Swaps: 2107,
				Volume: 27003,
				Fees: 13,
				'Cumulative Swaps': 148238,
				'Cumulative Volume': 3450428,
				'Cumulative Fees': 3815
			},
			{
				DATE: '2021-10-27',
				Swaps: 1609,
				Volume: 21497,
				Fees: 10,
				'Cumulative Swaps': 149847,
				'Cumulative Volume': 3471925,
				'Cumulative Fees': 3825
			},
			{
				DATE: '2021-10-28',
				Swaps: 1781,
				Volume: 20729,
				Fees: 12,
				'Cumulative Swaps': 151628,
				'Cumulative Volume': 3492654,
				'Cumulative Fees': 3837
			},
			{
				DATE: '2021-10-29',
				Swaps: 1456,
				Volume: 34387,
				Fees: 10,
				'Cumulative Swaps': 153084,
				'Cumulative Volume': 3527041,
				'Cumulative Fees': 3847
			},
			{
				DATE: '2021-10-30',
				Swaps: 1378,
				Volume: 19755,
				Fees: 9,
				'Cumulative Swaps': 154462,
				'Cumulative Volume': 3546796,
				'Cumulative Fees': 3856
			},
			{
				DATE: '2021-10-31',
				Swaps: 1754,
				Volume: 33537,
				Fees: 9,
				'Cumulative Swaps': 156216,
				'Cumulative Volume': 3580333,
				'Cumulative Fees': 3865
			},
			{
				DATE: '2021-11-01',
				Swaps: 1489,
				Volume: 23359,
				Fees: 9,
				'Cumulative Swaps': 157705,
				'Cumulative Volume': 3603692,
				'Cumulative Fees': 3874
			},
			{
				DATE: '2021-11-02',
				Swaps: 1979,
				Volume: 16402,
				Fees: 11,
				'Cumulative Swaps': 159684,
				'Cumulative Volume': 3620094,
				'Cumulative Fees': 3885
			},
			{
				DATE: '2021-11-03',
				Swaps: 1843,
				Volume: 23674,
				Fees: 10,
				'Cumulative Swaps': 161527,
				'Cumulative Volume': 3643768,
				'Cumulative Fees': 3895
			},
			{
				DATE: '2021-11-04',
				Swaps: 1860,
				Volume: 25208,
				Fees: 12,
				'Cumulative Swaps': 163387,
				'Cumulative Volume': 3668976,
				'Cumulative Fees': 3907
			},
			{
				DATE: '2021-11-05',
				Swaps: 2162,
				Volume: 13796,
				Fees: 12,
				'Cumulative Swaps': 165549,
				'Cumulative Volume': 3682772,
				'Cumulative Fees': 3919
			},
			{
				DATE: '2021-11-06',
				Swaps: 1834,
				Volume: 11486,
				Fees: 10,
				'Cumulative Swaps': 167383,
				'Cumulative Volume': 3694258,
				'Cumulative Fees': 3929
			},
			{
				DATE: '2021-11-07',
				Swaps: 2328,
				Volume: 37032,
				Fees: 13,
				'Cumulative Swaps': 169711,
				'Cumulative Volume': 3731290,
				'Cumulative Fees': 3942
			},
			{
				DATE: '2021-11-08',
				Swaps: 3315,
				Volume: 42128,
				Fees: 26,
				'Cumulative Swaps': 173026,
				'Cumulative Volume': 3773418,
				'Cumulative Fees': 3968
			},
			{
				DATE: '2021-11-09',
				Swaps: 2456,
				Volume: 16535,
				Fees: 14,
				'Cumulative Swaps': 175482,
				'Cumulative Volume': 3789953,
				'Cumulative Fees': 3982
			},
			{
				DATE: '2021-11-10',
				Swaps: 2370,
				Volume: 29937,
				Fees: 17,
				'Cumulative Swaps': 177852,
				'Cumulative Volume': 3819890,
				'Cumulative Fees': 3999
			},
			{
				DATE: '2021-11-11',
				Swaps: 1925,
				Volume: 19282,
				Fees: 11,
				'Cumulative Swaps': 179777,
				'Cumulative Volume': 3839172,
				'Cumulative Fees': 4010
			},
			{
				DATE: '2021-11-12',
				Swaps: 2055,
				Volume: 16685,
				Fees: 12,
				'Cumulative Swaps': 181832,
				'Cumulative Volume': 3855857,
				'Cumulative Fees': 4022
			},
			{
				DATE: '2021-11-13',
				Swaps: 2589,
				Volume: 21244,
				Fees: 38,
				'Cumulative Swaps': 184421,
				'Cumulative Volume': 3877101,
				'Cumulative Fees': 4060
			},
			{
				DATE: '2021-11-14',
				Swaps: 2531,
				Volume: 27339,
				Fees: 14,
				'Cumulative Swaps': 186952,
				'Cumulative Volume': 3904440,
				'Cumulative Fees': 4074
			},
			{
				DATE: '2021-11-15',
				Swaps: 2722,
				Volume: 40917,
				Fees: 17,
				'Cumulative Swaps': 189674,
				'Cumulative Volume': 3945357,
				'Cumulative Fees': 4091
			},
			{
				DATE: '2021-11-16',
				Swaps: 2590,
				Volume: 33870,
				Fees: 19,
				'Cumulative Swaps': 192264,
				'Cumulative Volume': 3979227,
				'Cumulative Fees': 4110
			},
			{
				DATE: '2021-11-17',
				Swaps: 2796,
				Volume: 35398,
				Fees: 30,
				'Cumulative Swaps': 195060,
				'Cumulative Volume': 4014625,
				'Cumulative Fees': 4140
			},
			{
				DATE: '2021-11-18',
				Swaps: 3391,
				Volume: 38196,
				Fees: 51,
				'Cumulative Swaps': 198451,
				'Cumulative Volume': 4052821,
				'Cumulative Fees': 4191
			},
			{
				DATE: '2021-11-19',
				Swaps: 2402,
				Volume: 23753,
				Fees: 15,
				'Cumulative Swaps': 200853,
				'Cumulative Volume': 4076574,
				'Cumulative Fees': 4206
			},
			{
				DATE: '2021-11-20',
				Swaps: 2663,
				Volume: 64811,
				Fees: 24,
				'Cumulative Swaps': 203516,
				'Cumulative Volume': 4141385,
				'Cumulative Fees': 4230
			},
			{
				DATE: '2021-11-21',
				Swaps: 2972,
				Volume: 35333,
				Fees: 41,
				'Cumulative Swaps': 206488,
				'Cumulative Volume': 4176718,
				'Cumulative Fees': 4271
			},
			{
				DATE: '2021-11-22',
				Swaps: 2708,
				Volume: 26257,
				Fees: 94,
				'Cumulative Swaps': 209196,
				'Cumulative Volume': 4202975,
				'Cumulative Fees': 4365
			},
			{
				DATE: '2021-11-23',
				Swaps: 2884,
				Volume: 50000,
				Fees: 72,
				'Cumulative Swaps': 212080,
				'Cumulative Volume': 4252975,
				'Cumulative Fees': 4437
			},
			{
				DATE: '2021-11-24',
				Swaps: 2900,
				Volume: 39770,
				Fees: 43,
				'Cumulative Swaps': 214980,
				'Cumulative Volume': 4292745,
				'Cumulative Fees': 4480
			},
			{
				DATE: '2021-11-25',
				Swaps: 2845,
				Volume: 24329,
				Fees: 46,
				'Cumulative Swaps': 217825,
				'Cumulative Volume': 4317074,
				'Cumulative Fees': 4526
			},
			{
				DATE: '2021-11-26',
				Swaps: 3307,
				Volume: 34056,
				Fees: 61,
				'Cumulative Swaps': 221132,
				'Cumulative Volume': 4351130,
				'Cumulative Fees': 4587
			},
			{
				DATE: '2021-11-27',
				Swaps: 2197,
				Volume: 12683,
				Fees: 12,
				'Cumulative Swaps': 223329,
				'Cumulative Volume': 4363813,
				'Cumulative Fees': 4599
			},
			{
				DATE: '2021-11-28',
				Swaps: 2140,
				Volume: 31690,
				Fees: 15,
				'Cumulative Swaps': 225469,
				'Cumulative Volume': 4395503,
				'Cumulative Fees': 4614
			},
			{
				DATE: '2021-11-29',
				Swaps: 2145,
				Volume: 14937,
				Fees: 18,
				'Cumulative Swaps': 227614,
				'Cumulative Volume': 4410440,
				'Cumulative Fees': 4632
			},
			{
				DATE: '2021-11-30',
				Swaps: 2442,
				Volume: 27373,
				Fees: 14,
				'Cumulative Swaps': 230056,
				'Cumulative Volume': 4437813,
				'Cumulative Fees': 4646
			},
			{
				DATE: '2021-12-01',
				Swaps: 2257,
				Volume: 12642,
				Fees: 16,
				'Cumulative Swaps': 232313,
				'Cumulative Volume': 4450455,
				'Cumulative Fees': 4662
			},
			{
				DATE: '2021-12-02',
				Swaps: 2464,
				Volume: 22744,
				Fees: 33,
				'Cumulative Swaps': 234777,
				'Cumulative Volume': 4473199,
				'Cumulative Fees': 4695
			},
			{
				DATE: '2021-12-03',
				Swaps: 2652,
				Volume: 17176,
				Fees: 23,
				'Cumulative Swaps': 237429,
				'Cumulative Volume': 4490375,
				'Cumulative Fees': 4718
			},
			{
				DATE: '2021-12-04',
				Swaps: 3343,
				Volume: 44548,
				Fees: 50,
				'Cumulative Swaps': 240772,
				'Cumulative Volume': 4534923,
				'Cumulative Fees': 4768
			},
			{
				DATE: '2021-12-05',
				Swaps: 2053,
				Volume: 36822,
				Fees: 14,
				'Cumulative Swaps': 242825,
				'Cumulative Volume': 4571745,
				'Cumulative Fees': 4782
			},
			{
				DATE: '2021-12-06',
				Swaps: 2919,
				Volume: 34770,
				Fees: 21,
				'Cumulative Swaps': 245744,
				'Cumulative Volume': 4606515,
				'Cumulative Fees': 4803
			},
			{
				DATE: '2021-12-07',
				Swaps: 2576,
				Volume: 14365,
				Fees: 19,
				'Cumulative Swaps': 248320,
				'Cumulative Volume': 4620880,
				'Cumulative Fees': 4822
			},
			{
				DATE: '2021-12-08',
				Swaps: 2876,
				Volume: 13494,
				Fees: 22,
				'Cumulative Swaps': 251196,
				'Cumulative Volume': 4634374,
				'Cumulative Fees': 4844
			},
			{
				DATE: '2021-12-09',
				Swaps: 2671,
				Volume: 15596,
				Fees: 20,
				'Cumulative Swaps': 253867,
				'Cumulative Volume': 4649970,
				'Cumulative Fees': 4864
			},
			{
				DATE: '2021-12-10',
				Swaps: 2745,
				Volume: 60082,
				Fees: 24,
				'Cumulative Swaps': 256612,
				'Cumulative Volume': 4710052,
				'Cumulative Fees': 4888
			},
			{
				DATE: '2021-12-11',
				Swaps: 2438,
				Volume: 30136,
				Fees: 19,
				'Cumulative Swaps': 259050,
				'Cumulative Volume': 4740188,
				'Cumulative Fees': 4907
			},
			{
				DATE: '2021-12-12',
				Swaps: 2342,
				Volume: 15187,
				Fees: 18,
				'Cumulative Swaps': 261392,
				'Cumulative Volume': 4755375,
				'Cumulative Fees': 4925
			},
			{
				DATE: '2021-12-13',
				Swaps: 2435,
				Volume: 22484,
				Fees: 29,
				'Cumulative Swaps': 263827,
				'Cumulative Volume': 4777859,
				'Cumulative Fees': 4954
			},
			{
				DATE: '2021-12-14',
				Swaps: 3193,
				Volume: 20658,
				Fees: 21,
				'Cumulative Swaps': 267020,
				'Cumulative Volume': 4798517,
				'Cumulative Fees': 4975
			},
			{
				DATE: '2021-12-15',
				Swaps: 3572,
				Volume: 56048,
				Fees: 26,
				'Cumulative Swaps': 270592,
				'Cumulative Volume': 4854565,
				'Cumulative Fees': 5001
			},
			{
				DATE: '2021-12-16',
				Swaps: 3030,
				Volume: 36217,
				Fees: 18,
				'Cumulative Swaps': 273622,
				'Cumulative Volume': 4890782,
				'Cumulative Fees': 5019
			},
			{
				DATE: '2021-12-17',
				Swaps: 2925,
				Volume: 19333,
				Fees: 20,
				'Cumulative Swaps': 276547,
				'Cumulative Volume': 4910115,
				'Cumulative Fees': 5039
			},
			{
				DATE: '2021-12-18',
				Swaps: 2571,
				Volume: 23763,
				Fees: 16,
				'Cumulative Swaps': 279118,
				'Cumulative Volume': 4933878,
				'Cumulative Fees': 5055
			},
			{
				DATE: '2021-12-19',
				Swaps: 2639,
				Volume: 22185,
				Fees: 17,
				'Cumulative Swaps': 281757,
				'Cumulative Volume': 4956063,
				'Cumulative Fees': 5072
			},
			{
				DATE: '2021-12-20',
				Swaps: 2927,
				Volume: 41302,
				Fees: 31,
				'Cumulative Swaps': 284684,
				'Cumulative Volume': 4997365,
				'Cumulative Fees': 5103
			},
			{
				DATE: '2021-12-21',
				Swaps: 3227,
				Volume: 26394,
				Fees: 21,
				'Cumulative Swaps': 287911,
				'Cumulative Volume': 5023759,
				'Cumulative Fees': 5124
			},
			{
				DATE: '2021-12-22',
				Swaps: 3140,
				Volume: 17110,
				Fees: 39,
				'Cumulative Swaps': 291051,
				'Cumulative Volume': 5040869,
				'Cumulative Fees': 5163
			},
			{
				DATE: '2021-12-23',
				Swaps: 2962,
				Volume: 21989,
				Fees: 18,
				'Cumulative Swaps': 294013,
				'Cumulative Volume': 5062858,
				'Cumulative Fees': 5181
			},
			{
				DATE: '2021-12-24',
				Swaps: 2647,
				Volume: 18625,
				Fees: 17,
				'Cumulative Swaps': 296660,
				'Cumulative Volume': 5081483,
				'Cumulative Fees': 5198
			},
			{
				DATE: '2021-12-25',
				Swaps: 2002,
				Volume: 14135,
				Fees: 12,
				'Cumulative Swaps': 298662,
				'Cumulative Volume': 5095618,
				'Cumulative Fees': 5210
			},
			{
				DATE: '2021-12-26',
				Swaps: 2242,
				Volume: 8214,
				Fees: 14,
				'Cumulative Swaps': 300904,
				'Cumulative Volume': 5103832,
				'Cumulative Fees': 5224
			},
			{
				DATE: '2021-12-27',
				Swaps: 2787,
				Volume: 26429,
				Fees: 18,
				'Cumulative Swaps': 303691,
				'Cumulative Volume': 5130261,
				'Cumulative Fees': 5242
			},
			{
				DATE: '2021-12-28',
				Swaps: 3013,
				Volume: 20626,
				Fees: 20,
				'Cumulative Swaps': 306704,
				'Cumulative Volume': 5150887,
				'Cumulative Fees': 5262
			},
			{
				DATE: '2021-12-29',
				Swaps: 2480,
				Volume: 12348,
				Fees: 19,
				'Cumulative Swaps': 309184,
				'Cumulative Volume': 5163235,
				'Cumulative Fees': 5281
			},
			{
				DATE: '2021-12-30',
				Swaps: 2654,
				Volume: 10929,
				Fees: 18,
				'Cumulative Swaps': 311838,
				'Cumulative Volume': 5174164,
				'Cumulative Fees': 5299
			},
			{
				DATE: '2021-12-31',
				Swaps: 2261,
				Volume: 38606,
				Fees: 14,
				'Cumulative Swaps': 314099,
				'Cumulative Volume': 5212770,
				'Cumulative Fees': 5313
			},
			{
				DATE: '2022-01-01',
				Swaps: 1977,
				Volume: 5673,
				Fees: 12,
				'Cumulative Swaps': 316076,
				'Cumulative Volume': 5218443,
				'Cumulative Fees': 5325
			},
			{
				DATE: '2022-01-02',
				Swaps: 2558,
				Volume: 15295,
				Fees: 16,
				'Cumulative Swaps': 318634,
				'Cumulative Volume': 5233738,
				'Cumulative Fees': 5341
			},
			{
				DATE: '2022-01-03',
				Swaps: 2808,
				Volume: 17263,
				Fees: 18,
				'Cumulative Swaps': 321442,
				'Cumulative Volume': 5251001,
				'Cumulative Fees': 5359
			},
			{
				DATE: '2022-01-04',
				Swaps: 2650,
				Volume: 21282,
				Fees: 16,
				'Cumulative Swaps': 324092,
				'Cumulative Volume': 5272283,
				'Cumulative Fees': 5375
			},
			{
				DATE: '2022-01-05',
				Swaps: 3102,
				Volume: 22265,
				Fees: 21,
				'Cumulative Swaps': 327194,
				'Cumulative Volume': 5294548,
				'Cumulative Fees': 5396
			},
			{
				DATE: '2022-01-06',
				Swaps: 2699,
				Volume: 18983,
				Fees: 15,
				'Cumulative Swaps': 329893,
				'Cumulative Volume': 5313531,
				'Cumulative Fees': 5411
			},
			{
				DATE: '2022-01-07',
				Swaps: 2837,
				Volume: 55023,
				Fees: 24,
				'Cumulative Swaps': 332730,
				'Cumulative Volume': 5368554,
				'Cumulative Fees': 5435
			},
			{
				DATE: '2022-01-08',
				Swaps: 2780,
				Volume: 19385,
				Fees: 15,
				'Cumulative Swaps': 335510,
				'Cumulative Volume': 5387939,
				'Cumulative Fees': 5450
			},
			{
				DATE: '2022-01-09',
				Swaps: 2212,
				Volume: 17255,
				Fees: 15,
				'Cumulative Swaps': 337722,
				'Cumulative Volume': 5405194,
				'Cumulative Fees': 5465
			},
			{
				DATE: '2022-01-10',
				Swaps: 2561,
				Volume: 12501,
				Fees: 15,
				'Cumulative Swaps': 340283,
				'Cumulative Volume': 5417695,
				'Cumulative Fees': 5480
			},
			{
				DATE: '2022-01-11',
				Swaps: 2491,
				Volume: 19733,
				Fees: 14,
				'Cumulative Swaps': 342774,
				'Cumulative Volume': 5437428,
				'Cumulative Fees': 5494
			},
			{
				DATE: '2022-01-12',
				Swaps: 2272,
				Volume: 17457,
				Fees: 12,
				'Cumulative Swaps': 345046,
				'Cumulative Volume': 5454885,
				'Cumulative Fees': 5506
			},
			{
				DATE: '2022-01-13',
				Swaps: 2313,
				Volume: 24004,
				Fees: 14,
				'Cumulative Swaps': 347359,
				'Cumulative Volume': 5478889,
				'Cumulative Fees': 5520
			},
			{
				DATE: '2022-01-14',
				Swaps: 2693,
				Volume: 27370,
				Fees: 17,
				'Cumulative Swaps': 350052,
				'Cumulative Volume': 5506259,
				'Cumulative Fees': 5537
			},
			{
				DATE: '2022-01-15',
				Swaps: 3019,
				Volume: 21146,
				Fees: 16,
				'Cumulative Swaps': 353071,
				'Cumulative Volume': 5527405,
				'Cumulative Fees': 5553
			},
			{
				DATE: '2022-01-16',
				Swaps: 3129,
				Volume: 39547,
				Fees: 17,
				'Cumulative Swaps': 356200,
				'Cumulative Volume': 5566952,
				'Cumulative Fees': 5570
			},
			{
				DATE: '2022-01-17',
				Swaps: 3647,
				Volume: 57170,
				Fees: 46,
				'Cumulative Swaps': 359847,
				'Cumulative Volume': 5624122,
				'Cumulative Fees': 5616
			},
			{
				DATE: '2022-01-18',
				Swaps: 2767,
				Volume: 20375,
				Fees: 15,
				'Cumulative Swaps': 362614,
				'Cumulative Volume': 5644497,
				'Cumulative Fees': 5631
			},
			{
				DATE: '2022-01-19',
				Swaps: 3003,
				Volume: 17857,
				Fees: 27,
				'Cumulative Swaps': 365617,
				'Cumulative Volume': 5662354,
				'Cumulative Fees': 5658
			},
			{
				DATE: '2022-01-20',
				Swaps: 2802,
				Volume: 22780,
				Fees: 15,
				'Cumulative Swaps': 368419,
				'Cumulative Volume': 5685134,
				'Cumulative Fees': 5673
			},
			{
				DATE: '2022-01-21',
				Swaps: 3665,
				Volume: 53815,
				Fees: 53,
				'Cumulative Swaps': 372084,
				'Cumulative Volume': 5738949,
				'Cumulative Fees': 5726
			},
			{
				DATE: '2022-01-22',
				Swaps: 3323,
				Volume: 43563,
				Fees: 35,
				'Cumulative Swaps': 375407,
				'Cumulative Volume': 5782512,
				'Cumulative Fees': 5761
			},
			{
				DATE: '2022-01-23',
				Swaps: 2346,
				Volume: 20921,
				Fees: 15,
				'Cumulative Swaps': 377753,
				'Cumulative Volume': 5803433,
				'Cumulative Fees': 5776
			},
			{
				DATE: '2022-01-24',
				Swaps: 3106,
				Volume: 55348,
				Fees: 24,
				'Cumulative Swaps': 380859,
				'Cumulative Volume': 5858781,
				'Cumulative Fees': 5800
			},
			{
				DATE: '2022-01-25',
				Swaps: 2894,
				Volume: 49832,
				Fees: 21,
				'Cumulative Swaps': 383753,
				'Cumulative Volume': 5908613,
				'Cumulative Fees': 5821
			},
			{
				DATE: '2022-01-26',
				Swaps: 3640,
				Volume: 48180,
				Fees: 34,
				'Cumulative Swaps': 387393,
				'Cumulative Volume': 5956793,
				'Cumulative Fees': 5855
			},
			{
				DATE: '2022-01-27',
				Swaps: 3662,
				Volume: 85979,
				Fees: 32,
				'Cumulative Swaps': 391055,
				'Cumulative Volume': 6042772,
				'Cumulative Fees': 5887
			},
			{
				DATE: '2022-01-28',
				Swaps: 3312,
				Volume: 56001,
				Fees: 20,
				'Cumulative Swaps': 394367,
				'Cumulative Volume': 6098773,
				'Cumulative Fees': 5907
			},
			{
				DATE: '2022-01-29',
				Swaps: 3023,
				Volume: 44961,
				Fees: 21,
				'Cumulative Swaps': 397390,
				'Cumulative Volume': 6143734,
				'Cumulative Fees': 5928
			},
			{
				DATE: '2022-01-30',
				Swaps: 3260,
				Volume: 24728,
				Fees: 47,
				'Cumulative Swaps': 400650,
				'Cumulative Volume': 6168462,
				'Cumulative Fees': 5975
			},
			{
				DATE: '2022-01-31',
				Swaps: 2917,
				Volume: 38824,
				Fees: 67,
				'Cumulative Swaps': 403567,
				'Cumulative Volume': 6207286,
				'Cumulative Fees': 6042
			},
			{
				DATE: '2022-02-01',
				Swaps: 3046,
				Volume: 28103,
				Fees: 19,
				'Cumulative Swaps': 406613,
				'Cumulative Volume': 6235389,
				'Cumulative Fees': 6061
			},
			{
				DATE: '2022-02-02',
				Swaps: 2758,
				Volume: 25058,
				Fees: 19,
				'Cumulative Swaps': 409371,
				'Cumulative Volume': 6260447,
				'Cumulative Fees': 6080
			},
			{
				DATE: '2022-02-03',
				Swaps: 2792,
				Volume: 20610,
				Fees: 18,
				'Cumulative Swaps': 412163,
				'Cumulative Volume': 6281057,
				'Cumulative Fees': 6098
			},
			{
				DATE: '2022-02-04',
				Swaps: 2921,
				Volume: 26217,
				Fees: 24,
				'Cumulative Swaps': 415084,
				'Cumulative Volume': 6307274,
				'Cumulative Fees': 6122
			},
			{
				DATE: '2022-02-05',
				Swaps: 2661,
				Volume: 16827,
				Fees: 19,
				'Cumulative Swaps': 417745,
				'Cumulative Volume': 6324101,
				'Cumulative Fees': 6141
			},
			{
				DATE: '2022-02-06',
				Swaps: 2690,
				Volume: 16838,
				Fees: 20,
				'Cumulative Swaps': 420435,
				'Cumulative Volume': 6340939,
				'Cumulative Fees': 6161
			},
			{
				DATE: '2022-02-07',
				Swaps: 3295,
				Volume: 37513,
				Fees: 41,
				'Cumulative Swaps': 423730,
				'Cumulative Volume': 6378452,
				'Cumulative Fees': 6202
			},
			{
				DATE: '2022-02-08',
				Swaps: 3456,
				Volume: 38978,
				Fees: 26,
				'Cumulative Swaps': 427186,
				'Cumulative Volume': 6417430,
				'Cumulative Fees': 6228
			},
			{
				DATE: '2022-02-09',
				Swaps: 3208,
				Volume: 20120,
				Fees: 33,
				'Cumulative Swaps': 430394,
				'Cumulative Volume': 6437550,
				'Cumulative Fees': 6261
			},
			{
				DATE: '2022-02-10',
				Swaps: 3120,
				Volume: 26892,
				Fees: 52,
				'Cumulative Swaps': 433514,
				'Cumulative Volume': 6464442,
				'Cumulative Fees': 6313
			},
			{
				DATE: '2022-02-11',
				Swaps: 3210,
				Volume: 31326,
				Fees: 35,
				'Cumulative Swaps': 436724,
				'Cumulative Volume': 6495768,
				'Cumulative Fees': 6348
			},
			{
				DATE: '2022-02-12',
				Swaps: 2579,
				Volume: 25273,
				Fees: 19,
				'Cumulative Swaps': 439303,
				'Cumulative Volume': 6521041,
				'Cumulative Fees': 6367
			},
			{
				DATE: '2022-02-13',
				Swaps: 2338,
				Volume: 22634,
				Fees: 18,
				'Cumulative Swaps': 441641,
				'Cumulative Volume': 6543675,
				'Cumulative Fees': 6385
			},
			{
				DATE: '2022-02-14',
				Swaps: 2509,
				Volume: 12583,
				Fees: 24,
				'Cumulative Swaps': 444150,
				'Cumulative Volume': 6556258,
				'Cumulative Fees': 6409
			},
			{
				DATE: '2022-02-15',
				Swaps: 3105,
				Volume: 29825,
				Fees: 28,
				'Cumulative Swaps': 447255,
				'Cumulative Volume': 6586083,
				'Cumulative Fees': 6437
			},
			{
				DATE: '2022-02-16',
				Swaps: 3266,
				Volume: 15998,
				Fees: 29,
				'Cumulative Swaps': 450521,
				'Cumulative Volume': 6602081,
				'Cumulative Fees': 6466
			},
			{
				DATE: '2022-02-17',
				Swaps: 3224,
				Volume: 29191,
				Fees: 29,
				'Cumulative Swaps': 453745,
				'Cumulative Volume': 6631272,
				'Cumulative Fees': 6495
			},
			{
				DATE: '2022-02-18',
				Swaps: 2564,
				Volume: 14328,
				Fees: 23,
				'Cumulative Swaps': 456309,
				'Cumulative Volume': 6645600,
				'Cumulative Fees': 6518
			},
			{
				DATE: '2022-02-19',
				Swaps: 2328,
				Volume: 12231,
				Fees: 43,
				'Cumulative Swaps': 458637,
				'Cumulative Volume': 6657831,
				'Cumulative Fees': 6561
			},
			{
				DATE: '2022-02-20',
				Swaps: 2555,
				Volume: 18513,
				Fees: 27,
				'Cumulative Swaps': 461192,
				'Cumulative Volume': 6676344,
				'Cumulative Fees': 6588
			},
			{
				DATE: '2022-02-21',
				Swaps: 3034,
				Volume: 18399,
				Fees: 35,
				'Cumulative Swaps': 464226,
				'Cumulative Volume': 6694743,
				'Cumulative Fees': 6623
			},
			{
				DATE: '2022-02-22',
				Swaps: 2641,
				Volume: 17931,
				Fees: 42,
				'Cumulative Swaps': 466867,
				'Cumulative Volume': 6712674,
				'Cumulative Fees': 6665
			},
			{
				DATE: '2022-02-23',
				Swaps: 2489,
				Volume: 12273,
				Fees: 22,
				'Cumulative Swaps': 469356,
				'Cumulative Volume': 6724947,
				'Cumulative Fees': 6687
			},
			{
				DATE: '2022-02-24',
				Swaps: 2829,
				Volume: 35495,
				Fees: 47,
				'Cumulative Swaps': 472185,
				'Cumulative Volume': 6760442,
				'Cumulative Fees': 6734
			},
			{
				DATE: '2022-02-25',
				Swaps: 2535,
				Volume: 21127,
				Fees: 29,
				'Cumulative Swaps': 474720,
				'Cumulative Volume': 6781569,
				'Cumulative Fees': 6763
			},
			{
				DATE: '2022-02-26',
				Swaps: 2281,
				Volume: 14537,
				Fees: 24,
				'Cumulative Swaps': 477001,
				'Cumulative Volume': 6796106,
				'Cumulative Fees': 6787
			},
			{
				DATE: '2022-02-27',
				Swaps: 2788,
				Volume: 25509,
				Fees: 37,
				'Cumulative Swaps': 479789,
				'Cumulative Volume': 6821615,
				'Cumulative Fees': 6824
			},
			{
				DATE: '2022-02-28',
				Swaps: 2871,
				Volume: 21176,
				Fees: 44,
				'Cumulative Swaps': 482660,
				'Cumulative Volume': 6842791,
				'Cumulative Fees': 6868
			},
			{
				DATE: '2022-03-01',
				Swaps: 2817,
				Volume: 19670,
				Fees: 41,
				'Cumulative Swaps': 485477,
				'Cumulative Volume': 6862461,
				'Cumulative Fees': 6909
			},
			{
				DATE: '2022-03-02',
				Swaps: 2744,
				Volume: 26785,
				Fees: 35,
				'Cumulative Swaps': 488221,
				'Cumulative Volume': 6889246,
				'Cumulative Fees': 6944
			},
			{
				DATE: '2022-03-03',
				Swaps: 2968,
				Volume: 19097,
				Fees: 34,
				'Cumulative Swaps': 491189,
				'Cumulative Volume': 6908343,
				'Cumulative Fees': 6978
			},
			{
				DATE: '2022-03-04',
				Swaps: 2610,
				Volume: 24776,
				Fees: 44,
				'Cumulative Swaps': 493799,
				'Cumulative Volume': 6933119,
				'Cumulative Fees': 7022
			},
			{
				DATE: '2022-03-05',
				Swaps: 2416,
				Volume: 115645,
				Fees: 25,
				'Cumulative Swaps': 496215,
				'Cumulative Volume': 7048764,
				'Cumulative Fees': 7047
			},
			{
				DATE: '2022-03-06',
				Swaps: 2407,
				Volume: 10829,
				Fees: 26,
				'Cumulative Swaps': 498622,
				'Cumulative Volume': 7059593,
				'Cumulative Fees': 7073
			},
			{
				DATE: '2022-03-07',
				Swaps: 2611,
				Volume: 18994,
				Fees: 35,
				'Cumulative Swaps': 501233,
				'Cumulative Volume': 7078587,
				'Cumulative Fees': 7108
			},
			{
				DATE: '2022-03-08',
				Swaps: 2402,
				Volume: 15307,
				Fees: 24,
				'Cumulative Swaps': 503635,
				'Cumulative Volume': 7093894,
				'Cumulative Fees': 7132
			},
			{
				DATE: '2022-03-09',
				Swaps: 2896,
				Volume: 30469,
				Fees: 29,
				'Cumulative Swaps': 506531,
				'Cumulative Volume': 7124363,
				'Cumulative Fees': 7161
			},
			{
				DATE: '2022-03-10',
				Swaps: 2496,
				Volume: 9190,
				Fees: 20,
				'Cumulative Swaps': 509027,
				'Cumulative Volume': 7133553,
				'Cumulative Fees': 7181
			},
			{
				DATE: '2022-03-11',
				Swaps: 2904,
				Volume: 14206,
				Fees: 34,
				'Cumulative Swaps': 511931,
				'Cumulative Volume': 7147759,
				'Cumulative Fees': 7215
			},
			{
				DATE: '2022-03-12',
				Swaps: 2676,
				Volume: 14999,
				Fees: 33,
				'Cumulative Swaps': 514607,
				'Cumulative Volume': 7162758,
				'Cumulative Fees': 7248
			},
			{
				DATE: '2022-03-13',
				Swaps: 2686,
				Volume: 17480,
				Fees: 33,
				'Cumulative Swaps': 517293,
				'Cumulative Volume': 7180238,
				'Cumulative Fees': 7281
			},
			{
				DATE: '2022-03-14',
				Swaps: 2841,
				Volume: 17891,
				Fees: 52,
				'Cumulative Swaps': 520134,
				'Cumulative Volume': 7198129,
				'Cumulative Fees': 7333
			},
			{
				DATE: '2022-03-15',
				Swaps: 2646,
				Volume: 17296,
				Fees: 54,
				'Cumulative Swaps': 522780,
				'Cumulative Volume': 7215425,
				'Cumulative Fees': 7387
			},
			{
				DATE: '2022-03-16',
				Swaps: 2468,
				Volume: 13463,
				Fees: 31,
				'Cumulative Swaps': 525248,
				'Cumulative Volume': 7228888,
				'Cumulative Fees': 7418
			},
			{
				DATE: '2022-03-17',
				Swaps: 2678,
				Volume: 24203,
				Fees: 44,
				'Cumulative Swaps': 527926,
				'Cumulative Volume': 7253091,
				'Cumulative Fees': 7462
			},
			{
				DATE: '2022-03-18',
				Swaps: 2523,
				Volume: 16788,
				Fees: 39,
				'Cumulative Swaps': 530449,
				'Cumulative Volume': 7269879,
				'Cumulative Fees': 7501
			},
			{
				DATE: '2022-03-19',
				Swaps: 2513,
				Volume: 16056,
				Fees: 39,
				'Cumulative Swaps': 532962,
				'Cumulative Volume': 7285935,
				'Cumulative Fees': 7540
			},
			{
				DATE: '2022-03-20',
				Swaps: 2313,
				Volume: 8564,
				Fees: 32,
				'Cumulative Swaps': 535275,
				'Cumulative Volume': 7294499,
				'Cumulative Fees': 7572
			},
			{
				DATE: '2022-03-21',
				Swaps: 2486,
				Volume: 20164,
				Fees: 40,
				'Cumulative Swaps': 537761,
				'Cumulative Volume': 7314663,
				'Cumulative Fees': 7612
			},
			{
				DATE: '2022-03-22',
				Swaps: 2565,
				Volume: 10088,
				Fees: 42,
				'Cumulative Swaps': 540326,
				'Cumulative Volume': 7324751,
				'Cumulative Fees': 7654
			},
			{
				DATE: '2022-03-23',
				Swaps: 2532,
				Volume: 16045,
				Fees: 41,
				'Cumulative Swaps': 542858,
				'Cumulative Volume': 7340796,
				'Cumulative Fees': 7695
			},
			{
				DATE: '2022-03-24',
				Swaps: 2560,
				Volume: 30687,
				Fees: 35,
				'Cumulative Swaps': 545418,
				'Cumulative Volume': 7371483,
				'Cumulative Fees': 7730
			},
			{
				DATE: '2022-03-25',
				Swaps: 2452,
				Volume: 9384,
				Fees: 38,
				'Cumulative Swaps': 547870,
				'Cumulative Volume': 7380867,
				'Cumulative Fees': 7768
			},
			{
				DATE: '2022-03-26',
				Swaps: 2195,
				Volume: 6910,
				Fees: 19,
				'Cumulative Swaps': 550065,
				'Cumulative Volume': 7387777,
				'Cumulative Fees': 7787
			},
			{
				DATE: '2022-03-27',
				Swaps: 2362,
				Volume: 27211,
				Fees: 27,
				'Cumulative Swaps': 552427,
				'Cumulative Volume': 7414988,
				'Cumulative Fees': 7814
			},
			{
				DATE: '2022-03-28',
				Swaps: 2640,
				Volume: 23782,
				Fees: 56,
				'Cumulative Swaps': 555067,
				'Cumulative Volume': 7438770,
				'Cumulative Fees': 7870
			},
			{
				DATE: '2022-03-29',
				Swaps: 2436,
				Volume: 9851,
				Fees: 40,
				'Cumulative Swaps': 557503,
				'Cumulative Volume': 7448621,
				'Cumulative Fees': 7910
			},
			{
				DATE: '2022-03-30',
				Swaps: 2691,
				Volume: 21824,
				Fees: 45,
				'Cumulative Swaps': 560194,
				'Cumulative Volume': 7470445,
				'Cumulative Fees': 7955
			},
			{
				DATE: '2022-03-31',
				Swaps: 2691,
				Volume: 21724,
				Fees: 45,
				'Cumulative Swaps': 562885,
				'Cumulative Volume': 7492169,
				'Cumulative Fees': 8000
			},
			{
				DATE: '2022-04-01',
				Swaps: 2668,
				Volume: 21487,
				Fees: 41,
				'Cumulative Swaps': 565553,
				'Cumulative Volume': 7513656,
				'Cumulative Fees': 8041
			},
			{
				DATE: '2022-04-02',
				Swaps: 2614,
				Volume: 14829,
				Fees: 37,
				'Cumulative Swaps': 568167,
				'Cumulative Volume': 7528485,
				'Cumulative Fees': 8078
			},
			{
				DATE: '2022-04-03',
				Swaps: 2262,
				Volume: 9708,
				Fees: 31,
				'Cumulative Swaps': 570429,
				'Cumulative Volume': 7538193,
				'Cumulative Fees': 8109
			},
			{
				DATE: '2022-04-04',
				Swaps: 2256,
				Volume: 11088,
				Fees: 42,
				'Cumulative Swaps': 572685,
				'Cumulative Volume': 7549281,
				'Cumulative Fees': 8151
			},
			{
				DATE: '2022-04-05',
				Swaps: 2501,
				Volume: 20555,
				Fees: 36,
				'Cumulative Swaps': 575186,
				'Cumulative Volume': 7569836,
				'Cumulative Fees': 8187
			},
			{
				DATE: '2022-04-06',
				Swaps: 2618,
				Volume: 19485,
				Fees: 45,
				'Cumulative Swaps': 577804,
				'Cumulative Volume': 7589321,
				'Cumulative Fees': 8232
			},
			{
				DATE: '2022-04-07',
				Swaps: 2311,
				Volume: 12880,
				Fees: 42,
				'Cumulative Swaps': 580115,
				'Cumulative Volume': 7602201,
				'Cumulative Fees': 8274
			},
			{
				DATE: '2022-04-08',
				Swaps: 2225,
				Volume: 24897,
				Fees: 36,
				'Cumulative Swaps': 582340,
				'Cumulative Volume': 7627098,
				'Cumulative Fees': 8310
			},
			{
				DATE: '2022-04-09',
				Swaps: 2061,
				Volume: 6693,
				Fees: 25,
				'Cumulative Swaps': 584401,
				'Cumulative Volume': 7633791,
				'Cumulative Fees': 8335
			},
			{
				DATE: '2022-04-10',
				Swaps: 1787,
				Volume: 4841,
				Fees: 40,
				'Cumulative Swaps': 586188,
				'Cumulative Volume': 7638632,
				'Cumulative Fees': 8375
			},
			{
				DATE: '2022-04-11',
				Swaps: 2372,
				Volume: 13601,
				Fees: 60,
				'Cumulative Swaps': 588560,
				'Cumulative Volume': 7652233,
				'Cumulative Fees': 8435
			},
			{
				DATE: '2022-04-12',
				Swaps: 1912,
				Volume: 9708,
				Fees: 44,
				'Cumulative Swaps': 590472,
				'Cumulative Volume': 7661941,
				'Cumulative Fees': 8479
			},
			{
				DATE: '2022-04-13',
				Swaps: 1831,
				Volume: 11047,
				Fees: 33,
				'Cumulative Swaps': 592303,
				'Cumulative Volume': 7672988,
				'Cumulative Fees': 8512
			},
			{
				DATE: '2022-04-14',
				Swaps: 2191,
				Volume: 28692,
				Fees: 39,
				'Cumulative Swaps': 594494,
				'Cumulative Volume': 7701680,
				'Cumulative Fees': 8551
			},
			{
				DATE: '2022-04-15',
				Swaps: 1905,
				Volume: 5600,
				Fees: 37,
				'Cumulative Swaps': 596399,
				'Cumulative Volume': 7707280,
				'Cumulative Fees': 8588
			},
			{
				DATE: '2022-04-16',
				Swaps: 2148,
				Volume: 15450,
				Fees: 32,
				'Cumulative Swaps': 598547,
				'Cumulative Volume': 7722730,
				'Cumulative Fees': 8620
			},
			{
				DATE: '2022-04-17',
				Swaps: 2058,
				Volume: 6299,
				Fees: 25,
				'Cumulative Swaps': 600605,
				'Cumulative Volume': 7729029,
				'Cumulative Fees': 8645
			},
			{
				DATE: '2022-04-18',
				Swaps: 2181,
				Volume: 12091,
				Fees: 35,
				'Cumulative Swaps': 602786,
				'Cumulative Volume': 7741120,
				'Cumulative Fees': 8680
			},
			{
				DATE: '2022-04-19',
				Swaps: 2345,
				Volume: 8813,
				Fees: 41,
				'Cumulative Swaps': 605131,
				'Cumulative Volume': 7749933,
				'Cumulative Fees': 8721
			},
			{
				DATE: '2022-04-20',
				Swaps: 2279,
				Volume: 19891,
				Fees: 46,
				'Cumulative Swaps': 607410,
				'Cumulative Volume': 7769824,
				'Cumulative Fees': 8767
			},
			{
				DATE: '2022-04-21',
				Swaps: 2242,
				Volume: 16754,
				Fees: 41,
				'Cumulative Swaps': 609652,
				'Cumulative Volume': 7786578,
				'Cumulative Fees': 8808
			},
			{
				DATE: '2022-04-22',
				Swaps: 1823,
				Volume: 6252,
				Fees: 30,
				'Cumulative Swaps': 611475,
				'Cumulative Volume': 7792830,
				'Cumulative Fees': 8838
			},
			{
				DATE: '2022-04-23',
				Swaps: 1850,
				Volume: 9525,
				Fees: 27,
				'Cumulative Swaps': 613325,
				'Cumulative Volume': 7802355,
				'Cumulative Fees': 8865
			},
			{
				DATE: '2022-04-24',
				Swaps: 1684,
				Volume: 4233,
				Fees: 26,
				'Cumulative Swaps': 615009,
				'Cumulative Volume': 7806588,
				'Cumulative Fees': 8891
			},
			{
				DATE: '2022-04-25',
				Swaps: 2410,
				Volume: 11737,
				Fees: 44,
				'Cumulative Swaps': 617419,
				'Cumulative Volume': 7818325,
				'Cumulative Fees': 8935
			},
			{
				DATE: '2022-04-26',
				Swaps: 2085,
				Volume: 23323,
				Fees: 37,
				'Cumulative Swaps': 619504,
				'Cumulative Volume': 7841648,
				'Cumulative Fees': 8972
			},
			{
				DATE: '2022-04-27',
				Swaps: 2093,
				Volume: 19041,
				Fees: 36,
				'Cumulative Swaps': 621597,
				'Cumulative Volume': 7860689,
				'Cumulative Fees': 9008
			},
			{
				DATE: '2022-04-28',
				Swaps: 2048,
				Volume: 9883,
				Fees: 27,
				'Cumulative Swaps': 623645,
				'Cumulative Volume': 7870572,
				'Cumulative Fees': 9035
			},
			{
				DATE: '2022-04-29',
				Swaps: 2221,
				Volume: 13548,
				Fees: 25,
				'Cumulative Swaps': 625866,
				'Cumulative Volume': 7884120,
				'Cumulative Fees': 9060
			},
			{
				DATE: '2022-04-30',
				Swaps: 2345,
				Volume: 23207,
				Fees: 30,
				'Cumulative Swaps': 628211,
				'Cumulative Volume': 7907327,
				'Cumulative Fees': 9090
			},
			{
				DATE: '2022-05-01',
				Swaps: 2194,
				Volume: 10634,
				Fees: 26,
				'Cumulative Swaps': 630405,
				'Cumulative Volume': 7917961,
				'Cumulative Fees': 9116
			},
			{
				DATE: '2022-05-02',
				Swaps: 2053,
				Volume: 8070,
				Fees: 30,
				'Cumulative Swaps': 632458,
				'Cumulative Volume': 7926031,
				'Cumulative Fees': 9146
			},
			{
				DATE: '2022-05-03',
				Swaps: 2404,
				Volume: 10045,
				Fees: 56,
				'Cumulative Swaps': 634862,
				'Cumulative Volume': 7936076,
				'Cumulative Fees': 9202
			},
			{
				DATE: '2022-05-04',
				Swaps: 2424,
				Volume: 10089,
				Fees: 57,
				'Cumulative Swaps': 637286,
				'Cumulative Volume': 7946165,
				'Cumulative Fees': 9259
			},
			{
				DATE: '2022-05-05',
				Swaps: 2464,
				Volume: 24381,
				Fees: 65,
				'Cumulative Swaps': 639750,
				'Cumulative Volume': 7970546,
				'Cumulative Fees': 9324
			},
			{
				DATE: '2022-05-06',
				Swaps: 2095,
				Volume: 10786,
				Fees: 44,
				'Cumulative Swaps': 641845,
				'Cumulative Volume': 7981332,
				'Cumulative Fees': 9368
			},
			{
				DATE: '2022-05-07',
				Swaps: 1809,
				Volume: 14489,
				Fees: 27,
				'Cumulative Swaps': 643654,
				'Cumulative Volume': 7995821,
				'Cumulative Fees': 9395
			},
			{
				DATE: '2022-05-08',
				Swaps: 2399,
				Volume: 19865,
				Fees: 32,
				'Cumulative Swaps': 646053,
				'Cumulative Volume': 8015686,
				'Cumulative Fees': 9427
			},
			{
				DATE: '2022-05-09',
				Swaps: 3755,
				Volume: 58937,
				Fees: 104,
				'Cumulative Swaps': 649808,
				'Cumulative Volume': 8074623,
				'Cumulative Fees': 9531
			},
			{
				DATE: '2022-05-10',
				Swaps: 4418,
				Volume: 40603,
				Fees: 116,
				'Cumulative Swaps': 654226,
				'Cumulative Volume': 8115226,
				'Cumulative Fees': 9647
			},
			{
				DATE: '2022-05-11',
				Swaps: 7094,
				Volume: 130163,
				Fees: 312,
				'Cumulative Swaps': 661320,
				'Cumulative Volume': 8245389,
				'Cumulative Fees': 9959
			},
			{
				DATE: '2022-05-12',
				Swaps: 6297,
				Volume: 107844,
				Fees: 224,
				'Cumulative Swaps': 667617,
				'Cumulative Volume': 8353233,
				'Cumulative Fees': 10183
			},
			{
				DATE: '2022-05-13',
				Swaps: 4712,
				Volume: 48889,
				Fees: 76,
				'Cumulative Swaps': 672329,
				'Cumulative Volume': 8402122,
				'Cumulative Fees': 10259
			},
			{
				DATE: '2022-05-14',
				Swaps: 3565,
				Volume: 17107,
				Fees: 27,
				'Cumulative Swaps': 675894,
				'Cumulative Volume': 8419229,
				'Cumulative Fees': 10286
			},
			{
				DATE: '2022-05-15',
				Swaps: 2709,
				Volume: 15924,
				Fees: 21,
				'Cumulative Swaps': 678603,
				'Cumulative Volume': 8435153,
				'Cumulative Fees': 10307
			},
			{
				DATE: '2022-05-16',
				Swaps: 3434,
				Volume: 24252,
				Fees: 27,
				'Cumulative Swaps': 682037,
				'Cumulative Volume': 8459405,
				'Cumulative Fees': 10334
			},
			{
				DATE: '2022-05-17',
				Swaps: 3036,
				Volume: 34127,
				Fees: 25,
				'Cumulative Swaps': 685073,
				'Cumulative Volume': 8493532,
				'Cumulative Fees': 10359
			},
			{
				DATE: '2022-05-18',
				Swaps: 3073,
				Volume: 34514,
				Fees: 24,
				'Cumulative Swaps': 688146,
				'Cumulative Volume': 8528046,
				'Cumulative Fees': 10383
			},
			{
				DATE: '2022-05-19',
				Swaps: 3251,
				Volume: 31824,
				Fees: 28,
				'Cumulative Swaps': 691397,
				'Cumulative Volume': 8559870,
				'Cumulative Fees': 10411
			},
			{
				DATE: '2022-05-20',
				Swaps: 2530,
				Volume: 51788,
				Fees: 20,
				'Cumulative Swaps': 693927,
				'Cumulative Volume': 8611658,
				'Cumulative Fees': 10431
			},
			{
				DATE: '2022-05-21',
				Swaps: 1959,
				Volume: 13476,
				Fees: 16,
				'Cumulative Swaps': 695886,
				'Cumulative Volume': 8625134,
				'Cumulative Fees': 10447
			},
			{
				DATE: '2022-05-22',
				Swaps: 2112,
				Volume: 19888,
				Fees: 18,
				'Cumulative Swaps': 697998,
				'Cumulative Volume': 8645022,
				'Cumulative Fees': 10465
			},
			{
				DATE: '2022-05-23',
				Swaps: 2550,
				Volume: 35716,
				Fees: 23,
				'Cumulative Swaps': 700548,
				'Cumulative Volume': 8680738,
				'Cumulative Fees': 10488
			},
			{
				DATE: '2022-05-24',
				Swaps: 2257,
				Volume: 12776,
				Fees: 21,
				'Cumulative Swaps': 702805,
				'Cumulative Volume': 8693514,
				'Cumulative Fees': 10509
			},
			{
				DATE: '2022-05-25',
				Swaps: 2257,
				Volume: 17137,
				Fees: 20,
				'Cumulative Swaps': 705062,
				'Cumulative Volume': 8710651,
				'Cumulative Fees': 10529
			},
			{
				DATE: '2022-05-26',
				Swaps: 3307,
				Volume: 27330,
				Fees: 31,
				'Cumulative Swaps': 708369,
				'Cumulative Volume': 8737981,
				'Cumulative Fees': 10560
			},
			{
				DATE: '2022-05-27',
				Swaps: 3249,
				Volume: 48742,
				Fees: 30,
				'Cumulative Swaps': 711618,
				'Cumulative Volume': 8786723,
				'Cumulative Fees': 10590
			},
			{
				DATE: '2022-05-28',
				Swaps: 2070,
				Volume: 27147,
				Fees: 19,
				'Cumulative Swaps': 713688,
				'Cumulative Volume': 8813870,
				'Cumulative Fees': 10609
			},
			{
				DATE: '2022-05-29',
				Swaps: 1989,
				Volume: 13804,
				Fees: 18,
				'Cumulative Swaps': 715677,
				'Cumulative Volume': 8827674,
				'Cumulative Fees': 10627
			},
			{
				DATE: '2022-05-30',
				Swaps: 2614,
				Volume: 22539,
				Fees: 23,
				'Cumulative Swaps': 718291,
				'Cumulative Volume': 8850213,
				'Cumulative Fees': 10650
			},
			{
				DATE: '2022-05-31',
				Swaps: 2542,
				Volume: 19607,
				Fees: 25,
				'Cumulative Swaps': 720833,
				'Cumulative Volume': 8869820,
				'Cumulative Fees': 10675
			},
			{
				DATE: '2022-06-01',
				Swaps: 2626,
				Volume: 20236,
				Fees: 25,
				'Cumulative Swaps': 723459,
				'Cumulative Volume': 8890056,
				'Cumulative Fees': 10700
			},
			{
				DATE: '2022-06-02',
				Swaps: 2506,
				Volume: 14856,
				Fees: 23,
				'Cumulative Swaps': 725965,
				'Cumulative Volume': 8904912,
				'Cumulative Fees': 10723
			},
			{
				DATE: '2022-06-03',
				Swaps: 2220,
				Volume: 18668,
				Fees: 19,
				'Cumulative Swaps': 728185,
				'Cumulative Volume': 8923580,
				'Cumulative Fees': 10742
			},
			{
				DATE: '2022-06-04',
				Swaps: 2042,
				Volume: 8740,
				Fees: 16,
				'Cumulative Swaps': 730227,
				'Cumulative Volume': 8932320,
				'Cumulative Fees': 10758
			},
			{
				DATE: '2022-06-05',
				Swaps: 1743,
				Volume: 14471,
				Fees: 13,
				'Cumulative Swaps': 731970,
				'Cumulative Volume': 8946791,
				'Cumulative Fees': 10771
			},
			{
				DATE: '2022-06-06',
				Swaps: 2425,
				Volume: 23267,
				Fees: 19,
				'Cumulative Swaps': 734395,
				'Cumulative Volume': 8970058,
				'Cumulative Fees': 10790
			},
			{
				DATE: '2022-06-07',
				Swaps: 2362,
				Volume: 22581,
				Fees: 20,
				'Cumulative Swaps': 736757,
				'Cumulative Volume': 8992639,
				'Cumulative Fees': 10810
			},
			{
				DATE: '2022-06-08',
				Swaps: 2021,
				Volume: 22599,
				Fees: 15,
				'Cumulative Swaps': 738778,
				'Cumulative Volume': 9015238,
				'Cumulative Fees': 10825
			},
			{
				DATE: '2022-06-09',
				Swaps: 1787,
				Volume: 16709,
				Fees: 13,
				'Cumulative Swaps': 740565,
				'Cumulative Volume': 9031947,
				'Cumulative Fees': 10838
			},
			{
				DATE: '2022-06-10',
				Swaps: 2263,
				Volume: 66591,
				Fees: 18,
				'Cumulative Swaps': 742828,
				'Cumulative Volume': 9098538,
				'Cumulative Fees': 10856
			},
			{
				DATE: '2022-06-11',
				Swaps: 2320,
				Volume: 22525,
				Fees: 19,
				'Cumulative Swaps': 745148,
				'Cumulative Volume': 9121063,
				'Cumulative Fees': 10875
			},
			{
				DATE: '2022-06-12',
				Swaps: 2996,
				Volume: 69857,
				Fees: 27,
				'Cumulative Swaps': 748144,
				'Cumulative Volume': 9190920,
				'Cumulative Fees': 10902
			},
			{
				DATE: '2022-06-13',
				Swaps: 4940,
				Volume: 73778,
				Fees: 66,
				'Cumulative Swaps': 753084,
				'Cumulative Volume': 9264698,
				'Cumulative Fees': 10968
			},
			{
				DATE: '2022-06-14',
				Swaps: 3198,
				Volume: 67313,
				Fees: 32,
				'Cumulative Swaps': 756282,
				'Cumulative Volume': 9332011,
				'Cumulative Fees': 11000
			},
			{
				DATE: '2022-06-15',
				Swaps: 3392,
				Volume: 66512,
				Fees: 36,
				'Cumulative Swaps': 759674,
				'Cumulative Volume': 9398523,
				'Cumulative Fees': 11036
			},
			{
				DATE: '2022-06-16',
				Swaps: 2245,
				Volume: 44491,
				Fees: 18,
				'Cumulative Swaps': 761919,
				'Cumulative Volume': 9443014,
				'Cumulative Fees': 11054
			},
			{
				DATE: '2022-06-17',
				Swaps: 1872,
				Volume: 28907,
				Fees: 15,
				'Cumulative Swaps': 763791,
				'Cumulative Volume': 9471921,
				'Cumulative Fees': 11069
			},
			{
				DATE: '2022-06-18',
				Swaps: 3361,
				Volume: 31350,
				Fees: 38,
				'Cumulative Swaps': 767152,
				'Cumulative Volume': 9503271,
				'Cumulative Fees': 11107
			},
			{
				DATE: '2022-06-19',
				Swaps: 2566,
				Volume: 24038,
				Fees: 24,
				'Cumulative Swaps': 769718,
				'Cumulative Volume': 9527309,
				'Cumulative Fees': 11131
			},
			{
				DATE: '2022-06-20',
				Swaps: 2815,
				Volume: 30107,
				Fees: 23,
				'Cumulative Swaps': 772533,
				'Cumulative Volume': 9557416,
				'Cumulative Fees': 11154
			},
			{
				DATE: '2022-06-21',
				Swaps: 2535,
				Volume: 57881,
				Fees: 20,
				'Cumulative Swaps': 775068,
				'Cumulative Volume': 9615297,
				'Cumulative Fees': 11174
			},
			{
				DATE: '2022-06-22',
				Swaps: 2779,
				Volume: 21716,
				Fees: 23,
				'Cumulative Swaps': 777847,
				'Cumulative Volume': 9637013,
				'Cumulative Fees': 11197
			},
			{
				DATE: '2022-06-23',
				Swaps: 3167,
				Volume: 29515,
				Fees: 26,
				'Cumulative Swaps': 781014,
				'Cumulative Volume': 9666528,
				'Cumulative Fees': 11223
			},
			{
				DATE: '2022-06-24',
				Swaps: 3214,
				Volume: 93496,
				Fees: 29,
				'Cumulative Swaps': 784228,
				'Cumulative Volume': 9760024,
				'Cumulative Fees': 11252
			},
			{
				DATE: '2022-06-25',
				Swaps: 2702,
				Volume: 31856,
				Fees: 21,
				'Cumulative Swaps': 786930,
				'Cumulative Volume': 9791880,
				'Cumulative Fees': 11273
			},
			{
				DATE: '2022-06-26',
				Swaps: 2320,
				Volume: 27024,
				Fees: 19,
				'Cumulative Swaps': 789250,
				'Cumulative Volume': 9818904,
				'Cumulative Fees': 11292
			},
			{
				DATE: '2022-06-27',
				Swaps: 2584,
				Volume: 87988,
				Fees: 19,
				'Cumulative Swaps': 791834,
				'Cumulative Volume': 9906892,
				'Cumulative Fees': 11311
			},
			{
				DATE: '2022-06-28',
				Swaps: 2404,
				Volume: 21414,
				Fees: 20,
				'Cumulative Swaps': 794238,
				'Cumulative Volume': 9928306,
				'Cumulative Fees': 11331
			},
			{
				DATE: '2022-06-29',
				Swaps: 2795,
				Volume: 92836,
				Fees: 22,
				'Cumulative Swaps': 797033,
				'Cumulative Volume': 10021142,
				'Cumulative Fees': 11353
			},
			{
				DATE: '2022-06-30',
				Swaps: 3457,
				Volume: 28015,
				Fees: 27,
				'Cumulative Swaps': 800490,
				'Cumulative Volume': 10049157,
				'Cumulative Fees': 11380
			},
			{
				DATE: '2022-07-01',
				Swaps: 2779,
				Volume: 66902,
				Fees: 21,
				'Cumulative Swaps': 803269,
				'Cumulative Volume': 10116059,
				'Cumulative Fees': 11401
			},
			{
				DATE: '2022-07-02',
				Swaps: 2223,
				Volume: 15908,
				Fees: 15,
				'Cumulative Swaps': 805492,
				'Cumulative Volume': 10131967,
				'Cumulative Fees': 11416
			},
			{
				DATE: '2022-07-03',
				Swaps: 2475,
				Volume: 14450,
				Fees: 20,
				'Cumulative Swaps': 807967,
				'Cumulative Volume': 10146417,
				'Cumulative Fees': 11436
			},
			{
				DATE: '2022-07-04',
				Swaps: 2582,
				Volume: 24654,
				Fees: 20,
				'Cumulative Swaps': 810549,
				'Cumulative Volume': 10171071,
				'Cumulative Fees': 11456
			},
			{
				DATE: '2022-07-05',
				Swaps: 2843,
				Volume: 52872,
				Fees: 21,
				'Cumulative Swaps': 813392,
				'Cumulative Volume': 10223943,
				'Cumulative Fees': 11477
			},
			{
				DATE: '2022-07-06',
				Swaps: 3614,
				Volume: 20732,
				Fees: 27,
				'Cumulative Swaps': 817006,
				'Cumulative Volume': 10244675,
				'Cumulative Fees': 11504
			},
			{
				DATE: '2022-07-07',
				Swaps: 3449,
				Volume: 24992,
				Fees: 24,
				'Cumulative Swaps': 820455,
				'Cumulative Volume': 10269667,
				'Cumulative Fees': 11528
			},
			{
				DATE: '2022-07-08',
				Swaps: 2884,
				Volume: 23258,
				Fees: 22,
				'Cumulative Swaps': 823339,
				'Cumulative Volume': 10292925,
				'Cumulative Fees': 11550
			},
			{
				DATE: '2022-07-09',
				Swaps: 2006,
				Volume: 16364,
				Fees: 15,
				'Cumulative Swaps': 825345,
				'Cumulative Volume': 10309289,
				'Cumulative Fees': 11565
			},
			{
				DATE: '2022-07-10',
				Swaps: 2150,
				Volume: 13030,
				Fees: 16,
				'Cumulative Swaps': 827495,
				'Cumulative Volume': 10322319,
				'Cumulative Fees': 11581
			},
			{
				DATE: '2022-07-11',
				Swaps: 2512,
				Volume: 77662,
				Fees: 21,
				'Cumulative Swaps': 830007,
				'Cumulative Volume': 10399981,
				'Cumulative Fees': 11602
			},
			{
				DATE: '2022-07-12',
				Swaps: 2393,
				Volume: 70163,
				Fees: 24,
				'Cumulative Swaps': 832400,
				'Cumulative Volume': 10470144,
				'Cumulative Fees': 11626
			},
			{
				DATE: '2022-07-13',
				Swaps: 2845,
				Volume: 49157,
				Fees: 23,
				'Cumulative Swaps': 835245,
				'Cumulative Volume': 10519301,
				'Cumulative Fees': 11649
			},
			{
				DATE: '2022-07-14',
				Swaps: 2839,
				Volume: 32449,
				Fees: 21,
				'Cumulative Swaps': 838084,
				'Cumulative Volume': 10551750,
				'Cumulative Fees': 11670
			},
			{
				DATE: '2022-07-15',
				Swaps: 2637,
				Volume: 27249,
				Fees: 19,
				'Cumulative Swaps': 840721,
				'Cumulative Volume': 10578999,
				'Cumulative Fees': 11689
			},
			{
				DATE: '2022-07-16',
				Swaps: 2549,
				Volume: 15442,
				Fees: 20,
				'Cumulative Swaps': 843270,
				'Cumulative Volume': 10594441,
				'Cumulative Fees': 11709
			},
			{
				DATE: '2022-07-17',
				Swaps: 2553,
				Volume: 23787,
				Fees: 20,
				'Cumulative Swaps': 845823,
				'Cumulative Volume': 10618228,
				'Cumulative Fees': 11729
			},
			{
				DATE: '2022-07-18',
				Swaps: 3426,
				Volume: 31116,
				Fees: 29,
				'Cumulative Swaps': 849249,
				'Cumulative Volume': 10649344,
				'Cumulative Fees': 11758
			},
			{
				DATE: '2022-07-19',
				Swaps: 3476,
				Volume: 29690,
				Fees: 28,
				'Cumulative Swaps': 852725,
				'Cumulative Volume': 10679034,
				'Cumulative Fees': 11786
			},
			{
				DATE: '2022-07-20',
				Swaps: 3237,
				Volume: 23160,
				Fees: 27,
				'Cumulative Swaps': 855962,
				'Cumulative Volume': 10702194,
				'Cumulative Fees': 11813
			},
			{
				DATE: '2022-07-21',
				Swaps: 2683,
				Volume: 25936,
				Fees: 25,
				'Cumulative Swaps': 858645,
				'Cumulative Volume': 10728130,
				'Cumulative Fees': 11838
			},
			{
				DATE: '2022-07-22',
				Swaps: 2412,
				Volume: 15361,
				Fees: 20,
				'Cumulative Swaps': 861057,
				'Cumulative Volume': 10743491,
				'Cumulative Fees': 11858
			},
			{
				DATE: '2022-07-23',
				Swaps: 1897,
				Volume: 10677,
				Fees: 16,
				'Cumulative Swaps': 862954,
				'Cumulative Volume': 10754168,
				'Cumulative Fees': 11874
			},
			{
				DATE: '2022-07-24',
				Swaps: 2248,
				Volume: 10751,
				Fees: 18,
				'Cumulative Swaps': 865202,
				'Cumulative Volume': 10764919,
				'Cumulative Fees': 11892
			},
			{
				DATE: '2022-07-25',
				Swaps: 2831,
				Volume: 26426,
				Fees: 26,
				'Cumulative Swaps': 868033,
				'Cumulative Volume': 10791345,
				'Cumulative Fees': 11918
			},
			{
				DATE: '2022-07-26',
				Swaps: 2603,
				Volume: 23425,
				Fees: 23,
				'Cumulative Swaps': 870636,
				'Cumulative Volume': 10814770,
				'Cumulative Fees': 11941
			},
			{
				DATE: '2022-07-27',
				Swaps: 2928,
				Volume: 16519,
				Fees: 28,
				'Cumulative Swaps': 873564,
				'Cumulative Volume': 10831289,
				'Cumulative Fees': 11969
			},
			{
				DATE: '2022-07-28',
				Swaps: 2729,
				Volume: 30677,
				Fees: 26,
				'Cumulative Swaps': 876293,
				'Cumulative Volume': 10861966,
				'Cumulative Fees': 11995
			},
			{
				DATE: '2022-07-29',
				Swaps: 2933,
				Volume: 22483,
				Fees: 26,
				'Cumulative Swaps': 879226,
				'Cumulative Volume': 10884449,
				'Cumulative Fees': 12021
			},
			{
				DATE: '2022-07-30',
				Swaps: 2751,
				Volume: 14900,
				Fees: 24,
				'Cumulative Swaps': 881977,
				'Cumulative Volume': 10899349,
				'Cumulative Fees': 12045
			},
			{
				DATE: '2022-07-31',
				Swaps: 2313,
				Volume: 8501,
				Fees: 20,
				'Cumulative Swaps': 884290,
				'Cumulative Volume': 10907850,
				'Cumulative Fees': 12065
			},
			{
				DATE: '2022-08-01',
				Swaps: 2631,
				Volume: 12176,
				Fees: 24,
				'Cumulative Swaps': 886921,
				'Cumulative Volume': 10920026,
				'Cumulative Fees': 12089
			},
			{
				DATE: '2022-08-02',
				Swaps: 2613,
				Volume: 23134,
				Fees: 24,
				'Cumulative Swaps': 889534,
				'Cumulative Volume': 10943160,
				'Cumulative Fees': 12113
			},
			{
				DATE: '2022-08-03',
				Swaps: 2383,
				Volume: 15550,
				Fees: 23,
				'Cumulative Swaps': 891917,
				'Cumulative Volume': 10958710,
				'Cumulative Fees': 12136
			},
			{
				DATE: '2022-08-04',
				Swaps: 2758,
				Volume: 9901,
				Fees: 24,
				'Cumulative Swaps': 894675,
				'Cumulative Volume': 10968611,
				'Cumulative Fees': 12160
			},
			{
				DATE: '2022-08-05',
				Swaps: 2580,
				Volume: 17757,
				Fees: 22,
				'Cumulative Swaps': 897255,
				'Cumulative Volume': 10986368,
				'Cumulative Fees': 12182
			},
			{
				DATE: '2022-08-06',
				Swaps: 2492,
				Volume: 12939,
				Fees: 20,
				'Cumulative Swaps': 899747,
				'Cumulative Volume': 10999307,
				'Cumulative Fees': 12202
			},
			{
				DATE: '2022-08-07',
				Swaps: 2650,
				Volume: 49864,
				Fees: 24,
				'Cumulative Swaps': 902397,
				'Cumulative Volume': 11049171,
				'Cumulative Fees': 12226
			},
			{
				DATE: '2022-08-08',
				Swaps: 3325,
				Volume: 34489,
				Fees: 31,
				'Cumulative Swaps': 905722,
				'Cumulative Volume': 11083660,
				'Cumulative Fees': 12257
			},
			{
				DATE: '2022-08-09',
				Swaps: 2856,
				Volume: 28700,
				Fees: 25,
				'Cumulative Swaps': 908578,
				'Cumulative Volume': 11112360,
				'Cumulative Fees': 12282
			},
			{
				DATE: '2022-08-10',
				Swaps: 3422,
				Volume: 20011,
				Fees: 35,
				'Cumulative Swaps': 912000,
				'Cumulative Volume': 11132371,
				'Cumulative Fees': 12317
			},
			{
				DATE: '2022-08-11',
				Swaps: 2643,
				Volume: 16499,
				Fees: 26,
				'Cumulative Swaps': 914643,
				'Cumulative Volume': 11148870,
				'Cumulative Fees': 12343
			},
			{
				DATE: '2022-08-12',
				Swaps: 2511,
				Volume: 69031,
				Fees: 24,
				'Cumulative Swaps': 917154,
				'Cumulative Volume': 11217901,
				'Cumulative Fees': 12367
			},
			{
				DATE: '2022-08-13',
				Swaps: 2737,
				Volume: 33799,
				Fees: 27,
				'Cumulative Swaps': 919891,
				'Cumulative Volume': 11251700,
				'Cumulative Fees': 12394
			},
			{
				DATE: '2022-08-14',
				Swaps: 2393,
				Volume: 30917,
				Fees: 23,
				'Cumulative Swaps': 922284,
				'Cumulative Volume': 11282617,
				'Cumulative Fees': 12417
			},
			{
				DATE: '2022-08-15',
				Swaps: 2755,
				Volume: 36332,
				Fees: 28,
				'Cumulative Swaps': 925039,
				'Cumulative Volume': 11318949,
				'Cumulative Fees': 12445
			},
			{
				DATE: '2022-08-16',
				Swaps: 2734,
				Volume: 21351,
				Fees: 27,
				'Cumulative Swaps': 927773,
				'Cumulative Volume': 11340300,
				'Cumulative Fees': 12472
			},
			{
				DATE: '2022-08-17',
				Swaps: 2666,
				Volume: 20786,
				Fees: 27,
				'Cumulative Swaps': 930439,
				'Cumulative Volume': 11361086,
				'Cumulative Fees': 12499
			},
			{
				DATE: '2022-08-18',
				Swaps: 1558,
				Volume: 9281,
				Fees: 14,
				'Cumulative Swaps': 931997,
				'Cumulative Volume': 11370367,
				'Cumulative Fees': 12513
			},
			{
				DATE: '2022-08-19',
				Swaps: 1900,
				Volume: 13343,
				Fees: 16,
				'Cumulative Swaps': 933897,
				'Cumulative Volume': 11383710,
				'Cumulative Fees': 12529
			},
			{
				DATE: '2022-08-20',
				Swaps: 2395,
				Volume: 36213,
				Fees: 22,
				'Cumulative Swaps': 936292,
				'Cumulative Volume': 11419923,
				'Cumulative Fees': 12551
			},
			{
				DATE: '2022-08-21',
				Swaps: 2023,
				Volume: 19220,
				Fees: 19,
				'Cumulative Swaps': 938315,
				'Cumulative Volume': 11439143,
				'Cumulative Fees': 12570
			},
			{
				DATE: '2022-08-22',
				Swaps: 2436,
				Volume: 20430,
				Fees: 24,
				'Cumulative Swaps': 940751,
				'Cumulative Volume': 11459573,
				'Cumulative Fees': 12594
			},
			{
				DATE: '2022-08-23',
				Swaps: 2406,
				Volume: 17523,
				Fees: 22,
				'Cumulative Swaps': 943157,
				'Cumulative Volume': 11477096,
				'Cumulative Fees': 12616
			},
			{
				DATE: '2022-08-24',
				Swaps: 2176,
				Volume: 8323,
				Fees: 20,
				'Cumulative Swaps': 945333,
				'Cumulative Volume': 11485419,
				'Cumulative Fees': 12636
			},
			{
				DATE: '2022-08-25',
				Swaps: 2134,
				Volume: 146046,
				Fees: 20,
				'Cumulative Swaps': 947467,
				'Cumulative Volume': 11631465,
				'Cumulative Fees': 12656
			},
			{
				DATE: '2022-08-26',
				Swaps: 3089,
				Volume: 30802,
				Fees: 29,
				'Cumulative Swaps': 950556,
				'Cumulative Volume': 11662267,
				'Cumulative Fees': 12685
			},
			{
				DATE: '2022-08-27',
				Swaps: 2575,
				Volume: 23744,
				Fees: 25,
				'Cumulative Swaps': 953131,
				'Cumulative Volume': 11686011,
				'Cumulative Fees': 12710
			},
			{
				DATE: '2022-08-28',
				Swaps: 2290,
				Volume: 31661,
				Fees: 21,
				'Cumulative Swaps': 955421,
				'Cumulative Volume': 11717672,
				'Cumulative Fees': 12731
			},
			{
				DATE: '2022-08-29',
				Swaps: 3222,
				Volume: 29788,
				Fees: 32,
				'Cumulative Swaps': 958643,
				'Cumulative Volume': 11747460,
				'Cumulative Fees': 12763
			},
			{
				DATE: '2022-08-30',
				Swaps: 2905,
				Volume: 29911,
				Fees: 28,
				'Cumulative Swaps': 961548,
				'Cumulative Volume': 11777371,
				'Cumulative Fees': 12791
			},
			{
				DATE: '2022-08-31',
				Swaps: 2930,
				Volume: 18340,
				Fees: 24,
				'Cumulative Swaps': 964478,
				'Cumulative Volume': 11795711,
				'Cumulative Fees': 12815
			},
			{
				DATE: '2022-09-01',
				Swaps: 2364,
				Volume: 16037,
				Fees: 23,
				'Cumulative Swaps': 966842,
				'Cumulative Volume': 11811748,
				'Cumulative Fees': 12838
			},
			{
				DATE: '2022-09-02',
				Swaps: 2085,
				Volume: 17443,
				Fees: 19,
				'Cumulative Swaps': 968927,
				'Cumulative Volume': 11829191,
				'Cumulative Fees': 12857
			},
			{
				DATE: '2022-09-03',
				Swaps: 1514,
				Volume: 25384,
				Fees: 14,
				'Cumulative Swaps': 970441,
				'Cumulative Volume': 11854575,
				'Cumulative Fees': 12871
			},
			{
				DATE: '2022-09-04',
				Swaps: 1615,
				Volume: 21055,
				Fees: 15,
				'Cumulative Swaps': 972056,
				'Cumulative Volume': 11875630,
				'Cumulative Fees': 12886
			},
			{
				DATE: '2022-09-05',
				Swaps: 1745,
				Volume: 76339,
				Fees: 17,
				'Cumulative Swaps': 973801,
				'Cumulative Volume': 11951969,
				'Cumulative Fees': 12903
			},
			{
				DATE: '2022-09-06',
				Swaps: 2703,
				Volume: 20114,
				Fees: 28,
				'Cumulative Swaps': 976504,
				'Cumulative Volume': 11972083,
				'Cumulative Fees': 12931
			},
			{
				DATE: '2022-09-07',
				Swaps: 2425,
				Volume: 27060,
				Fees: 26,
				'Cumulative Swaps': 978929,
				'Cumulative Volume': 11999143,
				'Cumulative Fees': 12957
			},
			{
				DATE: '2022-09-08',
				Swaps: 2070,
				Volume: 13213,
				Fees: 17,
				'Cumulative Swaps': 980999,
				'Cumulative Volume': 12012356,
				'Cumulative Fees': 12974
			},
			{
				DATE: '2022-09-09',
				Swaps: 2588,
				Volume: 141402,
				Fees: 24,
				'Cumulative Swaps': 983587,
				'Cumulative Volume': 12153758,
				'Cumulative Fees': 12998
			},
			{
				DATE: '2022-09-10',
				Swaps: 2020,
				Volume: 68986,
				Fees: 18,
				'Cumulative Swaps': 985607,
				'Cumulative Volume': 12222744,
				'Cumulative Fees': 13016
			},
			{
				DATE: '2022-09-11',
				Swaps: 1872,
				Volume: 21123,
				Fees: 15,
				'Cumulative Swaps': 987479,
				'Cumulative Volume': 12243867,
				'Cumulative Fees': 13031
			},
			{
				DATE: '2022-09-12',
				Swaps: 2835,
				Volume: 170849,
				Fees: 26,
				'Cumulative Swaps': 990314,
				'Cumulative Volume': 12414716,
				'Cumulative Fees': 13057
			},
			{
				DATE: '2022-09-13',
				Swaps: 3088,
				Volume: 104840,
				Fees: 32,
				'Cumulative Swaps': 993402,
				'Cumulative Volume': 12519556,
				'Cumulative Fees': 13089
			},
			{
				DATE: '2022-09-14',
				Swaps: 2202,
				Volume: 23827,
				Fees: 23,
				'Cumulative Swaps': 995604,
				'Cumulative Volume': 12543383,
				'Cumulative Fees': 13112
			},
			{
				DATE: '2022-09-15',
				Swaps: 2456,
				Volume: 470879,
				Fees: 25,
				'Cumulative Swaps': 998060,
				'Cumulative Volume': 13014262,
				'Cumulative Fees': 13137
			},
			{
				DATE: '2022-09-16',
				Swaps: 2059,
				Volume: 43762,
				Fees: 22,
				'Cumulative Swaps': 1000119,
				'Cumulative Volume': 13058024,
				'Cumulative Fees': 13159
			},
			{
				DATE: '2022-09-17',
				Swaps: 2196,
				Volume: 14258,
				Fees: 22,
				'Cumulative Swaps': 1002315,
				'Cumulative Volume': 13072282,
				'Cumulative Fees': 13181
			},
			{
				DATE: '2022-09-18',
				Swaps: 2443,
				Volume: 33022,
				Fees: 31,
				'Cumulative Swaps': 1004758,
				'Cumulative Volume': 13105304,
				'Cumulative Fees': 13212
			},
			{
				DATE: '2022-09-19',
				Swaps: 2381,
				Volume: 27536,
				Fees: 24,
				'Cumulative Swaps': 1007139,
				'Cumulative Volume': 13132840,
				'Cumulative Fees': 13236
			},
			{
				DATE: '2022-09-20',
				Swaps: 1803,
				Volume: 18428,
				Fees: 19,
				'Cumulative Swaps': 1008942,
				'Cumulative Volume': 13151268,
				'Cumulative Fees': 13255
			},
			{
				DATE: '2022-09-21',
				Swaps: 2411,
				Volume: 48877,
				Fees: 35,
				'Cumulative Swaps': 1011353,
				'Cumulative Volume': 13200145,
				'Cumulative Fees': 13290
			},
			{
				DATE: '2022-09-22',
				Swaps: 1763,
				Volume: 13747,
				Fees: 16,
				'Cumulative Swaps': 1013116,
				'Cumulative Volume': 13213892,
				'Cumulative Fees': 13306
			},
			{
				DATE: '2022-09-23',
				Swaps: 2002,
				Volume: 18520,
				Fees: 20,
				'Cumulative Swaps': 1015118,
				'Cumulative Volume': 13232412,
				'Cumulative Fees': 13326
			},
			{
				DATE: '2022-09-24',
				Swaps: 1733,
				Volume: 21698,
				Fees: 18,
				'Cumulative Swaps': 1016851,
				'Cumulative Volume': 13254110,
				'Cumulative Fees': 13344
			},
			{
				DATE: '2022-09-25',
				Swaps: 1501,
				Volume: 7886,
				Fees: 15,
				'Cumulative Swaps': 1018352,
				'Cumulative Volume': 13261996,
				'Cumulative Fees': 13359
			},
			{
				DATE: '2022-09-26',
				Swaps: 1980,
				Volume: 11441,
				Fees: 22,
				'Cumulative Swaps': 1020332,
				'Cumulative Volume': 13273437,
				'Cumulative Fees': 13381
			},
			{
				DATE: '2022-09-27',
				Swaps: 2162,
				Volume: 161233,
				Fees: 24,
				'Cumulative Swaps': 1022494,
				'Cumulative Volume': 13434670,
				'Cumulative Fees': 13405
			},
			{
				DATE: '2022-09-28',
				Swaps: 2104,
				Volume: 12211,
				Fees: 21,
				'Cumulative Swaps': 1024598,
				'Cumulative Volume': 13446881,
				'Cumulative Fees': 13426
			},
			{
				DATE: '2022-09-29',
				Swaps: 2333,
				Volume: 93969,
				Fees: 31,
				'Cumulative Swaps': 1026931,
				'Cumulative Volume': 13540850,
				'Cumulative Fees': 13457
			},
			{
				DATE: '2022-09-30',
				Swaps: 2244,
				Volume: 430330,
				Fees: 27,
				'Cumulative Swaps': 1029175,
				'Cumulative Volume': 13971180,
				'Cumulative Fees': 13484
			},
			{
				DATE: '2022-10-01',
				Swaps: 1600,
				Volume: 22960,
				Fees: 16,
				'Cumulative Swaps': 1030775,
				'Cumulative Volume': 13994140,
				'Cumulative Fees': 13500
			},
			{
				DATE: '2022-10-02',
				Swaps: 1736,
				Volume: 15128,
				Fees: 17,
				'Cumulative Swaps': 1032511,
				'Cumulative Volume': 14009268,
				'Cumulative Fees': 13517
			},
			{
				DATE: '2022-10-03',
				Swaps: 2115,
				Volume: 46614,
				Fees: 23,
				'Cumulative Swaps': 1034626,
				'Cumulative Volume': 14055882,
				'Cumulative Fees': 13540
			},
			{
				DATE: '2022-10-04',
				Swaps: 1815,
				Volume: 17957,
				Fees: 17,
				'Cumulative Swaps': 1036441,
				'Cumulative Volume': 14073839,
				'Cumulative Fees': 13557
			},
			{
				DATE: '2022-10-05',
				Swaps: 2025,
				Volume: 29906,
				Fees: 22,
				'Cumulative Swaps': 1038466,
				'Cumulative Volume': 14103745,
				'Cumulative Fees': 13579
			},
			{
				DATE: '2022-10-06',
				Swaps: 1723,
				Volume: 19134,
				Fees: 19,
				'Cumulative Swaps': 1040189,
				'Cumulative Volume': 14122879,
				'Cumulative Fees': 13598
			},
			{
				DATE: '2022-10-07',
				Swaps: 1613,
				Volume: 29188,
				Fees: 15,
				'Cumulative Swaps': 1041802,
				'Cumulative Volume': 14152067,
				'Cumulative Fees': 13613
			},
			{
				DATE: '2022-10-08',
				Swaps: 1522,
				Volume: 12159,
				Fees: 13,
				'Cumulative Swaps': 1043324,
				'Cumulative Volume': 14164226,
				'Cumulative Fees': 13626
			},
			{
				DATE: '2022-10-09',
				Swaps: 1380,
				Volume: 11783,
				Fees: 14,
				'Cumulative Swaps': 1044704,
				'Cumulative Volume': 14176009,
				'Cumulative Fees': 13640
			},
			{
				DATE: '2022-10-10',
				Swaps: 1849,
				Volume: 23170,
				Fees: 16,
				'Cumulative Swaps': 1046553,
				'Cumulative Volume': 14199179,
				'Cumulative Fees': 13656
			},
			{
				DATE: '2022-10-11',
				Swaps: 1698,
				Volume: 11850,
				Fees: 19,
				'Cumulative Swaps': 1048251,
				'Cumulative Volume': 14211029,
				'Cumulative Fees': 13675
			},
			{
				DATE: '2022-10-12',
				Swaps: 1315,
				Volume: 27796,
				Fees: 14,
				'Cumulative Swaps': 1049566,
				'Cumulative Volume': 14238825,
				'Cumulative Fees': 13689
			},
			{
				DATE: '2022-10-13',
				Swaps: 2690,
				Volume: 32034,
				Fees: 32,
				'Cumulative Swaps': 1052256,
				'Cumulative Volume': 14270859,
				'Cumulative Fees': 13721
			},
			{
				DATE: '2022-10-14',
				Swaps: 1724,
				Volume: 19778,
				Fees: 18,
				'Cumulative Swaps': 1053980,
				'Cumulative Volume': 14290637,
				'Cumulative Fees': 13739
			},
			{
				DATE: '2022-10-15',
				Swaps: 1205,
				Volume: 18677,
				Fees: 11,
				'Cumulative Swaps': 1055185,
				'Cumulative Volume': 14309314,
				'Cumulative Fees': 13750
			},
			{
				DATE: '2022-10-16',
				Swaps: 1639,
				Volume: 21526,
				Fees: 15,
				'Cumulative Swaps': 1056824,
				'Cumulative Volume': 14330840,
				'Cumulative Fees': 13765
			},
			{
				DATE: '2022-10-17',
				Swaps: 1689,
				Volume: 12899,
				Fees: 17,
				'Cumulative Swaps': 1058513,
				'Cumulative Volume': 14343739,
				'Cumulative Fees': 13782
			},
			{
				DATE: '2022-10-18',
				Swaps: 1726,
				Volume: 25700,
				Fees: 15,
				'Cumulative Swaps': 1060239,
				'Cumulative Volume': 14369439,
				'Cumulative Fees': 13797
			},
			{
				DATE: '2022-10-19',
				Swaps: 1516,
				Volume: 13272,
				Fees: 13,
				'Cumulative Swaps': 1061755,
				'Cumulative Volume': 14382711,
				'Cumulative Fees': 13810
			},
			{
				DATE: '2022-10-20',
				Swaps: 1976,
				Volume: 25501,
				Fees: 20,
				'Cumulative Swaps': 1063731,
				'Cumulative Volume': 14408212,
				'Cumulative Fees': 13830
			},
			{
				DATE: '2022-10-21',
				Swaps: 2198,
				Volume: 20555,
				Fees: 22,
				'Cumulative Swaps': 1065929,
				'Cumulative Volume': 14428767,
				'Cumulative Fees': 13852
			},
			{
				DATE: '2022-10-22',
				Swaps: 1519,
				Volume: 14786,
				Fees: 12,
				'Cumulative Swaps': 1067448,
				'Cumulative Volume': 14443553,
				'Cumulative Fees': 13864
			},
			{
				DATE: '2022-10-23',
				Swaps: 1729,
				Volume: 16767,
				Fees: 16,
				'Cumulative Swaps': 1069177,
				'Cumulative Volume': 14460320,
				'Cumulative Fees': 13880
			},
			{
				DATE: '2022-10-24',
				Swaps: 1725,
				Volume: 21872,
				Fees: 18,
				'Cumulative Swaps': 1070902,
				'Cumulative Volume': 14482192,
				'Cumulative Fees': 13898
			},
			{
				DATE: '2022-10-25',
				Swaps: 2493,
				Volume: 32811,
				Fees: 26,
				'Cumulative Swaps': 1073395,
				'Cumulative Volume': 14515003,
				'Cumulative Fees': 13924
			},
			{
				DATE: '2022-10-26',
				Swaps: 2657,
				Volume: 23546,
				Fees: 28,
				'Cumulative Swaps': 1076052,
				'Cumulative Volume': 14538549,
				'Cumulative Fees': 13952
			},
			{
				DATE: '2022-10-27',
				Swaps: 2446,
				Volume: 16762,
				Fees: 22,
				'Cumulative Swaps': 1078498,
				'Cumulative Volume': 14555311,
				'Cumulative Fees': 13974
			},
			{
				DATE: '2022-10-28',
				Swaps: 2144,
				Volume: 26855,
				Fees: 22,
				'Cumulative Swaps': 1080642,
				'Cumulative Volume': 14582166,
				'Cumulative Fees': 13996
			},
			{
				DATE: '2022-10-29',
				Swaps: 2849,
				Volume: 23845,
				Fees: 28,
				'Cumulative Swaps': 1083491,
				'Cumulative Volume': 14606011,
				'Cumulative Fees': 14024
			},
			{
				DATE: '2022-10-30',
				Swaps: 1854,
				Volume: 10153,
				Fees: 17,
				'Cumulative Swaps': 1085345,
				'Cumulative Volume': 14616164,
				'Cumulative Fees': 14041
			},
			{
				DATE: '2022-10-31',
				Swaps: 2732,
				Volume: 57889,
				Fees: 26,
				'Cumulative Swaps': 1088077,
				'Cumulative Volume': 14674053,
				'Cumulative Fees': 14067
			},
			{
				DATE: '2022-11-01',
				Swaps: 2225,
				Volume: 18890,
				Fees: 20,
				'Cumulative Swaps': 1090302,
				'Cumulative Volume': 14692943,
				'Cumulative Fees': 14087
			},
			{
				DATE: '2022-11-02',
				Swaps: 2550,
				Volume: 29630,
				Fees: 28,
				'Cumulative Swaps': 1092852,
				'Cumulative Volume': 14722573,
				'Cumulative Fees': 14115
			},
			{
				DATE: '2022-11-03',
				Swaps: 1984,
				Volume: 53327,
				Fees: 20,
				'Cumulative Swaps': 1094836,
				'Cumulative Volume': 14775900,
				'Cumulative Fees': 14135
			},
			{
				DATE: '2022-11-04',
				Swaps: 2325,
				Volume: 16563,
				Fees: 23,
				'Cumulative Swaps': 1097161,
				'Cumulative Volume': 14792463,
				'Cumulative Fees': 14158
			},
			{
				DATE: '2022-11-05',
				Swaps: 2566,
				Volume: 15867,
				Fees: 23,
				'Cumulative Swaps': 1099727,
				'Cumulative Volume': 14808330,
				'Cumulative Fees': 14181
			},
			{
				DATE: '2022-11-06',
				Swaps: 2079,
				Volume: 9501,
				Fees: 19,
				'Cumulative Swaps': 1101806,
				'Cumulative Volume': 14817831,
				'Cumulative Fees': 14200
			},
			{
				DATE: '2022-11-07',
				Swaps: 2554,
				Volume: 11796,
				Fees: 25,
				'Cumulative Swaps': 1104360,
				'Cumulative Volume': 14829627,
				'Cumulative Fees': 14225
			},
			{
				DATE: '2022-11-08',
				Swaps: 4992,
				Volume: 81089,
				Fees: 82,
				'Cumulative Swaps': 1109352,
				'Cumulative Volume': 14910716,
				'Cumulative Fees': 14307
			},
			{
				DATE: '2022-11-09',
				Swaps: 4154,
				Volume: 92428,
				Fees: 55,
				'Cumulative Swaps': 1113506,
				'Cumulative Volume': 15003144,
				'Cumulative Fees': 14362
			},
			{
				DATE: '2022-11-10',
				Swaps: 4803,
				Volume: 108156,
				Fees: 57,
				'Cumulative Swaps': 1118309,
				'Cumulative Volume': 15111300,
				'Cumulative Fees': 14419
			},
			{
				DATE: '2022-11-11',
				Swaps: 4091,
				Volume: 147478,
				Fees: 42,
				'Cumulative Swaps': 1122400,
				'Cumulative Volume': 15258778,
				'Cumulative Fees': 14461
			},
			{
				DATE: '2022-11-12',
				Swaps: 2690,
				Volume: 66867,
				Fees: 28,
				'Cumulative Swaps': 1125090,
				'Cumulative Volume': 15325645,
				'Cumulative Fees': 14489
			},
			{
				DATE: '2022-11-13',
				Swaps: 2272,
				Volume: 41791,
				Fees: 23,
				'Cumulative Swaps': 1127362,
				'Cumulative Volume': 15367436,
				'Cumulative Fees': 14512
			},
			{
				DATE: '2022-11-14',
				Swaps: 3081,
				Volume: 83911,
				Fees: 31,
				'Cumulative Swaps': 1130443,
				'Cumulative Volume': 15451347,
				'Cumulative Fees': 14543
			},
			{
				DATE: '2022-11-15',
				Swaps: 2848,
				Volume: 26229,
				Fees: 33,
				'Cumulative Swaps': 1133291,
				'Cumulative Volume': 15477576,
				'Cumulative Fees': 14576
			},
			{
				DATE: '2022-11-16',
				Swaps: 2061,
				Volume: 17001,
				Fees: 24,
				'Cumulative Swaps': 1135352,
				'Cumulative Volume': 15494577,
				'Cumulative Fees': 14600
			},
			{
				DATE: '2022-11-17',
				Swaps: 2259,
				Volume: 26225,
				Fees: 25,
				'Cumulative Swaps': 1137611,
				'Cumulative Volume': 15520802,
				'Cumulative Fees': 14625
			},
			{
				DATE: '2022-11-18',
				Swaps: 3064,
				Volume: 13155,
				Fees: 26,
				'Cumulative Swaps': 1140675,
				'Cumulative Volume': 15533957,
				'Cumulative Fees': 14651
			},
			{
				DATE: '2022-11-19',
				Swaps: 1419,
				Volume: 19307,
				Fees: 14,
				'Cumulative Swaps': 1142094,
				'Cumulative Volume': 15553264,
				'Cumulative Fees': 14665
			},
			{
				DATE: '2022-11-20',
				Swaps: 2040,
				Volume: 22466,
				Fees: 20,
				'Cumulative Swaps': 1144134,
				'Cumulative Volume': 15575730,
				'Cumulative Fees': 14685
			},
			{
				DATE: '2022-11-21',
				Swaps: 2000,
				Volume: 15640,
				Fees: 21,
				'Cumulative Swaps': 1146134,
				'Cumulative Volume': 15591370,
				'Cumulative Fees': 14706
			},
			{
				DATE: '2022-11-22',
				Swaps: 2017,
				Volume: 31274,
				Fees: 20,
				'Cumulative Swaps': 1148151,
				'Cumulative Volume': 15622644,
				'Cumulative Fees': 14726
			},
			{
				DATE: '2022-11-23',
				Swaps: 2516,
				Volume: 29346,
				Fees: 25,
				'Cumulative Swaps': 1150667,
				'Cumulative Volume': 15651990,
				'Cumulative Fees': 14751
			},
			{
				DATE: '2022-11-24',
				Swaps: 2352,
				Volume: 68983,
				Fees: 25,
				'Cumulative Swaps': 1153019,
				'Cumulative Volume': 15720973,
				'Cumulative Fees': 14776
			},
			{
				DATE: '2022-11-25',
				Swaps: 1925,
				Volume: 23056,
				Fees: 25,
				'Cumulative Swaps': 1154944,
				'Cumulative Volume': 15744029,
				'Cumulative Fees': 14801
			},
			{
				DATE: '2022-11-26',
				Swaps: 1918,
				Volume: 30304,
				Fees: 22,
				'Cumulative Swaps': 1156862,
				'Cumulative Volume': 15774333,
				'Cumulative Fees': 14823
			},
			{
				DATE: '2022-11-27',
				Swaps: 2169,
				Volume: 17135,
				Fees: 19,
				'Cumulative Swaps': 1159031,
				'Cumulative Volume': 15791468,
				'Cumulative Fees': 14842
			},
			{
				DATE: '2022-11-28',
				Swaps: 3202,
				Volume: 16278,
				Fees: 27,
				'Cumulative Swaps': 1162233,
				'Cumulative Volume': 15807746,
				'Cumulative Fees': 14869
			},
			{
				DATE: '2022-11-29',
				Swaps: 2556,
				Volume: 27138,
				Fees: 23,
				'Cumulative Swaps': 1164789,
				'Cumulative Volume': 15834884,
				'Cumulative Fees': 14892
			},
			{
				DATE: '2022-11-30',
				Swaps: 4116,
				Volume: 44152,
				Fees: 37,
				'Cumulative Swaps': 1168905,
				'Cumulative Volume': 15879036,
				'Cumulative Fees': 14929
			},
			{
				DATE: '2022-12-01',
				Swaps: 3508,
				Volume: 22904,
				Fees: 32,
				'Cumulative Swaps': 1172413,
				'Cumulative Volume': 15901940,
				'Cumulative Fees': 14961
			},
			{
				DATE: '2022-12-02',
				Swaps: 3766,
				Volume: 8120,
				Fees: 31,
				'Cumulative Swaps': 1176179,
				'Cumulative Volume': 15910060,
				'Cumulative Fees': 14992
			},
			{
				DATE: '2022-12-03',
				Swaps: 2207,
				Volume: 4148,
				Fees: 28,
				'Cumulative Swaps': 1178386,
				'Cumulative Volume': 15914208,
				'Cumulative Fees': 15020
			},
			{
				DATE: '2022-12-04',
				Swaps: 1736,
				Volume: 5627,
				Fees: 21,
				'Cumulative Swaps': 1180122,
				'Cumulative Volume': 15919835,
				'Cumulative Fees': 15041
			},
			{
				DATE: '2022-12-05',
				Swaps: 2374,
				Volume: 11798,
				Fees: 26,
				'Cumulative Swaps': 1182496,
				'Cumulative Volume': 15931633,
				'Cumulative Fees': 15067
			},
			{
				DATE: '2022-12-06',
				Swaps: 1849,
				Volume: 8990,
				Fees: 19,
				'Cumulative Swaps': 1184345,
				'Cumulative Volume': 15940623,
				'Cumulative Fees': 15086
			},
			{
				DATE: '2022-12-07',
				Swaps: 1915,
				Volume: 5786,
				Fees: 17,
				'Cumulative Swaps': 1186260,
				'Cumulative Volume': 15946409,
				'Cumulative Fees': 15103
			},
			{
				DATE: '2022-12-08',
				Swaps: 2027,
				Volume: 26196,
				Fees: 20,
				'Cumulative Swaps': 1188287,
				'Cumulative Volume': 15972605,
				'Cumulative Fees': 15123
			},
			{
				DATE: '2022-12-09',
				Swaps: 3006,
				Volume: 13481,
				Fees: 23,
				'Cumulative Swaps': 1191293,
				'Cumulative Volume': 15986086,
				'Cumulative Fees': 15146
			},
			{
				DATE: '2022-12-10',
				Swaps: 2033,
				Volume: 28576,
				Fees: 21,
				'Cumulative Swaps': 1193326,
				'Cumulative Volume': 16014662,
				'Cumulative Fees': 15167
			},
			{
				DATE: '2022-12-11',
				Swaps: 1645,
				Volume: 13021,
				Fees: 18,
				'Cumulative Swaps': 1194971,
				'Cumulative Volume': 16027683,
				'Cumulative Fees': 15185
			},
			{
				DATE: '2022-12-12',
				Swaps: 3714,
				Volume: 15188,
				Fees: 30,
				'Cumulative Swaps': 1198685,
				'Cumulative Volume': 16042871,
				'Cumulative Fees': 15215
			},
			{
				DATE: '2022-12-13',
				Swaps: 2836,
				Volume: 15127,
				Fees: 35,
				'Cumulative Swaps': 1201521,
				'Cumulative Volume': 16057998,
				'Cumulative Fees': 15250
			},
			{
				DATE: '2022-12-14',
				Swaps: 4139,
				Volume: 11361,
				Fees: 34,
				'Cumulative Swaps': 1205660,
				'Cumulative Volume': 16069359,
				'Cumulative Fees': 15284
			},
			{
				DATE: '2022-12-15',
				Swaps: 2526,
				Volume: 16555,
				Fees: 27,
				'Cumulative Swaps': 1208186,
				'Cumulative Volume': 16085914,
				'Cumulative Fees': 15311
			},
			{
				DATE: '2022-12-16',
				Swaps: 3896,
				Volume: 86611,
				Fees: 40,
				'Cumulative Swaps': 1212082,
				'Cumulative Volume': 16172525,
				'Cumulative Fees': 15351
			},
			{
				DATE: '2022-12-17',
				Swaps: 2423,
				Volume: 17815,
				Fees: 27,
				'Cumulative Swaps': 1214505,
				'Cumulative Volume': 16190340,
				'Cumulative Fees': 15378
			},
			{
				DATE: '2022-12-18',
				Swaps: 1789,
				Volume: 14558,
				Fees: 18,
				'Cumulative Swaps': 1216294,
				'Cumulative Volume': 16204898,
				'Cumulative Fees': 15396
			},
			{
				DATE: '2022-12-19',
				Swaps: 2659,
				Volume: 22893,
				Fees: 29,
				'Cumulative Swaps': 1218953,
				'Cumulative Volume': 16227791,
				'Cumulative Fees': 15425
			},
			{
				DATE: '2022-12-20',
				Swaps: 2181,
				Volume: 11562,
				Fees: 25,
				'Cumulative Swaps': 1221134,
				'Cumulative Volume': 16239353,
				'Cumulative Fees': 15450
			},
			{
				DATE: '2022-12-21',
				Swaps: 2164,
				Volume: 49418,
				Fees: 20,
				'Cumulative Swaps': 1223298,
				'Cumulative Volume': 16288771,
				'Cumulative Fees': 15470
			},
			{
				DATE: '2022-12-22',
				Swaps: 2560,
				Volume: 10606,
				Fees: 23,
				'Cumulative Swaps': 1225858,
				'Cumulative Volume': 16299377,
				'Cumulative Fees': 15493
			},
			{
				DATE: '2022-12-23',
				Swaps: 2244,
				Volume: 17747,
				Fees: 20,
				'Cumulative Swaps': 1228102,
				'Cumulative Volume': 16317124,
				'Cumulative Fees': 15513
			},
			{
				DATE: '2022-12-24',
				Swaps: 1246,
				Volume: 10682,
				Fees: 17,
				'Cumulative Swaps': 1229348,
				'Cumulative Volume': 16327806,
				'Cumulative Fees': 15530
			},
			{
				DATE: '2022-12-25',
				Swaps: 1281,
				Volume: 12427,
				Fees: 15,
				'Cumulative Swaps': 1230629,
				'Cumulative Volume': 16340233,
				'Cumulative Fees': 15545
			},
			{
				DATE: '2022-12-26',
				Swaps: 1447,
				Volume: 8990,
				Fees: 18,
				'Cumulative Swaps': 1232076,
				'Cumulative Volume': 16349223,
				'Cumulative Fees': 15563
			},
			{
				DATE: '2022-12-27',
				Swaps: 1539,
				Volume: 12668,
				Fees: 19,
				'Cumulative Swaps': 1233615,
				'Cumulative Volume': 16361891,
				'Cumulative Fees': 15582
			},
			{
				DATE: '2022-12-28',
				Swaps: 2404,
				Volume: 59095,
				Fees: 28,
				'Cumulative Swaps': 1236019,
				'Cumulative Volume': 16420986,
				'Cumulative Fees': 15610
			},
			{
				DATE: '2022-12-29',
				Swaps: 1879,
				Volume: 29313,
				Fees: 24,
				'Cumulative Swaps': 1237898,
				'Cumulative Volume': 16450299,
				'Cumulative Fees': 15634
			},
			{
				DATE: '2022-12-30',
				Swaps: 2169,
				Volume: 11693,
				Fees: 25,
				'Cumulative Swaps': 1240067,
				'Cumulative Volume': 16461992,
				'Cumulative Fees': 15659
			},
			{
				DATE: '2022-12-31',
				Swaps: 1236,
				Volume: 16706,
				Fees: 16,
				'Cumulative Swaps': 1241303,
				'Cumulative Volume': 16478698,
				'Cumulative Fees': 15675
			},
			{
				DATE: '2023-01-01',
				Swaps: 1055,
				Volume: 4390,
				Fees: 14,
				'Cumulative Swaps': 1242358,
				'Cumulative Volume': 16483088,
				'Cumulative Fees': 15689
			},
			{
				DATE: '2023-01-02',
				Swaps: 1887,
				Volume: 7684,
				Fees: 18,
				'Cumulative Swaps': 1244245,
				'Cumulative Volume': 16490772,
				'Cumulative Fees': 15707
			},
			{
				DATE: '2023-01-03',
				Swaps: 1931,
				Volume: 12908,
				Fees: 23,
				'Cumulative Swaps': 1246176,
				'Cumulative Volume': 16503680,
				'Cumulative Fees': 15730
			},
			{
				DATE: '2023-01-04',
				Swaps: 2043,
				Volume: 42052,
				Fees: 27,
				'Cumulative Swaps': 1248219,
				'Cumulative Volume': 16545732,
				'Cumulative Fees': 15757
			},
			{
				DATE: '2023-01-05',
				Swaps: 1451,
				Volume: 12920,
				Fees: 19,
				'Cumulative Swaps': 1249670,
				'Cumulative Volume': 16558652,
				'Cumulative Fees': 15776
			},
			{
				DATE: '2023-01-06',
				Swaps: 1863,
				Volume: 48294,
				Fees: 20,
				'Cumulative Swaps': 1251533,
				'Cumulative Volume': 16606946,
				'Cumulative Fees': 15796
			},
			{
				DATE: '2023-01-07',
				Swaps: 1196,
				Volume: 11465,
				Fees: 14,
				'Cumulative Swaps': 1252729,
				'Cumulative Volume': 16618411,
				'Cumulative Fees': 15810
			},
			{
				DATE: '2023-01-08',
				Swaps: 1332,
				Volume: 11688,
				Fees: 16,
				'Cumulative Swaps': 1254061,
				'Cumulative Volume': 16630099,
				'Cumulative Fees': 15826
			},
			{
				DATE: '2023-01-09',
				Swaps: 2286,
				Volume: 22080,
				Fees: 31,
				'Cumulative Swaps': 1256347,
				'Cumulative Volume': 16652179,
				'Cumulative Fees': 15857
			},
			{
				DATE: '2023-01-10',
				Swaps: 1911,
				Volume: 27556,
				Fees: 27,
				'Cumulative Swaps': 1258258,
				'Cumulative Volume': 16679735,
				'Cumulative Fees': 15884
			},
			{
				DATE: '2023-01-11',
				Swaps: 3095,
				Volume: 35612,
				Fees: 48,
				'Cumulative Swaps': 1261353,
				'Cumulative Volume': 16715347,
				'Cumulative Fees': 15932
			},
			{
				DATE: '2023-01-12',
				Swaps: 3533,
				Volume: 30389,
				Fees: 51,
				'Cumulative Swaps': 1264886,
				'Cumulative Volume': 16745736,
				'Cumulative Fees': 15983
			},
			{
				DATE: '2023-01-13',
				Swaps: 3069,
				Volume: 17627,
				Fees: 42,
				'Cumulative Swaps': 1267955,
				'Cumulative Volume': 16763363,
				'Cumulative Fees': 16025
			},
			{
				DATE: '2023-01-14',
				Swaps: 4309,
				Volume: 27095,
				Fees: 64,
				'Cumulative Swaps': 1272264,
				'Cumulative Volume': 16790458,
				'Cumulative Fees': 16089
			},
			{
				DATE: '2023-01-15',
				Swaps: 2346,
				Volume: 18270,
				Fees: 32,
				'Cumulative Swaps': 1274610,
				'Cumulative Volume': 16808728,
				'Cumulative Fees': 16121
			},
			{
				DATE: '2023-01-16',
				Swaps: 2813,
				Volume: 18350,
				Fees: 36,
				'Cumulative Swaps': 1277423,
				'Cumulative Volume': 16827078,
				'Cumulative Fees': 16157
			},
			{
				DATE: '2023-01-17',
				Swaps: 2918,
				Volume: 24464,
				Fees: 37,
				'Cumulative Swaps': 1280341,
				'Cumulative Volume': 16851542,
				'Cumulative Fees': 16194
			},
			{
				DATE: '2023-01-18',
				Swaps: 2714,
				Volume: 37190,
				Fees: 41,
				'Cumulative Swaps': 1283055,
				'Cumulative Volume': 16888732,
				'Cumulative Fees': 16235
			},
			{
				DATE: '2023-01-19',
				Swaps: 2167,
				Volume: 33909,
				Fees: 26,
				'Cumulative Swaps': 1285222,
				'Cumulative Volume': 16922641,
				'Cumulative Fees': 16261
			},
			{
				DATE: '2023-01-20',
				Swaps: 2341,
				Volume: 12293,
				Fees: 30,
				'Cumulative Swaps': 1287563,
				'Cumulative Volume': 16934934,
				'Cumulative Fees': 16291
			},
			{
				DATE: '2023-01-21',
				Swaps: 2338,
				Volume: 17065,
				Fees: 30,
				'Cumulative Swaps': 1289901,
				'Cumulative Volume': 16951999,
				'Cumulative Fees': 16321
			},
			{
				DATE: '2023-01-22',
				Swaps: 2290,
				Volume: 21457,
				Fees: 27,
				'Cumulative Swaps': 1292191,
				'Cumulative Volume': 16973456,
				'Cumulative Fees': 16348
			},
			{
				DATE: '2023-01-23',
				Swaps: 2099,
				Volume: 14885,
				Fees: 25,
				'Cumulative Swaps': 1294290,
				'Cumulative Volume': 16988341,
				'Cumulative Fees': 16373
			},
			{
				DATE: '2023-01-24',
				Swaps: 2251,
				Volume: 22314,
				Fees: 32,
				'Cumulative Swaps': 1296541,
				'Cumulative Volume': 17010655,
				'Cumulative Fees': 16405
			},
			{
				DATE: '2023-01-25',
				Swaps: 2241,
				Volume: 53302,
				Fees: 27,
				'Cumulative Swaps': 1298782,
				'Cumulative Volume': 17063957,
				'Cumulative Fees': 16432
			},
			{
				DATE: '2023-01-26',
				Swaps: 2456,
				Volume: 60869,
				Fees: 31,
				'Cumulative Swaps': 1301238,
				'Cumulative Volume': 17124826,
				'Cumulative Fees': 16463
			},
			{
				DATE: '2023-01-27',
				Swaps: 2872,
				Volume: 38360,
				Fees: 39,
				'Cumulative Swaps': 1304110,
				'Cumulative Volume': 17163186,
				'Cumulative Fees': 16502
			},
			{
				DATE: '2023-01-28',
				Swaps: 3060,
				Volume: 134682,
				Fees: 36,
				'Cumulative Swaps': 1307170,
				'Cumulative Volume': 17297868,
				'Cumulative Fees': 16538
			},
			{
				DATE: '2023-01-29',
				Swaps: 2397,
				Volume: 81759,
				Fees: 30,
				'Cumulative Swaps': 1309567,
				'Cumulative Volume': 17379627,
				'Cumulative Fees': 16568
			},
			{
				DATE: '2023-01-30',
				Swaps: 3931,
				Volume: 31907,
				Fees: 42,
				'Cumulative Swaps': 1313498,
				'Cumulative Volume': 17411534,
				'Cumulative Fees': 16610
			},
			{
				DATE: '2023-01-31',
				Swaps: 2090,
				Volume: 83929,
				Fees: 23,
				'Cumulative Swaps': 1315588,
				'Cumulative Volume': 17495463,
				'Cumulative Fees': 16633
			},
			{
				DATE: '2023-02-01',
				Swaps: 2979,
				Volume: 67433,
				Fees: 36,
				'Cumulative Swaps': 1318567,
				'Cumulative Volume': 17562896,
				'Cumulative Fees': 16669
			},
			{
				DATE: '2023-02-02',
				Swaps: 3544,
				Volume: 47527,
				Fees: 48,
				'Cumulative Swaps': 1322111,
				'Cumulative Volume': 17610423,
				'Cumulative Fees': 16717
			},
			{
				DATE: '2023-02-03',
				Swaps: 2751,
				Volume: 166423,
				Fees: 29,
				'Cumulative Swaps': 1324862,
				'Cumulative Volume': 17776846,
				'Cumulative Fees': 16746
			},
			{
				DATE: '2023-02-04',
				Swaps: 2057,
				Volume: 28879,
				Fees: 21,
				'Cumulative Swaps': 1326919,
				'Cumulative Volume': 17805725,
				'Cumulative Fees': 16767
			},
			{
				DATE: '2023-02-05',
				Swaps: 2406,
				Volume: 45402,
				Fees: 26,
				'Cumulative Swaps': 1329325,
				'Cumulative Volume': 17851127,
				'Cumulative Fees': 16793
			},
			{
				DATE: '2023-02-06',
				Swaps: 3954,
				Volume: 164760,
				Fees: 44,
				'Cumulative Swaps': 1333279,
				'Cumulative Volume': 18015887,
				'Cumulative Fees': 16837
			},
			{
				DATE: '2023-02-07',
				Swaps: 2811,
				Volume: 17337,
				Fees: 31,
				'Cumulative Swaps': 1336090,
				'Cumulative Volume': 18033224,
				'Cumulative Fees': 16868
			},
			{
				DATE: '2023-02-08',
				Swaps: 2804,
				Volume: 34937,
				Fees: 31,
				'Cumulative Swaps': 1338894,
				'Cumulative Volume': 18068161,
				'Cumulative Fees': 16899
			},
			{
				DATE: '2023-02-09',
				Swaps: 3239,
				Volume: 74410,
				Fees: 42,
				'Cumulative Swaps': 1342133,
				'Cumulative Volume': 18142571,
				'Cumulative Fees': 16941
			},
			{
				DATE: '2023-02-10',
				Swaps: 2417,
				Volume: 11842,
				Fees: 25,
				'Cumulative Swaps': 1344550,
				'Cumulative Volume': 18154413,
				'Cumulative Fees': 16966
			},
			{
				DATE: '2023-02-11',
				Swaps: 1652,
				Volume: 13603,
				Fees: 18,
				'Cumulative Swaps': 1346202,
				'Cumulative Volume': 18168016,
				'Cumulative Fees': 16984
			},
			{
				DATE: '2023-02-12',
				Swaps: 2027,
				Volume: 18076,
				Fees: 25,
				'Cumulative Swaps': 1348229,
				'Cumulative Volume': 18186092,
				'Cumulative Fees': 17009
			},
			{
				DATE: '2023-02-13',
				Swaps: 2655,
				Volume: 124921,
				Fees: 37,
				'Cumulative Swaps': 1350884,
				'Cumulative Volume': 18311013,
				'Cumulative Fees': 17046
			},
			{
				DATE: '2023-02-14',
				Swaps: 2048,
				Volume: 186350,
				Fees: 30,
				'Cumulative Swaps': 1352932,
				'Cumulative Volume': 18497363,
				'Cumulative Fees': 17076
			},
			{
				DATE: '2023-02-15',
				Swaps: 2645,
				Volume: 74028,
				Fees: 44,
				'Cumulative Swaps': 1355577,
				'Cumulative Volume': 18571391,
				'Cumulative Fees': 17120
			},
			{
				DATE: '2023-02-16',
				Swaps: 4020,
				Volume: 45018,
				Fees: 68,
				'Cumulative Swaps': 1359597,
				'Cumulative Volume': 18616409,
				'Cumulative Fees': 17188
			},
			{
				DATE: '2023-02-17',
				Swaps: 3269,
				Volume: 39483,
				Fees: 45,
				'Cumulative Swaps': 1362866,
				'Cumulative Volume': 18655892,
				'Cumulative Fees': 17233
			},
			{
				DATE: '2023-02-18',
				Swaps: 2614,
				Volume: 13053,
				Fees: 30,
				'Cumulative Swaps': 1365480,
				'Cumulative Volume': 18668945,
				'Cumulative Fees': 17263
			},
			{
				DATE: '2023-02-19',
				Swaps: 2945,
				Volume: 14885,
				Fees: 40,
				'Cumulative Swaps': 1368425,
				'Cumulative Volume': 18683830,
				'Cumulative Fees': 17303
			},
			{
				DATE: '2023-02-20',
				Swaps: 3598,
				Volume: 22780,
				Fees: 48,
				'Cumulative Swaps': 1372023,
				'Cumulative Volume': 18706610,
				'Cumulative Fees': 17351
			},
			{
				DATE: '2023-02-21',
				Swaps: 3526,
				Volume: 21278,
				Fees: 46,
				'Cumulative Swaps': 1375549,
				'Cumulative Volume': 18727888,
				'Cumulative Fees': 17397
			},
			{
				DATE: '2023-02-22',
				Swaps: 3612,
				Volume: 32420,
				Fees: 39,
				'Cumulative Swaps': 1379161,
				'Cumulative Volume': 18760308,
				'Cumulative Fees': 17436
			},
			{
				DATE: '2023-02-23',
				Swaps: 2513,
				Volume: 32195,
				Fees: 33,
				'Cumulative Swaps': 1381674,
				'Cumulative Volume': 18792503,
				'Cumulative Fees': 17469
			},
			{
				DATE: '2023-02-24',
				Swaps: 2933,
				Volume: 86226,
				Fees: 45,
				'Cumulative Swaps': 1384607,
				'Cumulative Volume': 18878729,
				'Cumulative Fees': 17514
			},
			{
				DATE: '2023-02-25',
				Swaps: 2217,
				Volume: 20672,
				Fees: 26,
				'Cumulative Swaps': 1386824,
				'Cumulative Volume': 18899401,
				'Cumulative Fees': 17540
			},
			{
				DATE: '2023-02-26',
				Swaps: 1840,
				Volume: 14874,
				Fees: 18,
				'Cumulative Swaps': 1388664,
				'Cumulative Volume': 18914275,
				'Cumulative Fees': 17558
			},
			{
				DATE: '2023-02-27',
				Swaps: 2214,
				Volume: 20880,
				Fees: 28,
				'Cumulative Swaps': 1390878,
				'Cumulative Volume': 18935155,
				'Cumulative Fees': 17586
			},
			{
				DATE: '2023-02-28',
				Swaps: 2236,
				Volume: 197897,
				Fees: 30,
				'Cumulative Swaps': 1393114,
				'Cumulative Volume': 19133052,
				'Cumulative Fees': 17616
			},
			{
				DATE: '2023-03-01',
				Swaps: 2397,
				Volume: 32736,
				Fees: 29,
				'Cumulative Swaps': 1395511,
				'Cumulative Volume': 19165788,
				'Cumulative Fees': 17645
			},
			{
				DATE: '2023-03-02',
				Swaps: 1936,
				Volume: 46456,
				Fees: 23,
				'Cumulative Swaps': 1397447,
				'Cumulative Volume': 19212244,
				'Cumulative Fees': 17668
			},
			{
				DATE: '2023-03-03',
				Swaps: 2279,
				Volume: 386070,
				Fees: 46,
				'Cumulative Swaps': 1399726,
				'Cumulative Volume': 19598314,
				'Cumulative Fees': 17714
			},
			{
				DATE: '2023-03-04',
				Swaps: 1589,
				Volume: 26061,
				Fees: 21,
				'Cumulative Swaps': 1401315,
				'Cumulative Volume': 19624375,
				'Cumulative Fees': 17735
			},
			{
				DATE: '2023-03-05',
				Swaps: 1640,
				Volume: 25900,
				Fees: 18,
				'Cumulative Swaps': 1402955,
				'Cumulative Volume': 19650275,
				'Cumulative Fees': 17753
			},
			{
				DATE: '2023-03-06',
				Swaps: 1867,
				Volume: 30639,
				Fees: 21,
				'Cumulative Swaps': 1404822,
				'Cumulative Volume': 19680914,
				'Cumulative Fees': 17774
			},
			{
				DATE: '2023-03-07',
				Swaps: 2083,
				Volume: 19987,
				Fees: 23,
				'Cumulative Swaps': 1406905,
				'Cumulative Volume': 19700901,
				'Cumulative Fees': 17797
			},
			{
				DATE: '2023-03-08',
				Swaps: 2101,
				Volume: 114241,
				Fees: 24,
				'Cumulative Swaps': 1409006,
				'Cumulative Volume': 19815142,
				'Cumulative Fees': 17821
			},
			{
				DATE: '2023-03-09',
				Swaps: 2691,
				Volume: 27036,
				Fees: 36,
				'Cumulative Swaps': 1411697,
				'Cumulative Volume': 19842178,
				'Cumulative Fees': 17857
			},
			{
				DATE: '2023-03-10',
				Swaps: 3283,
				Volume: 28154,
				Fees: 57,
				'Cumulative Swaps': 1414980,
				'Cumulative Volume': 19870332,
				'Cumulative Fees': 17914
			},
			{
				DATE: '2023-03-11',
				Swaps: 4184,
				Volume: 64423,
				Fees: 77,
				'Cumulative Swaps': 1419164,
				'Cumulative Volume': 19934755,
				'Cumulative Fees': 17991
			},
			{
				DATE: '2023-03-12',
				Swaps: 1818,
				Volume: 12115,
				Fees: 28,
				'Cumulative Swaps': 1420982,
				'Cumulative Volume': 19946870,
				'Cumulative Fees': 18019
			},
			{
				DATE: '2023-03-13',
				Swaps: 2718,
				Volume: 18519,
				Fees: 31,
				'Cumulative Swaps': 1423700,
				'Cumulative Volume': 19965389,
				'Cumulative Fees': 18050
			},
			{
				DATE: '2023-03-14',
				Swaps: 2447,
				Volume: 29176,
				Fees: 28,
				'Cumulative Swaps': 1426147,
				'Cumulative Volume': 19994565,
				'Cumulative Fees': 18078
			},
			{
				DATE: '2023-03-15',
				Swaps: 515,
				Volume: 3912,
				Fees: 6,
				'Cumulative Swaps': 1426662,
				'Cumulative Volume': 19998477,
				'Cumulative Fees': 18084
			}
		],
		SWAP_INFLOWS: [
			{ Token: 'WAVAX', Swaps: 7590 },
			{ Token: 'MIM', Swaps: 7564 },
			{ Token: 'wMEMO', Swaps: 3448 },
			{ Token: 'USDC.e', Swaps: 3386 },
			{ Token: 'USDC', Swaps: 1714 },
			{ Token: 'USDT.e', Swaps: 589 },
			{ Token: 'WETH.e', Swaps: 523 },
			{ Token: 'TIC', Swaps: 406 },
			{ Token: 'DAI.e', Swaps: 390 },
			{ Token: 'Other', Swaps: 1505 }
		],
		SWAP_OUTFLOWS: [
			{ Token: 'WAVAX', Swaps: 8197 },
			{ Token: 'MIM', Swaps: 6958 },
			{ Token: 'wMEMO', Swaps: 3245 },
			{ Token: 'USDC.e', Swaps: 3242 },
			{ Token: 'USDC', Swaps: 1281 },
			{ Token: 'BSGG', Swaps: 1014 },
			{ Token: 'WETH.e', Swaps: 557 },
			{ Token: 'USDT.e', Swaps: 545 },
			{ Token: 'MEMO', Swaps: 390 },
			{ Token: 'Other', Swaps: 1686 }
		],
		CONTRACTS_ACTIONS: [
			{ CONTRACT_NAME: 'Wrapped AVAX', Actions: 3801049 },
			{ CONTRACT_NAME: 'JoeToken', Actions: 1639841 },
			{ CONTRACT_NAME: 'USD//C', Actions: 1128020 },
			{ CONTRACT_NAME: 'USD Coin', Actions: 1080569 },
			{ CONTRACT_NAME: 'Liquidity Book Token', Actions: 900553 },
			{ CONTRACT_NAME: 'chikn egg', Actions: 781361 },
			{ CONTRACT_NAME: 'Treasure Under Sea', Actions: 757977 },
			{ CONTRACT_NAME: 'chikn fert', Actions: 663687 },
			{ CONTRACT_NAME: 'Other', Actions: 28597626 }

		],
		CONTRACTS_USERS: [
			{ CONTRACT_NAME: 'Bitcoin', Users: 20647 },
			{ CONTRACT_NAME: 'Wrapped AVAX', Users: 17908 },
			{ CONTRACT_NAME: 'USD//C', Users: 15048 },
			{ CONTRACT_NAME: 'USD Coin', Users: 9390 },
			{ CONTRACT_NAME: 'Joe LP Token', Users: 8830 },
			{ CONTRACT_NAME: 'Tether USD', Users: 7485 },
			{ CONTRACT_NAME: 'Liquidity Book Token', Users: 7419 },
			{ CONTRACT_NAME: 'Other', Users: 911834 }

		]
	};
}) satisfies PageLoad;
