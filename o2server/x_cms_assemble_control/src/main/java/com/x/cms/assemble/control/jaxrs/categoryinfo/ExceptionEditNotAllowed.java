package com.x.cms.assemble.control.jaxrs.categoryinfo;

import com.x.base.core.project.exception.PromptException;

class ExceptionEditNotAllowed extends PromptException {

	private static final long serialVersionUID = 1859164370743532895L;

	ExceptionEditNotAllowed( String message ) {
		super( message );
	}
}
