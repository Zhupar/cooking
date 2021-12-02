from rest_framework import viewsets

from .serializers import CategorySerializer, RecipeSerializer, RecipeRetrieveSerializer
from ..models import Category, Recipe


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class=CategorySerializer


class RecipeViewSet(viewsets.ModelViewSet):
    queryset = Recipe.objects.all()
    serializer_class=RecipeSerializer


    action_to_serializer = {
        "list": RecipeRetrieveSerializer,
        "retrieve": RecipeRetrieveSerializer
    }

    def get_serializer_class(self):
        return self.action_to_serializer.get(
            self.action, self.serializer_class
        )