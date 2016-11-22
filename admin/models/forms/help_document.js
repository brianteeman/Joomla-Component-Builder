/*--------------------------------------------------------------------------------------------------------|  www.vdm.io  |------/
    __      __       _     _____                 _                                  _     __  __      _   _               _
    \ \    / /      | |   |  __ \               | |                                | |   |  \/  |    | | | |             | |
     \ \  / /_ _ ___| |_  | |  | | _____   _____| | ___  _ __  _ __ ___   ___ _ __ | |_  | \  / | ___| |_| |__   ___   __| |
      \ \/ / _` / __| __| | |  | |/ _ \ \ / / _ \ |/ _ \| '_ \| '_ ` _ \ / _ \ '_ \| __| | |\/| |/ _ \ __| '_ \ / _ \ / _` |
       \  / (_| \__ \ |_  | |__| |  __/\ V /  __/ | (_) | |_) | | | | | |  __/ | | | |_  | |  | |  __/ |_| | | | (_) | (_| |
        \/ \__,_|___/\__| |_____/ \___| \_/ \___|_|\___/| .__/|_| |_| |_|\___|_| |_|\__| |_|  |_|\___|\__|_| |_|\___/ \__,_|
                                                        | |                                                                 
                                                        |_| 				
/-------------------------------------------------------------------------------------------------------------------------------/

	@version		2.2.3
	@build			22nd November, 2016
	@created		30th April, 2015
	@package		Component Builder
	@subpackage		help_document.js
	@author			Llewellyn van der Merwe <https://www.vdm.io/joomla-component-builder>	
	@copyright		Copyright (C) 2015. All Rights Reserved
	@license		GNU/GPL Version 2 or later - http://www.gnu.org/licenses/gpl-2.0.html 
	
	Builds Complex Joomla Components 
                                                             
/-----------------------------------------------------------------------------------------------------------------------------*/

// Some Global Values
jform_vvvvvzvvzm_required = false;
jform_vvvvvzwvzn_required = false;
jform_vvvvvzxvzo_required = false;
jform_vvvvvzyvzp_required = false;
jform_vvvvvzzvzq_required = false;
jform_vvvvwaavzr_required = false;

// Initial Script
jQuery(document).ready(function()
{
	var location_vvvvvzv = jQuery("#jform_location input[type='radio']:checked").val();
	vvvvvzv(location_vvvvvzv);

	var location_vvvvvzw = jQuery("#jform_location input[type='radio']:checked").val();
	vvvvvzw(location_vvvvvzw);

	var type_vvvvvzx = jQuery("#jform_type").val();
	vvvvvzx(type_vvvvvzx);

	var type_vvvvvzy = jQuery("#jform_type").val();
	vvvvvzy(type_vvvvvzy);

	var type_vvvvvzz = jQuery("#jform_type").val();
	vvvvvzz(type_vvvvvzz);

	var target_vvvvwaa = jQuery("#jform_target input[type='radio']:checked").val();
	vvvvwaa(target_vvvvwaa);
});

// the vvvvvzv function
function vvvvvzv(location_vvvvvzv)
{
	// set the function logic
	if (location_vvvvvzv == 1)
	{
		jQuery('#jform_admin_view').closest('.control-group').show();
		if (jform_vvvvvzvvzm_required)
		{
			updateFieldRequired('admin_view',0);
			jQuery('#jform_admin_view').prop('required','required');
			jQuery('#jform_admin_view').attr('aria-required',true);
			jQuery('#jform_admin_view').addClass('required');
			jform_vvvvvzvvzm_required = false;
		}

	}
	else
	{
		jQuery('#jform_admin_view').closest('.control-group').hide();
		if (!jform_vvvvvzvvzm_required)
		{
			updateFieldRequired('admin_view',1);
			jQuery('#jform_admin_view').removeAttr('required');
			jQuery('#jform_admin_view').removeAttr('aria-required');
			jQuery('#jform_admin_view').removeClass('required');
			jform_vvvvvzvvzm_required = true;
		}
	}
}

// the vvvvvzw function
function vvvvvzw(location_vvvvvzw)
{
	// set the function logic
	if (location_vvvvvzw == 2)
	{
		jQuery('#jform_site_view').closest('.control-group').show();
		if (jform_vvvvvzwvzn_required)
		{
			updateFieldRequired('site_view',0);
			jQuery('#jform_site_view').prop('required','required');
			jQuery('#jform_site_view').attr('aria-required',true);
			jQuery('#jform_site_view').addClass('required');
			jform_vvvvvzwvzn_required = false;
		}

	}
	else
	{
		jQuery('#jform_site_view').closest('.control-group').hide();
		if (!jform_vvvvvzwvzn_required)
		{
			updateFieldRequired('site_view',1);
			jQuery('#jform_site_view').removeAttr('required');
			jQuery('#jform_site_view').removeAttr('aria-required');
			jQuery('#jform_site_view').removeClass('required');
			jform_vvvvvzwvzn_required = true;
		}
	}
}

// the vvvvvzx function
function vvvvvzx(type_vvvvvzx)
{
	if (isSet(type_vvvvvzx) && type_vvvvvzx.constructor !== Array)
	{
		var temp_vvvvvzx = type_vvvvvzx;
		var type_vvvvvzx = [];
		type_vvvvvzx.push(temp_vvvvvzx);
	}
	else if (!isSet(type_vvvvvzx))
	{
		var type_vvvvvzx = [];
	}
	var type = type_vvvvvzx.some(type_vvvvvzx_SomeFunc);


	// set this function logic
	if (type)
	{
		jQuery('#jform_url').closest('.control-group').show();
		if (jform_vvvvvzxvzo_required)
		{
			updateFieldRequired('url',0);
			jQuery('#jform_url').prop('required','required');
			jQuery('#jform_url').attr('aria-required',true);
			jQuery('#jform_url').addClass('required');
			jform_vvvvvzxvzo_required = false;
		}

	}
	else
	{
		jQuery('#jform_url').closest('.control-group').hide();
		if (!jform_vvvvvzxvzo_required)
		{
			updateFieldRequired('url',1);
			jQuery('#jform_url').removeAttr('required');
			jQuery('#jform_url').removeAttr('aria-required');
			jQuery('#jform_url').removeClass('required');
			jform_vvvvvzxvzo_required = true;
		}
	}
}

// the vvvvvzx Some function
function type_vvvvvzx_SomeFunc(type_vvvvvzx)
{
	// set the function logic
	if (type_vvvvvzx == 3)
	{
		return true;
	}
	return false;
}

// the vvvvvzy function
function vvvvvzy(type_vvvvvzy)
{
	if (isSet(type_vvvvvzy) && type_vvvvvzy.constructor !== Array)
	{
		var temp_vvvvvzy = type_vvvvvzy;
		var type_vvvvvzy = [];
		type_vvvvvzy.push(temp_vvvvvzy);
	}
	else if (!isSet(type_vvvvvzy))
	{
		var type_vvvvvzy = [];
	}
	var type = type_vvvvvzy.some(type_vvvvvzy_SomeFunc);


	// set this function logic
	if (type)
	{
		jQuery('#jform_article').closest('.control-group').show();
		if (jform_vvvvvzyvzp_required)
		{
			updateFieldRequired('article',0);
			jQuery('#jform_article').prop('required','required');
			jQuery('#jform_article').attr('aria-required',true);
			jQuery('#jform_article').addClass('required');
			jform_vvvvvzyvzp_required = false;
		}

	}
	else
	{
		jQuery('#jform_article').closest('.control-group').hide();
		if (!jform_vvvvvzyvzp_required)
		{
			updateFieldRequired('article',1);
			jQuery('#jform_article').removeAttr('required');
			jQuery('#jform_article').removeAttr('aria-required');
			jQuery('#jform_article').removeClass('required');
			jform_vvvvvzyvzp_required = true;
		}
	}
}

// the vvvvvzy Some function
function type_vvvvvzy_SomeFunc(type_vvvvvzy)
{
	// set the function logic
	if (type_vvvvvzy == 1)
	{
		return true;
	}
	return false;
}

// the vvvvvzz function
function vvvvvzz(type_vvvvvzz)
{
	if (isSet(type_vvvvvzz) && type_vvvvvzz.constructor !== Array)
	{
		var temp_vvvvvzz = type_vvvvvzz;
		var type_vvvvvzz = [];
		type_vvvvvzz.push(temp_vvvvvzz);
	}
	else if (!isSet(type_vvvvvzz))
	{
		var type_vvvvvzz = [];
	}
	var type = type_vvvvvzz.some(type_vvvvvzz_SomeFunc);


	// set this function logic
	if (type)
	{
		jQuery('#jform_content-lbl').closest('.control-group').show();
		if (jform_vvvvvzzvzq_required)
		{
			updateFieldRequired('content',0);
			jQuery('#jform_content').prop('required','required');
			jQuery('#jform_content').attr('aria-required',true);
			jQuery('#jform_content').addClass('required');
			jform_vvvvvzzvzq_required = false;
		}

	}
	else
	{
		jQuery('#jform_content-lbl').closest('.control-group').hide();
		if (!jform_vvvvvzzvzq_required)
		{
			updateFieldRequired('content',1);
			jQuery('#jform_content').removeAttr('required');
			jQuery('#jform_content').removeAttr('aria-required');
			jQuery('#jform_content').removeClass('required');
			jform_vvvvvzzvzq_required = true;
		}
	}
}

// the vvvvvzz Some function
function type_vvvvvzz_SomeFunc(type_vvvvvzz)
{
	// set the function logic
	if (type_vvvvvzz == 2)
	{
		return true;
	}
	return false;
}

// the vvvvwaa function
function vvvvwaa(target_vvvvwaa)
{
	// set the function logic
	if (target_vvvvwaa == 1)
	{
		jQuery('#jform_groups').closest('.control-group').show();
		if (jform_vvvvwaavzr_required)
		{
			updateFieldRequired('groups',0);
			jQuery('#jform_groups').prop('required','required');
			jQuery('#jform_groups').attr('aria-required',true);
			jQuery('#jform_groups').addClass('required');
			jform_vvvvwaavzr_required = false;
		}

	}
	else
	{
		jQuery('#jform_groups').closest('.control-group').hide();
		if (!jform_vvvvwaavzr_required)
		{
			updateFieldRequired('groups',1);
			jQuery('#jform_groups').removeAttr('required');
			jQuery('#jform_groups').removeAttr('aria-required');
			jQuery('#jform_groups').removeClass('required');
			jform_vvvvwaavzr_required = true;
		}
	}
}

// update required fields
function updateFieldRequired(name,status)
{
	var not_required = jQuery('#jform_not_required').val();

	if(status == 1)
	{
		if (isSet(not_required) && not_required != 0)
		{
			not_required = not_required+','+name;
		}
		else
		{
			not_required = ','+name;
		}
	}
	else
	{
		if (isSet(not_required) && not_required != 0)
		{
			not_required = not_required.replace(','+name,'');
		}
	}

	jQuery('#jform_not_required').val(not_required);
}

// the isSet function
function isSet(val)
{
	if ((val != undefined) && (val != null) && 0 !== val.length){
		return true;
	}
	return false;
} 
