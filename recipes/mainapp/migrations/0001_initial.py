# Generated by Django 3.2.9 on 2021-12-02 18:53

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255, verbose_name='category name')),
                ('slug', models.SlugField(unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='Recipe',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255, verbose_name='recipe name')),
                ('food_pic', models.ImageField(upload_to='recipe/')),
                ('slug', models.SlugField(unique=True)),
                ('ingredients', models.TextField()),
                ('cooking', models.TextField()),
                ('pub_date', models.DateTimeField(auto_now=True)),
                ('in_archive', models.BooleanField(default=False)),
                ('recipe_category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='mainapp.category', verbose_name='category name')),
            ],
        ),
    ]
