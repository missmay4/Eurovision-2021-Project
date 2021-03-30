-- Countries Insert 
insert into country (code, name) values 
	('AL', 'Albania'),
	('AM', 'Armenia'),
	('DE', 'Alemania'),
	('AU', 'Australia'),
	('AT', 'Austria'),
	('AZ', 'Azerbaiyán'),
	('BE', 'Bélgica'),
	('BY', 'Bielorrusia'),
	('BA', 'Bosnia y Herzegovina')
	('BG', 'Bulgaria'),
	('CY', 'Chipre'),
	('HR', 'Croacia'),
	('DK', 'Dinamarca'),
	('SI', 'Eslovenia'),
	('ES', 'España'),
	('EE', 'Estonia'),
	('FI', 'Finlandia'),
	('FR', 'Francia'),
	('GE', 'Georgia'),
	('GR', 'Grecia'),
	('HU', 'Hungría'),
	('IE', 'Irlanda'),
	('IS', 'Islandia'),
	('IL', 'Israel'),
	('IT', 'Italia'),
	('LV', 'Letonia'),
	('LT', 'Lituania'),
	('LU', 'Luxemburgo'),
	('MK', 'Macedonia del Norte'),
	('MT', 'Malta'),
	('MD', 'Moldavia'),
	('ME', 'Montenegro'),
	('NO', 'Noruega'),
	('NL', 'Países Bajos'),
	('PL', 'Polonia'),
	('PT', 'Portugal'),
	('GB', 'Reino Unido')
	('CZ', 'República Checa'),
	('RO', 'Rumania'),
	('RU', 'Rusia'),
	('SM', 'San Marino'),
	('RS', 'Serbia'),
	('SE', 'Suecia'),
	('CH', 'Suiza'),
	('UA', 'Ucrania')

-- Participants Insert 

insert into participant (country_id, name, song, year, song_link, language) values
	((select id from country where name = 'Albania'), 'Anxhela Peristeri', 'Karma', 2021, 'https://youtu.be/Q4D_RfEFwd4', 'Albanés'),
	((select id from country where name = 'Alemania'), 'Jendrik Sigwart', "I Don't Feel Hate", 2021, 'https://youtu.be/ydgxZnHFLi4', 'Inglés y Alemán'),
	((select id from country where name = 'Australia'), 'Montaigne', 'Technicolour', 2021, 'https://youtu.be/ghT5QderxCA', 'Inglés'),
	((select id from country where name = 'Austria'), 'Vicent Bueno', 'Amen', 2021, 'https://youtu.be/1sY76L68rfs', 'Inglés'),
	((select id from country where name = 'Azerbaiyán'), 'Efendi', 'Mata Hari', 2021, 'https://youtu.be/HSiZmR1c7Q4', 'Inglés y Azerí'),
	((select id from country where name = 'Bélgica'), 'Hooverphonic', 'The Wrong Place', 2021, 'https://youtu.be/0EQyG1Yjlgw', 'Inglés'),
	((select id from country where name = 'Bulgaria'), 'Victoria Georgieva', 'Growing Up is Getting Old', 2021, 'https://youtu.be/qMNxCzuEdVM', 'Inglés'),
	((select id from country where name = 'Chipre'), 'Elena Tsagrinou', 'El Diablo', 2021, 'https://youtu.be/mk4amZlPa4g', 'Inglés y Español'),
	((select id from country where name = 'Croacia'), 'Albina', 'Tick-tock', 2021, 'https://youtu.be/IHS_2GpNwmA', 'Inglés y Croata'),
	((select id from country where name = 'Dinamarca'), 'Fyr og Flamme', 'Øve os på hinanden', 2021, 'https://youtu.be/axzrdVUdQzQ', 'Danés'),
	((select id from country where name = 'Eslovenia'), 'Ana Soklič', 'Amen', 2021, 'https://youtu.be/p5LW-09r2JQ', 'Esloveno'),
	((select id from country where name = 'España'), 'Blas Cantó', 'Voy a quedarme', 2021, 'https://youtu.be/qb5FXBwSx44', 'Español'),
	((select id from country where name = 'Estonia'), 'Uku Suviste', 'The Lucky One', 2021, 'https://youtu.be/QC06nyML2xg', 'Inglés'),
	((select id from country where name = 'Finlandia'), 'Blind Channel', 'Dark Side', 2021, 'https://youtu.be/cIvaeu6Oxzc', 'Inglés'),
	((select id from country where name = 'Francia'), 'Barbara Pravi', 'Voilá', 2021, 'https://youtu.be/-9t_SwPN31s', 'Francés'),
	((select id from country where name = 'Georgia'), 'Tornike Kipiani', 'You', 2021, 'https://youtu.be/lNmBXsj7VcE', 'Inglés'),
	((select id from country where name = 'Grecia'), 'Stefania Liberakakis', 'Last Dance', 2021, 'https://youtu.be/Er06NBWo4bs', 'Inglés'),
	((select id from country where name = 'Irlanda'), 'Lesley Roy', 'Maps', 2021, 'https://youtu.be/z6ZUBzqPxds', 'Inglés'),
	((select id from country where name = 'Islandia'), 'Daði & Gagnamagnið', '10 Years', 2021, 'https://youtu.be/ORDK1XQToAY', 'Inglés'),
	((select id from country where name = 'Israel'), 'Eden Alene', 'Set Me Free', 2021, 'https://youtu.be/9nss3FsrgJo', 'Inglés y Hebreo'),
	((select id from country where name = 'Italia'), 'Måneskin', 'Zitti e buoni', 2021, 'https://youtu.be/9mL6Cmkg2_A', 'Italiano'),
	((select id from country where name = 'Letonia'), 'Samanta Tīna', 'The Moon is Rising', 2021, 'https://youtu.be/NBaCWHSyDzo', 'Inglés'),
	((select id from country where name = 'Lituania'), 'The Roop', 'Discoteque', 2021, 'https://youtu.be/0rsUJWSwb0c', 'Inglés'),
	((select id from country where name = 'Macedonia del Norte'), 'Vasil Garvanliev', 'Here I Stand', 2021, 'https://youtu.be/nd4YfjVWrro', 'Inglés'),
	((select id from country where name = 'Malta'), 'Destiny', 'Je Me Casse', 2021, 'https://youtu.be/PQKiHr5qEfA', 'Inglés y Francés'),
	((select id from country where name = 'Moldavia'), 'Natalia Gordienco', 'Sugar', 2021, 'https://youtu.be/1zvnsvxA3to', 'Inglés'),
	((select id from country where name = 'Noruega'), 'Tix', 'Fallen Angel', 2021, 'https://youtu.be/bp2kfhuv8ZU', 'Inglés'),
	((select id from country where name = 'Países Bajos'), 'Jeangu Macrooy', 'Birth of a New Age', 2021, 'https://youtu.be/p4Fag4yajxk', 'Inglés y sranan tongo'),
	((select id from country where name = 'Polonia'), 'RAFAŁ', 'The Ride', 2021, 'https://youtu.be/xsWwLWaZBq8', 'Inglés'),
	((select id from country where name = 'Portugal'), 'The Black Mamba', 'Love is on my Side', 2021, 'https://youtu.be/2hAlp3Khsnk', 'Ingles'),
	((select id from country where name = 'Reino Unido'), 'James Newman', 'Embers', 2021, 'https://youtu.be/BMDGTsa_Qq0', 'Inglés'),
	((select id from country where name = 'República Checa'), 'Benny Cristo', 'Omaga', 2021, 'https://youtu.be/Kxa3ZtxIdxQ', 'Inglés y Checo'),
	((select id from country where name = 'Rumania'), 'Roxen', 'Amnesia', 2021, 'https://youtu.be/TkRAWrDdNwg', 'Inglés'),
	((select id from country where name = 'Rusia'), 'Manizha', 'Russian Woman', 2021, 'https://youtu.be/l01wa2ChX64', 'Ruso e Ingles'),
	((select id from country where name = 'San Marino'), 'Senhit', 'Adrenalina', 2021, 'https://youtu.be/eRAN7AzEKak', 'Inglés e Italiano'),	
	((select id from country where name = 'Serbia'), 'Hurricane', 'Loco Loco', 2021, 'https://youtu.be/FSTMz-_kbVQ', 'Serbio, Español e Inglés'),
	((select id from country where name = 'Suecia'), 'Tusse', 'Voices', 2021, 'https://youtu.be/5P1ueI9j6gk', 'Inglés'),
	((select id from country where name = 'Suiza'), 'Gjons Tears', "Tout l'Univers", 2021, 'https://youtu.be/bpM6o6UiBIw', 'Francés'),
	((select id from country where name = 'Ucrania'), 'Go_A', 'Shum', 2021, 'https://youtu.be/U7-dxzp6Jvs', 'Ucraniano')

-- Gala Insert
insert into gala (type, date) values
	('Semifinal', '2021-05-18'),
	('Semifinal', '2021-05-20'),
	('Final', '2021-05-22')
	
-- galaParticipant Insert 
-- 1st Semifinal 18/5/2021
insert into galaparticipant (gala_id, participant_id, performanceorder) values	
	(1, 25, 1), -- Lithuania
	(1, 13, 2), -- Slovenia
	(1, 36, 3), -- Russia
	(1, 39, 4), -- Sweden
	(1, 4, 5), -- Australia
	(1, 26, 6), -- Macedonia
	(1, 20, 7), -- Ireland
	(1, 10, 8), -- Cyprus
	(1, 29, 9), -- Norway
	(1, 11, 10), -- Croatia
	(1, 7, 11) -- Belgium
	(1, 22, 12), -- Israel
	(1, 35, 13), -- Romania
	(1, 6, 14), -- Azerbaijan
	(1, 41, 15), -- Ukraine
	(1, 27, 16), -- Malta

-- 2nd Semifinal 20/5/2021
insert into galaparticipant (gala_id, participant_id, performanceorder) values	
	(2, 37, 1), -- San Marino 
	(2, 15, 2), -- Estonia
	(2, 34, 3), -- Checz Republic
	(2, 19, 4), -- Greece
	(2, 5, 5), -- Austria
	(2, 31, 6), -- Poland
	(2, 28, 7), -- Moldova
	(2, 21, 8), -- Iceland
	(2, 38, 9), -- Serbia
	(2, 18, 10), -- Georgia
	(2, 1, 11) -- Albania
	(2, 32, 12), -- Portugal
	(2, 9, 13), -- Bulgaria
	(2, 16, 14), -- Finland
	(2, 24, 15), -- Latvia
	(2, 40, 16), -- Switzerland
	(2, 12, 17) -- Denmark

-- Final
insert into galaparticipant (gala_id, participant_id, performanceorder) values
	(3, 17, ), -- France
	(3, 14, ), -- Spain
	(3, 30, 23), -- Netherlands
	(3, 2, ), -- Germany
	(3, 23, ), -- Italy
	(3, 33, ) -- United Kingdom
	
insert into galaparticipant (gala_id, participant_id, performanceorder) values -- 'ganadores' 1st semifinal

	
insert into galaparticipant (gala_id, participant_id, performanceorder) values -- 'ganadores' 2st semifinal 
