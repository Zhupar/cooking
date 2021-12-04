from rest_framework import serializers
from ..models import Category, Recipe


class CategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = Category
        fields = '__all__'

class CategoryDetailSerializer(serializers.ModelSerializer):
    recipes = serializers.SerializerMethodField()

    class Meta:
        model = Category
        fields = '__all__'

    @staticmethod
    def get_recipes(obj):
        return RecipeSerializer(Recipe.objects.filter(recipe_category=obj), many=True).data

class RecipeSerializer(serializers.ModelSerializer):

    class Meta:
        model = Recipe
        fields = '__all__'

class RecipeRetrieveSerializer(serializers.ModelSerializer):
    recipe_category = CategorySerializer()

    class Meta:
        model = Recipe
        fields='__all__'


