# backend/firebase_config.py
import firebase_admin
from firebase_admin import credentials, firestore

cred = credentials.Certificate("serviceAccountKey.json")
firebase_admin.initialize_app(cred)
db = firestore.client()

health_data = {
    'date': '2023-10-05',
    'steps': 8500,
    'weight': 75.3,        # Neu
    'blood_pressure': '120/80', # Neu
    'mood': 'neutral',
    'sleep': '7h',
    'weather': {'temp': 18, 'air_quality': 45}
}
