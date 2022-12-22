import { useQuery } from 'react-query';
import axios from 'axios';

const fetchUserByEmail = (email) => {
  return axios.get(`http://localhost:4000/users/${email}`);
};

const fetchCoursesByChannelId = (channelId) => {
  return axios.get(`http://localhost:4000/channels/${channelId}`);
};

const DependentQueriesPage = ({ email }) => {
  const { data: user } = useQuery(['user', email], () => fetchUserByEmail(email));
  const channelId = user?.data.channelId;

  useQuery(['courses', channelId], () => fetchCoursesByChannelId(channelId), {
    enaled: !!channelId,
  });

  return <div>DependentQueriesPage</div>;
};
export default DependentQueriesPage;
