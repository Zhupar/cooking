from rest_framework import serializers
from ..models import Category, Recipe


class CategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = Category
        fields = '__all__'

class RecipeSerializer(serializers.ModelSerializer):

    class Meta:
        model = Recipe
        fields = '__all__'

class RecipeRetrieveSerializer(serializers.ModelSerializer):
    recipe_category = CategorySerializer()

    class Meta:
        model = Recipe
        fields='__all__'