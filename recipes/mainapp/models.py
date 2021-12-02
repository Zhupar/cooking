from django.db import models

class Category(models.Model):

    name = models.CharField(max_length=255, verbose_name="category name")
    slug = models.SlugField(unique=True)

    def __str__(self):
        return self.name


class RecipeQuerySet(models.QuerySet):
    def find_by_title(self, title):
        return self.filter(title__icontains=title)


class RecipeManager(models.Manager):
    def get_queryset(self):
        return RecipeQuerySet(self.model, using=self._db)

    def all(self):
        return self.get_queryset().filter(in_archive=False)

    def find_by_title(self, title):
        return self.get_queryset().find_by_title(title)


class Recipe(models.Model):

    recipe_category = models.ForeignKey(Category, verbose_name="category name", on_delete=models.CASCADE)
    title = models.CharField(max_length=255, verbose_name='recipe name')
    food_pic = models.ImageField(upload_to='recipe/', blank=True, null=True)
    slug = models.SlugField(unique=True)
    ingredients = models.TextField()
    cooking = models.TextField()
    pub_date = models.DateTimeField(auto_now=True)
    in_archive = models.BooleanField(default=False)
    objects = RecipeManager()

    def __str__(self):
        return f"{self.title} category: {self.recipe_category.name}"

