# Generated by Django 2.2.2 on 2019-07-19 09:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0004_auto_20190719_1402'),
    ]

    operations = [
        migrations.AddField(
            model_name='userprofile',
            name='gender',
            field=models.PositiveSmallIntegerField(blank=True, choices=[(0, 'Female'), (1, 'Male')], null=True),
        ),
    ]
