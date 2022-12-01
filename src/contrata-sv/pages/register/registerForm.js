export class RegisterFormFields {
	static formFields = {
		registerName: '',
		registerLastName: '',
		registerEmail: '',
		registerDui: '',
		registerPhone: '',
		registerBirthDate: '',
		registerResidence: '',
		registerDescription: '',
		registerPassword: '',
		confirmPassword: '',
		registerProfessions: []
	}
	
	static tab = 'Tab';
	static backSpace = 'Backspace';
	static acceptedKeys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
	
	static min = new Date('1950-01-01');
	static max = new Date('2002-11-25');
	
	static duiValidation = (registerDui) => registerDui.length !== 9;
	static phoneValidation = (registerPhone) => registerPhone.length !== 8;
	static passwordValidation = (registerPassword, confirmPassword) => registerPassword !== confirmPassword;
	static birthDateValidation = (registerBirthDate) => new Date(registerBirthDate) > this.min && this.max < new Date(registerBirthDate);
	
	static calendarKeyDown = (e) => {
		e.preventDefault();
	}
	
	static duiKeyDown = (registerDui, e) => {
		if([this.backSpace, this.tab].includes(e.key)) return;
		
		if( !this.acceptedKeys.includes(e.key) || registerDui.length >= 9 ) {
			e.preventDefault();
		}
	}
	
	static phoneKeyDown = (registerPhone, e) => {
		if([this.backSpace, this.tab].includes(e.key)) return;
		
		if( !this.acceptedKeys.includes(e.key) || registerPhone.length >= 8 ) {
			e.preventDefault();
		}
	};
}



