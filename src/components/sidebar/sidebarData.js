import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as RiIcons from 'react-icons/ri';
import * as GoIcons from 'react-icons/go';
import * as GiIcons from 'react-icons/gi';

export const SidebarData = [
	{
		title : 'About',
		icon  : <AiIcons.AiFillHome />,
		cName : 'nav-text',
	},
	{
		title : 'Education',
		icon  : <GiIcons.GiBookshelf />,
		cName : 'nav-text',
	},
	{
		title : 'Skills',
		icon  : <RiIcons.RiKnifeFill />,
		cName : 'nav-text',
	},
	{
		title : 'Resume',
		icon  : <FaIcons.FaPaperclip />,
		cName : 'nav-text',
	},
	{
		title : 'Contact me',
		icon  : <GoIcons.GoPerson />,
		cName : 'nav-text',
	},
];
