from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class Announcement(models.Model):

    CATEGORY = (
        ('Primaire', 'Primaire'),
        ('Collège', 'Collège'),
        ('Lycée', 'Lycée')
    )

    category = models.CharField(max_length=50, null=True, choices=CATEGORY)
    title = models.CharField(max_length=100, null=True)
    theme = models.CharField(max_length=50, null=True)
    modality = models.BooleanField(default=False)
    description = models.CharField(max_length=200, null=True)
    rate = models.IntegerField()
    wilaya = models.CharField(max_length=50, null=True)
    commune = models.CharField(max_length=50, null=True)
    adresse = models.CharField(max_length=200, null=True)
    announcer = models.ForeignKey(
        User, db_column="user", on_delete=models.CASCADE)

    date_created = models.DateTimeField(auto_now_add=True, null=True)
    photo = models.ImageField(null=True, blank=True)
