import { useSelector } from 'react-redux';
import NewsCard from './NewsCard';

const NewsTable = (props) => {
	const { news } = useSelector((state) => state.news);
	return (
		<div className='m-md-2'>
			<table className='table table-dark wrap' style={{ tableLayout: 'fixed' }}>
				<thead>
					<tr>
						<th className='col-4' scope='col'>
							Title
						</th>
						<th className={props.delete ? 'col-5 ' : 'col-6'} scope='col'>
							Detail
						</th>
						<th className='col-2 ' scope='col'>
							Last Update
						</th>
						{props.delete && (
							<th className='col-1' scope='col'>
								Delete
							</th>
						)}
					</tr>
				</thead>
				<tbody>
					{news?.map((item, index) => {
						return (
							<NewsCard
								key={`newscardkey${index}`}
								id={item._id}
								title={item.title}
								detail={item.detail}
								date={item.date}
								delete={props.delete}
							/>
						);
					})}
				</tbody>
			</table>

			{props.delete && (
				<button type='button' className='btn btn-info fw-normal'>
					Total Published News Count: {news ? news.length : 0}
				</button>
			)}
		</div>
	);
};

export default NewsTable;
