import css from './App.module.css';
import { lazy, Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import RestrictedRoute from './RestrictedRoute';
import PrivateRoute from './PrivateRoute';
import { refreshUser } from '../redux/auth/operations';
import { selectIsRefreshing } from '../redux/auth/selectors';
import { useDispatch, useSelector } from 'react-redux';

