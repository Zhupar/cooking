from django.urls import path

from rest_framework import routers
from .views import CategoryViewSet, RecipeViewSet

router = routers.SimpleRouter()
router.register('category', CategoryViewSet, basename='category')
router.register('recipe', RecipeViewSet, basename='recipe')

urlpatterns = []
urlpatterns += router.urls