# Generated by Django 4.1.4 on 2023-01-26 21:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0013_announcement_adresse_announcement_commune_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='announcement',
            name='title',
            field=models.CharField(max_length=100, null=True),
        ),
    ]