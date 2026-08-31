import {StoreLocation} from '../type/Store';

export const storeLocations:Record<string, StoreLocation> =
{
  bogota: {
    id: 'bogota',
    name: 'Tienda Bogotá',
    city: 'Bogotá',
    address: 'Calle 123 #45-67, Bogotá, Colombia',
    phone: '+57 123 456 7890',
    whatsapp: '+57 300 123 4567',
    schedule: 'Lunes a Sábado: 10:00 AM - 8:00 PM',
    image: '/tienda-bogota.jpg',
    googleMapsUrl: 'https://goo.gl/maps/your-google-maps-link-bogota',
    isActive: true,
    },
}