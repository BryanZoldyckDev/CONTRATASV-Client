export class OfferFormFields {
	static formFields = {
		offerTitle: '',
		offerPayment: '',
		offerPayday: '',
		offerProfession: '',
		offerPrice: '',
		offerArea: '',
		offerDescription: '',
	};
	
	static min = new Date();
	static payDayValidation = (offerPayday) => new Date(offerPayday) > this.min;
	
	static tab = 'Tab';
	static backSpace = 'Backspace';
	static acceptedKeys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
	
	static priceKeyDown = (offerPrice, e) => {
		if([this.backSpace, this.tab].includes(e.key)) return;
		
		if( !this.acceptedKeys.includes(e.key) || offerPrice.length >= 5 ) {
			e.preventDefault();
		}
	}
}