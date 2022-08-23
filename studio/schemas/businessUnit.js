export default {
	name: 'businessUnit',
	title: 'Business Unit',
	type: 'document',
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string'
		},
		{
			name: 'description',
			title: 'Description',
			type: 'string'
		},
		{
			name: 'bookingSite',
			title: 'Booking Site',
			type: 'string'
		},
		{
			name: 'cancellationPolicy',
			title: 'Cancellation Policy',
			type: 'blockContent'
		},
		{
			name: 'heroImage',
			title: 'Hero Image',
			type: 'image'
		},
		{
			name: 'logo',
			title: 'Logo',
			type: 'image'
		},
		{
			name: 'phoneNumber',
			title: 'Phone Number',
			type: 'string'
		},
		{
			name: 'email',
			title: 'Email',
			type: 'string'
		},
		{
			name: 'address',
			title: 'Address',
			type: 'string'
		}
	]
};
