import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LocationService {
    googleMapsStyles = [
        {
            'featureType': 'poi',
            'elementType': 'labels.text.fill',
            'stylers': [
                {
                    'color': '#cb0000'
                }
            ]
        },
        {
            'featureType': 'poi.business',
            'elementType': 'labels.icon',
            'stylers': [
                {
                    'hue': '#ff0000'
                }
            ]
        },
        {
            'featureType': 'road',
            'elementType': 'geometry.fill',
            'stylers': [
                {
                    'hue': '#ff0000'
                }
            ]
        },
        {
            'featureType': 'water',
            'elementType': 'geometry.fill',
            'stylers': [
                {
                    'color': '#cdcdcd'
                }
            ]
        },
        {
            'featureType': 'water',
            'elementType': 'labels.text.fill',
            'stylers': [
                {
                    'color': '#5a5a5a'
                }
            ]
        }
    ];

    constructor() {
    }
}
